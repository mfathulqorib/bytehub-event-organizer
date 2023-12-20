import { NextResponse } from "next/server";
import * as jose from "jose";
import { SECRET_KEY } from "./config/apiUrl";

export default async function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (token) {
    try {
      // verifikasi token
      const secretKey = new TextEncoder().encode(SECRET_KEY);

      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
