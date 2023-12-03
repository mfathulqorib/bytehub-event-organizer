import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
    const heroImage = "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className='relative block bg-gray-800'>
        <div className='absolute w-full h-full opacity-10 -z-9'>
            <Image src={heroImage} fill className="object-cover" alt="" priority/>
        </div>
        <div className='p-20 text-white gap-20'>
            <section className='flex flex-col items-center gap-5 w-50 text-center'>
                <h1 className='text-3xl font-bold'>Find Your Event</h1>
                <p className='text-xl'>In a world brimming with diverse experiences and endless possibilities, the desire to connect has never been stronger. Our event hub app is your gateway to a universe of enriching encounters, where you'll discover, explore, and engage with a vibrant community of like-minded individuals.</p>
                <div>
                    <Link href={"#all-events"}><Button>Explore</Button></Link>
                </div>
            </section>
        </div>
    </div>
  )
}
