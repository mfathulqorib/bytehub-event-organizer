import React from 'react'
import { EventCard } from './EventCard'

export const Events = ({allData}) => {
  console.log(allData)
  return (
    <div className='flex flex-col p-10 gap-10'>
      <section className='flex justify-between'>
        <h1 className='text-3xl font-extrabold'>All Events Arround You</h1>
        <input type='text' placeholder='city...'/>
      </section>
      <section className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
        {allData.map(({name, description, location, date, isBanned}, index)=>{
          return <EventCard key={toString(index)} name={name} description={description} location={location} date={date} isBanned={isBanned} />
        })}
      </section>
    </div>
  )
}
