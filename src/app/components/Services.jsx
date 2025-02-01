import dbConnect, { collectionNames } from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'

export default async function Services() {
  const serviceCollection = dbConnect(collectionNames.TEST_COLLECTION)
  const data = await serviceCollection.find({}).toArray()
  return (
    <div className='container mx-auto'>
     <div className='grid grid-cols-12 gap-4'>
        {
            data.map((service) => <div key={service._id} className='col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border'>
               <figure className='w-full h-3/4 flex justify-center items-center'>
               <Image src={service.img} width={314} alt={service.title} height={108} className='w-full h-full object-fit'/>
               </figure>
                <h1 className='font-bold text-2xl'>{service.title}</h1>
                <p className='text-orange-600 text-xl'>Price: {service.price}</p>

            </div>)
        }
        
        </div>  
    </div>
  )
}
