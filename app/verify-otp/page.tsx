"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CustomButton } from "@/components";
import toast from "react-hot-toast";
import { BACKEND_URL } from "@/config";

interface VerifyOtpResponse {
  status: number;
  message: string;
  token?: string;
  error?: string;
}

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  // Handle OTP input change
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value && !/^[0-9]$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  // Handle paste OTP
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email not found. Please try registering again.");
      router.push("/register");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${BACKEND_URL}/auth/api/auth/sendOTP/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend OTP. Please try again.");
      }

      toast.success("OTP has been resent to your email.");
      setResendDisabled(true);
      setCountdown(30);
    } catch (error: any) {
      console.error("Resend OTP error:", error);
      setError(error.message || "Failed to resend OTP. Please try again.");
      toast.error(error.message || "Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Email not found. Please try registering again.");
      router.push("/register");
      return;
    }

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${BACKEND_URL}/auth/api/auth/verifyOTP/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: otpCode,
        }),
      });

      const data: VerifyOtpResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "OTP verification failed. Please try again.");
      }

      // Save the token if present
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      toast.success("Email verified successfully!");
      router.push("/login");
    } catch (error: any) {
      console.error("OTP verification error:", error);
      setError(error.message || "OTP verification failed. Please try again.");
      toast.error(error.message || "OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  // Auto-enable resend button after component mounts
  useEffect(() => {
    setResendDisabled(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Your Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent a verification code to {email}
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleVerifyOtp}>
          <div className="flex justify-center space-x-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="h-16 w-16 rounded-md border border-gray-300 text-center text-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                disabled={isLoading}
                autoFocus={index === 0}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <CustomButton
              type="submit"
              title={isLoading ? "Verifying..." : "Verify OTP"}
              disabled={isLoading || otp.some((digit) => !digit)}
              containerStyles={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading || otp.some((digit) => !digit) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />

            <div className="text-sm">
              <span className="text-gray-600">Didn't receive the code? </span>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resendDisabled || isLoading}
                className={`font-medium text-indigo-600 hover:text-indigo-500 ${
                  resendDisabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {resendDisabled ? `Resend in ${countdown}s` : "Resend"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
