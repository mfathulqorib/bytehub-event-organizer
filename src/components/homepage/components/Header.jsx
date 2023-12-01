import React from 'react'
import { Logo } from '../../Logo'
import Link from 'next/link'
import { Button } from '@nextui-org/react'

export const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
        <Logo/>
        <div className='flex text-lg gap-5'>
          <Link href={"#"} className='ease-in duration-100 hover:text-orange-700 hover:text-xl'>Explore</Link>
          <Link href={"#"} className='ease-in duration-100 hover:text-orange-700 hover:text-xl'>Events</Link>
        </div>
        <div className='flex gap-5'>
            <Button size='lg'><Link href={"/login"}>Login</Link></Button>
            <Button size='lg' radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"><Link href={"/register"}>Getting Start</Link></Button>
        </div>
    </div>
  )
}
