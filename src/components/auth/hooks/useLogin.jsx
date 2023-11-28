"use client"
import React, {useState} from 'react'
import { API_URL } from "@/config/apiUrl"
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

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
        console.log(data)

        if (!data) {
            setLoading(false);
            toast.error("Error login!");
            return;
          }
      
          setLoading(false);
          toast.success("Login succesfully, redirecting...");
          setTimeout(() => router.push("/dashboard"), 2000);return;

    }

    return {isLoading, handleChange, handleSubmitButton};
}
