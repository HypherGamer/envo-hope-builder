import { c as createSsrRpc } from "./router-BzaOfFLl.mjs";
import { c as createServerFn } from "./server-D7pJ5bR7.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
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
const submitInquiryForm = createServerFn({
  method: "POST"
}).validator((data) => {
  return formSubmissionSchema.parse(data);
}).handler(createSsrRpc("c160dc37c837774097d31d0f5f02ae0b520996b78814e556c9b594c322ec3cd1"));
export {
  submitInquiryForm as s
};
