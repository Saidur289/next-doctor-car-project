
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ServiceDetailsPage({params}) {
    const id = (await params).id
    const res = await fetch(`http://localhost:3000/api/service/${id}`)
    const data = await res.json()
    // console.log(data);
  return (
    <div>
        <section className='flex justify-center'>
            <figure className='relative'>
                <Image src={'/assets/checkout.png'} width={1137} height={300} alt='banner'/>
                <div className='transparent-layer overlay-bg absolute w-full h-full border-2 top-0'>
                    <div className='w-full h-full flex items-center pl-8'>
                        <div>
                            <h1 className='font-bold text-white text-2xl'>{data?.title}</h1>
                        </div>

                    </div>

                </div>

            </figure>
        </section>
        <section className='grid grid-cols-12 lg:ml-16 lg:mr-16'>
            <div className='col-span-8'>
            <Image src={data.img} width={850} height={250} alt='image'/>
            </div>
            <div className='col-span-4 w-full'>
                <Link href={`/checkout/${data._id}`}>
                <button className='h-10 px-5 py-1 w-full text-center rounded-sm bg-orange-600 text-black'>Checkout</button>
                </Link>
                <h1 className='text-xl font-bold'>Price: {data.price}</h1>

            </div>
        </section>
      
        <p className='font-bold text-2xl ml-10 py-3 text-center'>{data.title}</p>
        <p className='text-center font-semibold'>{data.description}</p>
    </div>
  )
}
