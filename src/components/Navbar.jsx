import React from "react";
import { LogoNav } from "./Logo";
import { Button } from "@nextui-org/react";
import { LogOut } from "lucide-react";

export const Navbar = ({ name }) => {
  return (
    <nav className="fixed left-0 top-0 z-[9999] w-screen bg-gradient-to-r from-[#ffdde1] from-0% to-[#ee9fa8] to-70% drop-shadow-md">
      <div className="flex items-center justify-between  px-10 py-2">
        <LogoNav />
        <header className=" flex items-center gap-8">
          <div className="text-medium font-semibold tracking-widest text-white">
            {`Hello, ${name}`}
          </div>
          <Button className="bg-white text-medium font-semibold">
            <span className="flex items-center gap-2 text-black">
              Logout
              <LogOut size={20} />
            </span>
          </Button>
        </header>
      </div>
    </nav>
  );
};
