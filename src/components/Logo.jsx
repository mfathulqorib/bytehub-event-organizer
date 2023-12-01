import { Pacifico } from "next/font/google";
import React from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export const Logo = () => {
  return (
    <div
      className={`${pacifico.className} mb-5 text-4xl tracking-wider text-[#f95738]`}
    >
      EventUs.
    </div>
  );
};

export const LogoNav = () => {
  return (
    <div
      className={`${pacifico.className} text-2xl font-normal tracking-wider text-[#f95738]`}
    >
      EventUs.
    </div>
  );
};
