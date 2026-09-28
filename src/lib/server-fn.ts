import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getAdminFirestore } from "./firebase-admin.server";

export const formSubmissionSchema = z.object({
  formType: z.enum(["contact", "volunteer", "partner", "transfer-request"]),
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(100, "Email cannot exceed 100 characters"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number cannot exceed 30 characters")
    .optional()
    .or(z.literal("")),
  organization: z
    .string()
    .trim()
    .max(100, "Organization cannot exceed 100 characters")
    .optional()
    .or(z.literal("")),
  category: z
    .string()
    .trim()
    .max(60, "Category cannot exceed 60 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message cannot exceed 2,000 characters"),
  honeypot: z.string().max(0, "Bot submission detected").optional().or(z.literal("")),
});

export type FormSubmissionData = z.infer<typeof formSubmissionSchema>;

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

export const submitInquiryForm = createServerFn({ method: "POST" })
  .validator((data: unknown): FormSubmissionData => {
    return formSubmissionSchema.parse(data);
  })
  .handler(async ({ data }): Promise<FormSubmissionResult> => {
    // 1. Honeypot check
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return {
        success: false,
        error: "Bot submission detected. Please refresh and try again.",
      };
    }

    // 2. Write document to Firestore collection "messages"
    // Fields: name, email, phone, reason, message, createdAt
    const reasonValue = data.category?.trim() || data.formType;
    const phoneValue = data.phone?.trim() || null;

    try {
      const db = await getAdminFirestore();
      await db.collection("messages").add({
        name: data.name,
        email: data.email,
        phone: phoneValue,
        reason: reasonValue,
        message: data.message,
        createdAt: new Date().toISOString(),
      });
    } catch (firestoreError: unknown) {
      console.error("Firestore submission write error:", firestoreError);
      const msg =
        firestoreError instanceof Error ? firestoreError.message : "Database write failed";
      return {
        success: false,
        error: `Submission failed to record: ${msg}. Please contact our secretariat directly at hello@envopeace.org.`,
      };
    }

    // 3. Send Resend email as before
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "hello@envopeace.org";

    if (apiKey && apiKey.trim().length > 0) {
      try {
        const resendPkg = "resend";
        const { Resend } = await import(/* @vite-ignore */ resendPkg);
        const resend = new Resend(apiKey);

        const typeLabel =
          data.formType === "volunteer"
            ? "Volunteer Application"
            : data.formType === "partner"
              ? "Partnership Inquiry"
              : data.formType === "transfer-request"
                ? "Bank Transfer Details Request"
                : "General Contact Inquiry";

        const lines = [
          `Form Type: ${typeLabel}`,
          `Full Name: ${data.name}`,
          `Email: ${data.email}`,
          phoneValue ? `Phone: ${phoneValue}` : null,
          data.organization ? `Organization: ${data.organization}` : null,
          data.category ? `Category/Reason: ${data.category}` : null,
          "",
          "Message:",
          data.message,
        ].filter((l): l is string => l !== null);

        const emailResponse = await resend.emails.send({
          from: "Envo Peace Foundation <onboarding@resend.dev>",
          to: recipientEmail,
          replyTo: data.email,
          subject: `[Envo Peace] ${typeLabel}: ${data.name}`,
          text: lines.join("\n"),
        });

        if (emailResponse.error) {
          console.error("Resend delivery failed with response error:", emailResponse.error);
        }
      } catch (resendError: unknown) {
        console.error("Resend email dispatch error:", resendError);
      }
    } else {
      console.warn("RESEND_API_KEY is not configured; email notification skipped.");
    }

    // If Firestore write succeeded, always report success to visitor
    return {
      success: true,
      message:
        "Your message has been received and recorded by our secretariat. We will respond within two business days.",
    };
  });
