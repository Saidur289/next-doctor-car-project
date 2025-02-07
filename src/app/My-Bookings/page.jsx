

import { headers } from 'next/headers'
import BookingTable from '../components/BookingTable'

const fetchBookingData = async() => {
    const res = await fetch('https://next-doctor-car-project.vercel.app/api/service', {
        headers: new Headers(await headers())
    })
    const d = await res.json()
    return d
}
export default async function BookingPage() {
   const data = await  fetchBookingData()
   
  return (
    <div>
        <BookingTable data = {data}></BookingTable>
        </div>
  )
}
