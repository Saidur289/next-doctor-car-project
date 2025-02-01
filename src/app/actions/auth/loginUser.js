import dbConnect, { collectionNames } from "@/lib/dbConnect"
import bcrypt from "bcrypt";
export const loginUser = async(payload) => {
    const {email, password} = payload
    console.log(payload);
    const usersCollection = dbConnect(collectionNames.USER_COLLECTION)
    const user = await usersCollection.findOne({email})
    if(!user) return null
    const isPasswordOK = bcrypt.compare(user.password, password)
    if(!isPasswordOK) return null
    return user 
}