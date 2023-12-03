import { API_URL } from "@/config/apiUrl";
import React from "react";

export const useFetchData = () => {
  const getAllEvents = async () => {
    const res = await fetch(`https://eventmakers-api.vercel.app/api/events`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };
  return getAllEvents;
};
