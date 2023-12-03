import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const imageA = "https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // const imageB = "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // const imageC = "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGV2ZW50fGVufDB8fDB8fHww"

  return (
    <div className="relative mt-[56px] block bg-gray-800">
      <div className="-z-9 absolute h-full w-full opacity-10">
        <Image src={heroImage} fill className="object-cover" alt="" priority />
      </div>
      <div className="gap-20 p-20 text-white">
        <section className="w-50 flex flex-col items-center gap-5 text-center">
          <h1 className="text-3xl font-bold">Find Your Event</h1>
          <p className="text-xl">
            In a world brimming with diverse experiences and endless
            possibilities, the desire to connect has never been stronger. Our
            event hub app is your gateway to a universe of enriching encounters,
            where you'll discover, explore, and engage with a vibrant community
            of like-minded individuals.
          </p>
          <div>
            <Link href={"#all-events"}>
              <Button className="font-medium">Explore</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
