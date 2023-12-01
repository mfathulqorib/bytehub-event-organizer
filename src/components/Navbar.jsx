import React from "react";
import { LogoNav } from "./Logo";
import { Button } from "@nextui-org/react";
import { LogOut } from "lucide-react";

export const Navbar = ({ name }) => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-[#ffdde1] from-0% to-[#ee9fa8] to-70% px-6 py-2 drop-shadow-md backdrop-blur-[20px]">
      <LogoNav />
      <nav className=" flex items-center gap-8">
        <div className="text-medium font-semibold tracking-widest text-white">
          {`Hello, ${name}`}
        </div>
        <Button className="bg-white text-medium font-semibold">
          <span className="flex items-center gap-2 text-black">
            Logout
            <LogOut size={20} />
          </span>
        </Button>
      </nav>
    </header>
  );
};
