import Image from "next/image";
import React from "react";
import {
  shortName,
  // formattedDate, <- this function not use in here
  getDay,
  getMonth,
  fakeImg,
} from "@/lib/cardLibray";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export const EventCard = ({ name, description, location, date, isBanned }) => {
  return (
    <div className="border-2 border-gray-100 pb-4 shadow-lg">
      <div className="">
        <Image
          src={fakeImg}
          width={500}
          height={0}
          className="h-[250px] overflow-hidden rounded-t-xl object-cover"
          alt="Photo card"
        />
      </div>
      <section className="flex items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center rounded-xl bg-gray-200 p-2 text-orange-900">
            <h1 className="text-md">{getMonth(date)}</h1>
            <p className="text-lg font-bold">{`${
              getMonth(date) === "Invalid Date" ? "" : getDay(date)
            }`}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="mt-2 text-lg font-bold">{shortName(name, 25)}</div>
            <div className="flex gap-3">
              <div className="text-sm">{location}</div>
              <div
                className={`text-sm ${
                  isBanned ? "text-red-500" : "text-green-500"
                }`}
              >
                {isBanned ? "Not Available" : "Available"}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {shortName(description, 50)}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {shortName(description, 50)}
        </div>
      </section>
    </div>
  );
};
