import Image from 'next/image'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import DeleteButton from '../My-Bookings/components/DeleteButton'
import Link from 'next/link'

export default function BookingTable({data}) {
  return (
    <div className='my-8'>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {data.map((item, index) =>  <tr key={item?._id} className="bg-base-200 hover">
        <th>{index + 1}</th>
        <td>
            <Image src={item?.service_img} alt={item?.service_name} width={50} height={50}/>
        </td>
        <td>{item?.service_name}</td>
        <td>{item?.service_price}</td>
        <td>{item?.date}</td>
        <td className='flex gap-1'>
            <Link href={`/My-Bookings/${item?._id}`}><FaEdit className='text-2xl text-green-500'></FaEdit></Link>
            <DeleteButton id={item?._id}></DeleteButton>
          
        </td>
      </tr>)}
   
    </tbody>
  </table>
</div>
    </div>
  )
}
