import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route"
import { revalidatePath } from "next/cache"

export const  GET = async(req, {params}) => {
    const p = await params 
    // console.log('hello world',p.id);
    const serviceCollection = dbConnect(collectionNames.TEST_COLLECTION)
    const data = await serviceCollection.findOne({_id: new ObjectId(p.id)})
    return NextResponse.json(data)
}
export const DELETE = async(req, {params}) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNames.BOOKING_SERVICE)
    const query = {_id: new ObjectId(p.id)}
    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.findOne(query)
    const isOwnerOk = session?.user?.email == currentBooking?.email
    if(isOwnerOk){
        const deleteResponse = await bookingCollection.deleteOne(query)
        revalidatePath('/My-Bookings')
        return NextResponse.json(deleteResponse)
    }
    else{
        return NextResponse.json({message: 'fobidden Access'}, {status: 401})
    }
}