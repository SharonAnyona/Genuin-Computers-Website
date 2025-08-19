import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Check if user is accessing super admin routes
    if (req.nextUrl.pathname.startsWith("/super-admin")) {
      // Allow access to login page
      if (req.nextUrl.pathname === "/super-admin/login") {
        return NextResponse.next();
      }
      
      // For other super admin routes, check if user has super_admin role
      const token = req.nextauth.token;
      if (!token || token.role !== "super_admin") {
        return NextResponse.redirect(new URL("/super-admin/login", req.url));
      }
    }

    // Check if user is accessing regular admin routes
    if (req.nextUrl.pathname.startsWith("/admin")) {
      const token = req.nextauth.token;
      if (!token || (token.role !== "admin" && token.role !== "super_admin")) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to public routes
        if (!req.nextUrl.pathname.startsWith("/admin") && 
            !req.nextUrl.pathname.startsWith("/super-admin")) {
          return true;
        }
        
        // For protected routes, require authentication
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/super-admin/:path*"]
};
