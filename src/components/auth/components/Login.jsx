import React from 'react'
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';

export const Login = () => {
  return (
    <div>
        <div>Hello ini login</div>
        <Input name="email" placeholder="email@domain.com" />
        <Input name="password" placeholder="password" type="password" />
        <Button color="primary">
            Login
        </Button>
        <div className="flex gap-1">
            <div>Don't have an account ?</div>
            <Link href="#" className='text-blue-400'>Register</Link>
        </div>
    </div>
  )
}
