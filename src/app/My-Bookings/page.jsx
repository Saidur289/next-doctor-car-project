'use client'
import React, { useEffect, useState } from 'react'
import BookingTable from '../components/BookingTable'

export default function BookingPage() {
    const [data, setData] = useState([])
    useEffect(()=> {
        const fetchBookingData = async() => {
            const res = await fetch('http://localhost:3000/api/service')
            const d = await res.json()
            setData(d)
        }
        fetchBookingData()
    }, [])
  return (
    <div>
        <BookingTable data = {data}></BookingTable>
        </div>
  )
}
