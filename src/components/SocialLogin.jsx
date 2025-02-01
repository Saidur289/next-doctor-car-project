import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from "react-icons/fa";
export default function SocialLogin() {
    const router = useRouter()
    const handleLogin = async(providerName) => {
        const result = await signIn(providerName, {redirect: false})
        if(result.ok){
        router.push('/')
        toast.success('Login Successfully')
        }
        else{
            toast.error('Something wrong')
        }
    }
  return (
   <>
   <p className='text-center text-xl'>Or Sign In With </p><br />
        <p  className='text-center flex justify-center items-center gap-1'><FaGoogle  onClick={() => handleLogin('google')} type='button' className='text-xl text-black mr-3'></FaGoogle>  <FaGithub onClick={() => handleLogin('github')} type='button' className='text-xl text-blue-950'></FaGithub></p>
</>
  )
}
