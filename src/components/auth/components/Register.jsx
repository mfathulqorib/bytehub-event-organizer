"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { MailIcon } from "./Icons/MailIcon";
import { PasswdIcon } from "./Icons/PasswdIcon";
import { useRegister } from "../hooks/useRegister";
import { Logo, LogoMd } from "@/components/Logo";

export const Register = () => {
  const { loading, handleChange, handleRegister, registerData } = useRegister();
  const { name, email, password } = registerData;

  return (
    <>
      <form className="my-[5.5rem] flex h-max flex-col justify-center py-5">
        <section className=" flex flex-col gap-7">
          <div className="space-y-2">
            <Link href="/">
              <Logo />
            </Link>
            <div className="text-3xl font-bold">Don't Have an Account?</div>
            <p className="text-sm">Register to create your account</p>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              name="name"
              type="text"
              placeholder="name"
              autoComplete="name"
              value={name}
              onChange={handleChange}
            />

            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@domain.com"
              value={email}
              onChange={handleChange}
              endContent={<MailIcon />}
            />

            <Input
              name="password"
              type="password"
              autocomplete="off"
              placeholder="password"
              value={password}
              onChange={handleChange}
              endContent={<PasswdIcon />}
            />

            <Button
              className="bg-[#5acddc] text-white"
              onClick={handleRegister}
              isLoading={loading}
            >
              Register
            </Button>
          </div>
        </section>
      </form>
      <section className=" flex justify-center gap-1 text-sm">
        <div>Have an account?</div>
        <Link href="/login" className="text-blue-400">
          Login
        </Link>
      </section>
    </>
  );
};
