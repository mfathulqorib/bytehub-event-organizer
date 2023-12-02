import React from 'react'
import { EventCard } from './EventCard'
import Link from 'next/link'
import { API_URL_EVENT } from '@/config/apiUrl'
import { SearchIcon } from './icons/Search'

export const Events = ({allData}) => {

  return (
    <div className='flex flex-col p-10 gap-10'>
      <section id='all-events' className='flex justify-between items-center'>
        <h1 className='text-3xl font-extrabold'>All Events Arround You</h1>
        <div className='flex gap-3 items-center border-b-2 border-gray-500 py-3'>
          <SearchIcon/>
          <input type='text' placeholder='city...'/>
        </div>
      </section>
      <section className='grid grid-cols-2 lg:grid-cols-3 gap-5 max-h-screen  overflow-y-auto'>
        {allData.map(({name, description, location, date, isBanned, id}, index)=>{
          return <Link href={`${API_URL_EVENT}/${id}`} key={toString(index)}><EventCard name={name} description={description} location={location} date={date} isBanned={isBanned} /></Link>
        })}
      </section>
    </div>
  )
}
