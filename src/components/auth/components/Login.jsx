"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { MailIcon } from "./Icons/MailIcon";
import { PasswdIcon } from "./Icons/PasswdIcon";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { isLoading, loginData, handleChange, handleLogin } = useLogin();
  const { email, password } = loginData;

  return (
    <>
      <form className="flex flex-col justify-center py-10 my-[5.5rem] h-max">
        <section className="flex flex-col gap-10">
          <div className="space-y-1">
            <div className="text-xl font-bold">Welcome Back!</div>
            <p className="text-xs">Login to your account</p>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              type="email"
              name="email"
              placeholder="email@domain.com"
              value={email}
              endContent={<MailIcon />}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              endContent={<PasswdIcon />}
              onChange={handleChange}
            />
            <Button color="primary" onClick={handleLogin} isLoading={isLoading}>
              Login
            </Button>
          </div>
        </section>
      </form>
      <section className="flex justify-center gap-1 text-xs">
        <div>Don't have an account?</div>
        <Link href="/register" className="text-blue-400">
          Register
        </Link>
      </section>
    </>
  );
};
