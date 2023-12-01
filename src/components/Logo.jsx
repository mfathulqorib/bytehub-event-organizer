import { Pacifico } from "next/font/google";
import React from "react";

const font = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export const Logo = () => {
  return (
    <div
      className={`${font.className} mb-5 text-4xl tracking-wider text-[#f95738]`}
    >
      EventUs.
    </div>
  );
};
