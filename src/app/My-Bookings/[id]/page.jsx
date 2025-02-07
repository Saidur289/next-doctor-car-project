import UpdateForm from '@/components/UpdateForm'
import { headers } from 'next/headers'
import React from 'react'

export default async function SingleBooking({params}) {
    const id = (await params).id
    const res = await fetch(`http://localhost:3000/api/my-bookings/${id}`,{
        headers: await headers()
    })
    const data = await res.json()
    console.log('from single booking',data);


  return (
    <div>
        <UpdateForm data={data}></UpdateForm>
    </div>
  )
}
