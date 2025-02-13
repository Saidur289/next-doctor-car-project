'use client'
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    const {data: session, status} = useSession()
  const links = (
    <>
      {" "}
      <li>
       <Link href={'/'}>HOME</Link>
      </li>
      <li>
       <Link href={'/about'}>ABOUT</Link>
      </li>
      <li>
       <Link href={'/My-Bookings'}>My Bookings</Link>
      </li>
      <li>
       <Link href={'/blogs'}>BLOGS</Link>
      </li>
      <li>
       <Link href={'/contact'}>CONTACT</Link>
      </li>
    </>
  );
  return (
  <div className="bg-base-100">
      <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul> 
        </div>
        <a className="text-xl">
            <Image src={'/assets/logo.svg'} alt="logo" width={107} height={87}/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-1">
        {status === 'authenticated'? <><button onClick={() => signOut()} className="btn-outline">Log Out</button></> : <>  <Link href={'/login'}><button className="btn btn-outline">Login</button></Link>
        <Link href={'/register'}><button className="btn btn-outline">Register</button></Link></>}
      

        <a className="btn btn-outline">Appointment</a>
      </div>
    </div>
  </div>
  );
}
