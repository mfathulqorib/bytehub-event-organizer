import Image from "next/image";
import React from "react";
import { Sparkles } from "lucide-react";
import { DM_Mono, Expletus_Sans } from "next/font/google";

const expletus_sans = Expletus_Sans({
  subsets: ["latin"],
});

const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const AuthLayout = ({ children }) => {
  return (
    <main className="grid h-screen grid-cols-1 lg:grid-cols-[1.7fr_minmax(320px,_1.3fr)]">
      <div className="hidden rounded-r-2xl bg-gradient-to-r from-[#ffdde1] from-0% to-[#ee9fa8] to-55% lg:flex lg:items-center lg:justify-between">
        <div className="relative w-[90%] overflow-hidden rounded-r-lg">
          <Image
            width={0}
            height={0}
            src="/photo1.jpg"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="landing page photo"
            quality={50}
            priority
          />
          <div className=" absolute left-[0vw] top-[23vw] z-10 h-max w-max select-none rounded-r-lg border-y-1  border-r-1 border-gray-300 px-6 py-3 text-2xl font-semibold leading-relaxed text-[#eff7f6] backdrop-blur-[10px]">
            <span className={`${dm_mono.className}`}>
              Discover Cool Events Around
              <Sparkles className="ml-3 inline" size={35} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <section className="mx-10 flex h-screen w-[400px] flex-col justify-around ">
          {children}
        </section>
      </div>
    </main>
  );
};
