'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
export default function DeleteButton({id}) {
  const router = useRouter()
  const handleDelete = async() => {
    const response = await fetch(`https://next-doctor-car-project.vercel.app/api/service/${id}`, {
      method: 'DELETE'
    })
    router.refresh('/My-Bookings')
    console.log(response);
  }
  return (
    <><FaTrash onClick={() => handleDelete(id)} className='text-2xl text-red-500'></FaTrash></>
  )
}
