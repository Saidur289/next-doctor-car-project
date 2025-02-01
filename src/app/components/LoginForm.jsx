'use client'
import React from 'react';
import {  signIn } from "next-auth/react"
const LoginForm = () => {
    const handleSubmit = async(e)=> {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log({email, password});
        await signIn('credentials', {email, password, callbackUrl: '/'})
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" name='email' placeholder="Email" />
          </label>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" name='password'  placeholder="Password" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md bg-orange-400 text-white"
        >
          Login
        </button>
      </form>
    );
};

export default LoginForm;