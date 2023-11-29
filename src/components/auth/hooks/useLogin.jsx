"use client"
import React, {useState} from 'react'
import { API_URL } from "@/config/apiUrl"
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useLogin = () => {
    const router = useRouter();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData, 
            [name]: value})
    };

    const handleSubmitButton = async () => {
        const { email, password } = loginData;
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( { email, password })
        });
        const data = await res.json();
        Cookies.set("token", data.token);

        if (!data || !data.token) {
            setLoading(false);
            toast.error("Error login!");
            return;
          }
      
          setLoading(false);
          toast.success("Login succesfully, redirecting...");
          setTimeout(() => router.push("/dashboard"), 1000);
          return;

    }

    return {isLoading, handleChange, handleSubmitButton};
}
