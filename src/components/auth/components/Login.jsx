"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { MailIcon } from "./Icons/MailIcon";
import { PasswdIcon } from "./Icons/PasswdIcon";
import { useLogin } from "../hooks/useLogin";
import { Logo } from "@/components/Logo";

export const Login = () => {
  const { isLoading, loginData, handleChange, handleLogin } = useLogin();
  const { email, password } = loginData;

  return (
    <>
      <form className="my-[5.5rem] flex h-max flex-col justify-center py-10">
        <section className="flex flex-col gap-7">
          <div className="space-y-2">
            <Link href="/">
              <Logo />
            </Link>
            <div className="text-3xl font-bold">Welcome Back!</div>
            <p className="text-sm">Login to your account</p>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              type="email"
              name="email"
              autocomplete="email"
              placeholder="email@domain.com"
              value={email}
              endContent={<MailIcon />}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              autocomplete="on"
              placeholder="password"
              value={password}
              endContent={<PasswdIcon />}
              onChange={handleChange}
            />
            <Button
              className="bg-[#5acddc] text-white"
              onClick={handleLogin}
              isLoading={isLoading}
            >
              Login
            </Button>
          </div>
        </section>
      </form>
      <section className="flex justify-center gap-1 text-sm">
        <div>Don't have an account?</div>
        <Link href="/register" className="text-blue-400">
          Register
        </Link>
      </section>
    </>
  );
};
