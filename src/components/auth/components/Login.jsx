import React from 'react'
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';
import {MailIcon} from './Icons/MailIcon';
import { PasswdIcon } from './Icons/PasswdIcon';

export const Login = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className=''>
          <div className='text-xl font-bold'>Welcome Back!</div>
          <p className='text-sm'>Login to your account</p>
        </div>
        <div className='flex flex-col gap-3'>
          <Input 
            name="email" 
              placeholder="email@domain.com" 
              endContent={
                <MailIcon />
              }
          />

          <Input 
            name="password" 
            placeholder="password" 
            type="password" 
            endContent={
              <PasswdIcon />
            }
          />

          <Button color="primary">
              Login
          </Button>

          <div className="flex gap-1 text-sm">
              <div>Don't have an account ?</div>
              <Link href="#" className='text-blue-400'>Register</Link>
          </div>
        </div>
    </div>
  )
}
