import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const  GET = async(req, {params}) => {
    const p = await params 
    console.log('hello world',p.id);
    const serviceCollection = dbConnect(collectionNames.TEST_COLLECTION)
    const data = await serviceCollection.findOne({_id: new ObjectId(p.id)})
    return NextResponse.json(data)
}