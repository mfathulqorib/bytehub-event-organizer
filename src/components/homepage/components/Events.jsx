"use client";
import React, { useState } from "react";
import { EventCard } from "./EventCard";
import Link from "next/link";
// import { API_URL_EVENT } from "@/config/apiUrl"; <- not use
import { SearchIcon } from "./icons/Search";
import { getMonth } from "@/lib/cardLibray";

export const Events = ({ allData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = allData.filter((event) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const locationLowerCase = event.location.toLowerCase();

    return locationLowerCase.includes(searchTermLowerCase);
  });

  // Below fucntion not use yet in this file
  //
  // const filterEventsByDate = (allData) => {
  //   const today = new Date();
  //   const todayDateString = today.toDateString();

  //   const filteredEvents = allData.filter((event) => {
  //     const eventDateString = new Date(event.date).toDateString();
  //     return eventDateString === todayDateString;
  //   });
  //   return filteredEvents;
  // };

  return (
    <div className="flex flex-col gap-10 p-10">
      <section id="all-events" className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">All Events Arround You</h1>
        <div className="flex items-center gap-3 border-b-2 border-gray-500 py-3 ">
          <SearchIcon />
          <input
            type="text"
            name="filtered-location"
            autoComplete="filtered-location"
            placeholder="Jakarta"
            onChange={(event) => setSearchTerm(event.target.value)}
            className="px-3 focus:outline-none"
          />
        </div>
      </section>
      <section className="grid max-h-[80vh] grid-cols-2 gap-5 overflow-y-auto p-4 shadow-lg shadow-black/30 lg:grid-cols-3">
        {filteredEvents.map(
          ({ name, description, location, date, isBanned, id }, index) => {
            if (getMonth(date) !== "Invalid Date") {
              return (
                <Link href={`/events/${id}`} key={id}>
                  <EventCard
                    name={name}
                    description={description}
                    location={location}
                    date={date}
                    isBanned={isBanned}
                  />
                </Link>
              );
            }
          },
        )}
      </section>
    </div>
  );
};
