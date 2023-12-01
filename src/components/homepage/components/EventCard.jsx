import React from 'react'

export const EventCard = ({name, description, location, date, isBanned}) => {
  return (
    <div className='shadow-lg border-2 border-gray-400 p-5'>
        <section>{name}</section>
        <section>{description.length > 50 ? `${description.slice(0, 50)}...` : description}</section>
        <section>{location}</section>
    </div>
  )
}
