import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { url } from "inspector";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: " mystry message | Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: " verificationa email send succcessfully",
    };
  } catch (emailError) {
    console.log("error sending verification email", emailError);
    return { success: false, message: "failed to send verificationa email" };
  }
}
