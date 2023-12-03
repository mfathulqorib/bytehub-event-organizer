import React from "react";
import { Logo, LogoNav } from "../../Logo";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export const Header = () => {
  return (
    <nav className="fixed left-0 top-0 z-[9999] w-screen bg-gradient-to-r from-[#ffdde1] from-0% to-[#ee9fa8] to-70% drop-shadow-md">
      <div className="flex items-center justify-between px-10 py-2">
        <div className="z-10">
          <Link href="/">
            <LogoNav />
          </Link>
        </div>
        <div className="absolute left-0 w-full text-center text-lg font-medium">
          <div className="flex justify-center gap-10">
            <Link
              href={"#all-events"}
              className="duration-100 ease-in hover:text-xl hover:text-orange-700"
            >
              Explore
            </Link>
            <Link
              href={"/login"}
              className="duration-100 ease-in hover:text-xl hover:text-orange-700"
            >
              Events
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          <Button className="font-medium" size="md">
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button
            size="md"
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 font-medium text-white shadow-lg"
          >
            <Link href={"/register"}>Getting Start</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
