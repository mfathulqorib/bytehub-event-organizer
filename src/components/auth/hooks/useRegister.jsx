"use client";

import React, { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  async function handleRegister() {
    const { name, email, password } = registerData;

    if (name && email && password) {
      // Check if email registered
      setLoading(true);
      try {
        const responseLogin = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const dataLogin = await responseLogin.json();

        console.log(responseLogin);

        if (responseLogin.status === 200 || responseLogin.status === 401) {
          setLoading(false);
          toast.error("Account already registered!");
        } else {
          // Registered account if email didn't exist
          const responseRegister = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          });
          const dataRegistered = await responseRegister.json();

          console.log(responseRegister);

          setLoading(false);
          setRegisterData({
            name: "",
            email: "",
            password: "",
          });
          toast.success("User registered, please login");
        }
      } catch (error) {
        setLoading(false);
      }
    } else {
      toast.error(
        `Register failed. Please input your ${name ? "" : "name,"} ${
          email ? "" : "email, and"
        } ${password ? "" : "password"}`,
      );
    }
  }

  return { loading, handleChange, handleRegister, registerData };
};
