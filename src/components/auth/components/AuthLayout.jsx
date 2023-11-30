import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-[1.8fr_minmax(320px,_1.2fr)] ">
      <div className="hidden lg:flex lg:justify-between lg:items-center bg-gradient-to-r from-[#ffdde1] from-0% to-[#ee9ca7] to-55% rounded-r-3xl">
        <div className="w-[92%] relative rounded-r-lg overflow-hidden">
          <Image
            width={0}
            height={0}
            src="/photo1.jpg"
            sizes="100vw"
            style={{ width: "100%", height: "auto", opacity: "0.9" }}
            priority
          />
          <div className=" text-xl w-max h-max absolute text-[#eff7f6] left-[0vw] top-[50vh] backdrop-blur-[10px] z-10  border-gray-300 px-6 py-3 xl:text-3xl rounded-r-lg border-y-1 border-r-1 leading-relaxed font-medium select-none">
            <span>
              Discover Cool Events Around
              <Sparkles className="inline ml-3" size={35} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <section className="mx-10 w-[400px] h-screen flex flex-col justify-around ">
          {children}
        </section>
      </div>
    </main>
  );
};
