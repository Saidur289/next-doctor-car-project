'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

import { FaGithub, FaGoogle } from "react-icons/fa";
export default function SocialLogin() {
    const router = useRouter()
    const session = useSession()
    const handleLogin =(providerName) => {
        console.log(providerName);
         signIn(providerName)
     
    }
    useEffect(() => {
        if(session.status == 'authenticated'){
            router.push('/')
        }
    }, [session.status])

  return (
   <>
   <p className='text-center text-xl'>Or Sign In With </p><br />
        <div className='text-center flex justify-center items-center gap-1'>
        <p  className=''><FaGoogle  onClick={() => handleLogin('google')} type='button' className='text-xl text-black mr-3'></FaGoogle>  </p>
        <p><FaGithub onClick={() => handleLogin('github')} type='button' className='text-xl text-blue-950'></FaGithub></p>
        </div>
</>
  )
}
