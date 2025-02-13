'use server'

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    console.log(payload);
    const usersCollection = dbConnect(collectionNames.USER_COLLECTION)
    const {name, email, password} = payload
    if(!email || !password) return null
    // validation 
    const user = await usersCollection.findOne({email: payload.email})
    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
        const result = await usersCollection.insertOne(payload)
       result.insertedId = result.insertedId.toString()
       return result

    }
    return null
    
}