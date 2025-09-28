// *********************
// Role of the component: Topbar of the header
// Name of the component: HeaderTop.tsx
// Developer:Sharon Anyona
// Version: 1.0
// Component call: <HeaderTop />
// Input parameters: no input parameters
// Output: topbar with phone, email and login and register links
// *********************

"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser, FaBoxOpen } from "react-icons/fa6";
import { useUserStore } from "../app/_zustand/userStore";

const HeaderTop = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  const handleLogout = () => {
    toast.success("Logout successful!");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    logout();
    window.location.reload();
  };
  return (
    <div className=" sticky top-0 z-5 h-10 text-black  bg-gray-200 shadow-lg  max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
      <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0">
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          <li className="flex items-center gap-x-2 font-semibold">
            <FaHeadphones className="text-black" />
            <span>+254 700 899 115</span>
          </li>
          <li className="flex items-center gap-x-2 font-semibold">
            <FaRegEnvelope className="text-black text-xl" />
            <span>info@genuincomputers.co.ke</span>
          </li>
        </ul>
        <ul className="flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold">
          {!user ? (
            <>
              <li className="flex items-center">
                <Link
                  href="/login"
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaRegUser className="text-black" />
                  <span>Login</span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/register"
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaRegUser className="text-black" />
                  <span>Register</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <span className="text-base">
                {user?.first_name && user?.last_name
                  ? `${user.first_name} ${user.last_name}`
                  : user?.username
                  ? user.username
                  : user?.email}
              </span>
              <li className="flex items-center">
                <Link
                  href="/orders"
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaBoxOpen className="text-black" />
                  <span>Orders</span>
                </Link>
              </li>
              <li className="flex items-center">
                <button
                  onClick={() => handleLogout()}
                  className="flex items-center gap-x-2 font-semibold"
                >
                  <FaRegUser className="text-black" />
                  <span>Log out</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
