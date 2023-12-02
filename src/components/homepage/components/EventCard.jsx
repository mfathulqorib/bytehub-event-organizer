import Image from 'next/image'
import React from 'react'
import { shortName, formattedDate, fakeImg } from '@/lib/cardLibray';
import { Avatar, AvatarGroup } from '@nextui-org/react';

export const EventCard = ({name, description, location, date, isBanned}) => {
  
  return (
    <div className='shadow-lg border-2 border-gray-200 p-4'>
      <Image src={fakeImg} width={400} height={200} className='rounded-t-xl object-cover'/>
      <section className='flex items-center'>
        <div>
          <div className='text-sm'>{formattedDate(date)}</div>
        </div>
        <div>
          <div className='text-lg font-bold mt-2'>{shortName(name, 25)}</div>
          <div className='text-sm text-gray-500'>{shortName(description, 50)}</div>
          <div className='flex gap-3'>
            <div className='text-sm'>{location}</div>            
            <div className={`text-sm ${isBanned ? 'text-red-500' : 'text-green-500'}`}>
              {isBanned ? 'Banned' : 'Allowed'}
            </div>
          </div>
        </div>
        <div>
          <AvatarGroup isBordered>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          </AvatarGroup>
        </div>
      </section>
    </div>
  )
}
