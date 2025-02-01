'use client'
import React from 'react';
import {  signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';
import SocialLogin from '@/components/SocialLogin';
const LoginForm = () => {
    const router = useRouter()
    const handleSubmit = async(e)=> {
        e.preventDefault()
      try{
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log({email, password});
        toast.success('Submitting...')
        const response = await signIn('credentials', {email, password, callbackUrl: '/', redirect: false})
        if(response.ok){
            toast.success('User Login Successfully')
         router.push('/')
        }
        else{
      toast.error('Login Failed')
        }
      }
      
      catch(error){
        toast.error(error)
      }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="input input-bordered flex items-center gap-2">
        
            <input type="email" name='email' placeholder="Your  Email" />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" name='password'  placeholder="Your  Password" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md bg-orange-400 text-white"
        >
          Login
        </button>
        <SocialLogin></SocialLogin>
      </form>
    );
};

export default LoginForm;