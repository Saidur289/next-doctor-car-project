

import { headers } from 'next/headers'
import BookingTable from '../components/BookingTable'

const fetchBookingData = async() => {
    const res = await fetch('http://localhost:3000/api/service', {
        headers: await headers()
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
