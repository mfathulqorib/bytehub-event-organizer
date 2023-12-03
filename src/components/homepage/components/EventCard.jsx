import Image from 'next/image'
import React from 'react'
import { shortName, formattedDate, getDay, getMonth, fakeImg } from '@/lib/cardLibray';
import { Avatar, AvatarGroup } from '@nextui-org/react';

export const EventCard = ({name, description, location, date, isBanned}) => {
  
  return (
    <div className='shadow-lg border-2 border-gray-100 pb-4'>
      <div className=''>
        <Image src={fakeImg} width={500} height={150} alt="" className='rounded-t-xl object-cover h-[250px] overflow-hidden'/>
      </div>
      <section className='flex flex-col gap-3 px-4'>
        <div className='text-lg font-bold mt-2'>{shortName(name, 25)}</div>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col items-center justify-center bg-gray-200 text-orange-900 p-2 rounded-xl'>
            <h1 className='text-md'>{getMonth(date)}</h1>
            <p className='text-lg font-bold'>
              {`${getDay(date)==="Invalid Date"? "": getDay(date)}`}
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <div className='text-sm'>{location}</div>            
              <div className={`text-sm ${isBanned ? 'text-red-500' : 'text-green-500'}`}>
                {isBanned ? 'Not Available' : 'Available'}
              </div>
            </div>
            
          </div>
          <div>
            <AvatarGroup isBordered>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </AvatarGroup>
          </div>
        </div>
        <div className='text-sm text-gray-500'>{shortName(description, 50)}</div>
      </section>
    </div>
  )
}
