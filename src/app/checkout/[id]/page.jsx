import CheckoutForm from '@/components/CheckoutForm'
import React from 'react'

export default async function checkoutPage({params}) {
    const id = (await params).id
    const res = await fetch(`https://next-doctor-car-project.vercel.app/api/service/${id}`)
    const data = await res.json()

  return (
    <div>
        <CheckoutForm data={data}></CheckoutForm>
       
    </div>
  )
}
