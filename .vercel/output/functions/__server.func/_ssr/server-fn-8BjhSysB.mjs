import { c as createServerRpc, g as getAdminFirestore } from "./firebase-admin.server-DIx8P1Z3.mjs";
import { c as createServerFn } from "./server-D7pJ5bR7.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const formSubmissionSchema = objectType({
  formType: enumType(["contact", "volunteer", "partner", "transfer-request"]),
  name: stringType().trim().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
  email: stringType().trim().email("Please provide a valid email address").max(100, "Email cannot exceed 100 characters"),
  phone: stringType().trim().max(30, "Phone number cannot exceed 30 characters").optional().or(literalType("")),
  organization: stringType().trim().max(100, "Organization cannot exceed 100 characters").optional().or(literalType("")),
  category: stringType().trim().max(60, "Category cannot exceed 60 characters").optional().or(literalType("")),
  message: stringType().trim().min(5, "Message must be at least 5 characters").max(2e3, "Message cannot exceed 2,000 characters"),
  honeypot: stringType().max(0, "Bot submission detected").optional().or(literalType(""))
});
const submitInquiryForm_createServerFn_handler = createServerRpc({
  id: "c160dc37c837774097d31d0f5f02ae0b520996b78814e556c9b594c322ec3cd1",
  name: "submitInquiryForm",
  filename: "src/lib/server-fn.ts"
}, (opts) => submitInquiryForm.__executeServer(opts));
const submitInquiryForm = createServerFn({
  method: "POST"
}).validator((data) => {
  return formSubmissionSchema.parse(data);
}).handler(submitInquiryForm_createServerFn_handler, async ({
  data
}) => {
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: false,
      error: "Bot submission detected. Please refresh and try again."
    };
  }
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
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (firestoreError) {
    console.error("Firestore submission write error:", firestoreError);
    const msg = firestoreError instanceof Error ? firestoreError.message : "Database write failed";
    return {
      success: false,
      error: `Submission failed to record: ${msg}. Please contact our secretariat directly at hello@envopeace.org.`
    };
  }
  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_TO_EMAIL || "hello@envopeace.org";
  if (apiKey && apiKey.trim().length > 0) {
    try {
      const resendPkg = "resend";
      const {
        Resend
      } = await import(
        /* @vite-ignore */
        resendPkg
      );
      const resend = new Resend(apiKey);
      const typeLabel = data.formType === "volunteer" ? "Volunteer Application" : data.formType === "partner" ? "Partnership Inquiry" : data.formType === "transfer-request" ? "Bank Transfer Details Request" : "General Contact Inquiry";
      const lines = [`Form Type: ${typeLabel}`, `Full Name: ${data.name}`, `Email: ${data.email}`, phoneValue ? `Phone: ${phoneValue}` : null, data.organization ? `Organization: ${data.organization}` : null, data.category ? `Category/Reason: ${data.category}` : null, "", "Message:", data.message].filter((l) => l !== null);
      const emailResponse = await resend.emails.send({
        from: "Envo Peace Foundation <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: data.email,
        subject: `[Envo Peace] ${typeLabel}: ${data.name}`,
        text: lines.join("\n")
      });
      if (emailResponse.error) {
        console.error("Resend delivery failed with response error:", emailResponse.error);
      }
    } catch (resendError) {
      console.error("Resend email dispatch error:", resendError);
    }
  } else {
    console.warn("RESEND_API_KEY is not configured; email notification skipped.");
  }
  return {
    success: true,
    message: "Your message has been received and recorded by our secretariat. We will respond within two business days."
  };
});
export {
  submitInquiryForm_createServerFn_handler
};
