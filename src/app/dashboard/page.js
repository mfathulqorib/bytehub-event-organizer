import React from "react";
import { Navbar } from "@/components/Navbar";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export default function page() {
  // get cookie from browser
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;

  // decode token
  const payload = verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);
  console.log(payload);
  const { name } = payload;

  return <Navbar name={name} />;
}
