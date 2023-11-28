"use client"
import React, {useState} from 'react'
import { API_URL } from "@/config/apiUrl"

export const useLogin = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

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

    }

    return {loginData, handleChange, handleSubmitButton};
}
