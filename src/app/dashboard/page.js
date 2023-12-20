import React from "react";
import { Navbar } from "@/components/Navbar";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { API_URL, SECRET_KEY } from "@/config/apiUrl";
import { Header } from "@/components/homepage/components/Header";
import { Hero } from "@/components/homepage/components/Hero";
import { Events } from "@/components/homepage/components/Events";
import { Footer } from "@/components/homepage/components/Footer";

const getAllEvents = async () => {
  const res = await fetch(`${API_URL}/events`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export default async function page() {
  // get cookie from browser
  const cookieStore = cookies();
  const token = cookieStore.get("token").value;

  // decode token
  const payload = verify(token, SECRET_KEY);
  const { name } = payload;

  const { data } = await getAllEvents();

  return (
    <main>
      <Navbar name={name} />
      <Hero />
      <Events allData={data} />
      <Footer />
    </main>
  );
}
