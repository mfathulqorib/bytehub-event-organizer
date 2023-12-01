import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    const heroImage = "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const imageA = "https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className='relative block bg-black'>
        <div className='absolute w-full h-full opacity-20'>
            <Image src={heroImage} fill className="object-cover" alt=""/>
        </div>
        <div className='grid grid-cols-2 items-center p-10 text-white gap-20'>
            <section className='flex flex-col gap-5'>
                <h1 className='text-xl font-extrabold'>Find Your Event</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas deleniti hic ipsum eaque magnam deserunt nemo. Ad ut eaque sint nesciunt saepe amet optio, provident commodi aliquid qui nobis.</p>
                <div>
                    <Button>Explore</Button>
                </div>
            </section>
            <section className='grid grid-rows-2 items-center gap-5'>
                <Image src={imageA} width={170.0} height={290.0} className='rounded-3xl col-span-2' />
                <Image src={imageA} width={170.0} height={170.0} className='rounded-3xl col-span-1' />
                <Image src={imageA} width={170.0} height={170.0} className='rounded-3xl col-span-1' />
            </section>
        </div>
    </div>
  )
}
