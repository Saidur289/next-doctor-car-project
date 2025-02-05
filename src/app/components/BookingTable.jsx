import Image from 'next/image'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {data.map((item, index) =>  <tr key={item?._id} className="bg-base-200">
        <th>{index + 1}</th>
        <td>
            <Image src={item?.service_img} alt={item?.service_name} width={50} height={50}/>
        </td>
        <td>{item?.service_name}</td>
        <td>{item?.service_price}</td>
        <td>
            <FaEdit className='text-2xl text-green-500'></FaEdit>
            <FaTrash className='text-2xl text-red-500'></FaTrash>
        </td>
      </tr>)}
   
    </tbody>
  </table>
</div>
    </div>
  )
}
