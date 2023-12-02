import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    const fakeImg = "https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
        <div className='flex justify-center items-center p-20 gap-10'>
            <Image src={fakeImg} width={300} height={700}/>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-extrabold text-gray-800'>Join or Create Your Event</h1>
                    <p className='text-xl text-gray-800'>Everything make easy</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <Link href={"/dashboard"}><Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white text-xl shadow-lg px-10 py-5" variant="bordered">Lets Create</Button></Link>
                    <Link href={"#all-events"}><Button>Explore</Button></Link>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center p-3 bg-black text-orange-400'>Bytehub x DevScale</div>
    </>
  )
}
