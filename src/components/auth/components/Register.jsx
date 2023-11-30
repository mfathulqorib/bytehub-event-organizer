"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { MailIcon } from "./Icons/MailIcon";
import { PasswdIcon } from "./Icons/PasswdIcon";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister, registerData } =
    useRegister();
  const { name, email, password } = registerData;

  return (
    <section className="h-screen flex flex-col justify-around">
      <form className="flex flex-col justify-center py-10 my-[5.5rem] h-max">
        <section className=" flex flex-col gap-10">
          <div className="space-y-1">
            <div className="text-xl font-bold">Don't Have an Account?</div>
            <p className="text-xs">Register to create your account</p>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              name="name"
              type="text"
              placeholder="name"
              // endContent={<MailIcon/>}
              // onChange={handleChange}
            />

            <Input
              name="email"
              placeholder="email@domain.com"
              type="email"
              endContent={<MailIcon />}
              // onChange={handleChange}
            />

            <Input
              name="password"
              placeholder="password"
              type="password"
              endContent={<PasswdIcon />}
              // onChange={handleChange}
            />

            <Button
              color="primary"
              //   onClick={handleLogin}
              //   isDisabled={isLoading}
            >
              Register
            </Button>
          </div>
        </section>
      </form>
      <section className=" flex gap-1 text-xs justify-center">
        <div>Have an account?</div>
        <Link href="/login" className="text-blue-400">
          Login
        </Link>
      </section>
    </section>
  );
};
