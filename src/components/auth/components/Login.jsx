"use client"
import React from 'react'
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';
import {MailIcon} from './Icons/MailIcon';
import { PasswdIcon } from './Icons/PasswdIcon';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {

  const {handleChange, handleSubmitButton} = useLogin();

  return (
    <main className='flex flex-col gap-5'>
        <section className=''>
          <div className='text-xl font-bold'>Welcome Back!</div>
          <p className='text-sm'>Login to your account</p>
        </section>

        <section className='flex flex-col gap-3'>
          <Input 
            name="email" 
            placeholder="email@domain.com" 
            endContent={
              <MailIcon />
            }
            onChange={handleChange}
          />

          <Input 
            name="password" 
            placeholder="password" 
            type="password" 
            endContent={
              <PasswdIcon />
            }
            onChange={handleChange}
          />

          <Button 
            color="primary"
            onClick={handleSubmitButton}
          >
              Login
          </Button>

          <div className="flex gap-1 text-sm">
              <div>Don't have an account ?</div>
              <Link href="#" className='text-blue-400'>Register</Link>
          </div>
        </section>
    </main>
  )
}
