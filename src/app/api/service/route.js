import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

export const GET = async(req) =>{
    const session = await getServerSession(authOptions)
    if(session){
        const email = session?.user?.email
        const bookingCollection = dbConnect(collectionNames.BOOKING_SERVICE)
        const result = await bookingCollection.find({email}).toArray()
        return NextResponse.json(result)
    }
}
export const POST = async(req) => {
    const body = await req.json()
    const bookingCollection = dbConnect(collectionNames.BOOKING_SERVICE)
    const result = await bookingCollection.insertOne(body)
    console.log(result);
    return NextResponse.json(result)
    
}