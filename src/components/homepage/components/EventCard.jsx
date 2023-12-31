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
          <div className="flex w-max flex-col gap-2 pt-3">
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-200 p-2 text-orange-900">
              <h1 className="text-md">{getMonth(date)}</h1>
              <p className="text-lg font-bold">{getDay(date)}</p>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${
                isBanned ? "text-red-500" : "text-green-500"
              }`}
            >
              <span
                className={`block h-2 w-2 animate-pulse rounded-full ${
                  isBanned ? "bg-red-500" : "bg-green-500"
                } `}
              ></span>
              {isBanned ? "Not Available" : "Available"}
            </div>
            <AvatarGroup isBordered>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </AvatarGroup>
          </div>
          <div className="flex flex-col gap-3">
            <div className="mt-2 text-lg font-bold">{shortName(name, 25)}</div>
            <div className="flex gap-3">
              <div className="text-sm">{location}</div>
            </div>
            <div className="text-sm text-gray-500">
              {shortName(description, 50)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
