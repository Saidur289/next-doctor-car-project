import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route"

export const GET = async(req, {params}) => {
    const session = await getServerSession(authOptions)
    const p = await params
    const bookingCollection = dbConnect(collectionNames.BOOKING_SERVICE)
    const query = {_id: new ObjectId(p.id)}
    const singleBooking = await bookingCollection.findOne(query)
    const email = session?.user?.email 
    const isOwnerOk = email === singleBooking?.email
    if(isOwnerOk){
        const result = await bookingCollection.findOne(query)
        console.log(result);
        return NextResponse.json(result)

    }
    else{
        return NextResponse.json({message: 'Forbidden Access'},{status: 403})
    }
    
   
}
export const PATCH = async(req, {params}) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNames.BOOKING_SERVICE)
    const query = {_id: new ObjectId(p.id)}
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const currentBooking = await bookingCollection.findOne(query)
    const isOwnerOk = email === currentBooking.email
    if(isOwnerOk){
        const body = await req.json()
    const filter = {
        $set: {...body}
    }
    const option = {
        upsert : true

    }
    const  updateResponse = await bookingCollection.updateOne(query, filter, option)
    revalidatePath('/My-Bookings')
    return NextResponse.json(updateResponse)
    }
    else{
        return NextResponse.json({message: 'Forbidden Access'},{status: 403})
    }
    

}