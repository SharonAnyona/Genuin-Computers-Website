
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { useUserStore } from "../_zustand/userStore";


export default function Layout({ children }: { children: React.ReactNode }) {
  // Client-side check for user role
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || user.role === "user") {
      redirect("/");
      toast.error("Access denied. Admins only.");
      return null;
    }
  }
  return <>{children}</>;
}
