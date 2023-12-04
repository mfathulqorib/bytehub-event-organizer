import React from "react";
import { Navbar } from "@/components/Navbar";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "@/config/apiUrl";

export default function page() {
  // get cookie from browser
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;

  // decode token
  const payload = verify(token, SECRET_KEY);
  console.log(payload);
  const { name } = payload;

  return <Navbar name={name} />;
}
