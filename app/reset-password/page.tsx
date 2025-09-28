"use client";

import { CustomButton, SectionTitle } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from "@/config";

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  
  const [formData, setFormData] = useState({
    email: "",
    otp: ["", "", "", ""],
    newPassword: "",
    confirmPassword: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(true);

  // Set email from query params on component mount
  useEffect(() => {
    if (email) {
      setFormData(prev => ({ ...prev, email }));
    } else {
      // If no email in URL, redirect to forgot password
      router.push("/forgot-password");
    }
  }, [email, router]);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value && !/^[0-9]$/.test(value)) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData(prev => ({ ...prev, otp: newOtp }));

    // Move to next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    return "";
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = formData.otp.join("");
    
    if (otpCode.length !== 4) {
      setError("Please enter a valid 4-digit OTP");
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
          email: formData.email,
          otp: otpCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Invalid OTP. Please try again.");
      }

      setOtpVerified(true);
      setShowOtpForm(false);
      toast.success("OTP verified successfully!");
      
    } catch (error: any) {
      console.error("OTP verification error:", error);
      setError(error.message || "Failed to verify OTP. Please try again.");
      toast.error(error.message || "Failed to verify OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    const passwordError = validatePassword(formData.newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${BACKEND_URL}/auth/api/auth/resetpassword/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp.join(""),
          new_password: formData.newPassword,
          confirm_password: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password. Please try again.");
      }

      toast.success("Password reset successfully!");
      router.push("/login");
      
    } catch (error: any) {
      console.error("Reset password error:", error);
      setError(error.message || "Failed to reset password. Please try again.");
      toast.error(error.message || "Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!formData.email) {
      setError("Email not found. Please try again.");
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
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend OTP. Please try again.");
      }

      toast.success("OTP has been resent to your email.");
      
    } catch (error: any) {
      console.error("Resend OTP error:", error);
      setError(error.message || "Failed to resend OTP. Please try again.");
      toast.error(error.message || "Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <SectionTitle title="Reset Password" path="Home | Reset Password" />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {otpVerified ? "Set a New Password" : "Verify Your Identity"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {otpVerified 
              ? "Enter your new password below"
              : `We've sent a verification code to ${formData.email}`}
            
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {error && (
              <div className="mb-6 rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                  </div>
                </div>
              </div>
            )}

            {showOtpForm ? (
              <form className="space-y-6" onSubmit={handleVerifyOtp}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter verification code
                  </label>
                  <div className="mt-2 flex justify-center space-x-4">
                    {[0, 1, 2, 3].map((index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={formData.otp[index]}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
                            const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
                            if (prevInput) prevInput.focus();
                          }
                        }}
                        className="h-12 w-12 rounded-md border border-gray-300 text-center text-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        disabled={isLoading}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                  <div className="mt-2 text-center">
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isLoading}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:opacity-50"
                    >
                      Resend code
                    </button>
                  </div>
                </div>

                <div>
                  <CustomButton
                    type="submit"
                    title={isLoading ? "Verifying..." : "Verify Code"}
                    disabled={isLoading || formData.otp.some(digit => !digit)}
                    containerStyles={`flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isLoading || formData.otp.some(digit => !digit) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleResetPassword}>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    New Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Must be at least 8 characters with uppercase, lowercase, and number
                  </p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm New Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <CustomButton
                    type="submit"
                    title={isLoading ? "Resetting..." : "Reset Password"}
                    disabled={isLoading || !formData.newPassword || !formData.confirmPassword}
                    containerStyles={`flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isLoading || !formData.newPassword || !formData.confirmPassword ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
              </form>
            )}

            <div className="mt-6 text-center text-sm">
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
