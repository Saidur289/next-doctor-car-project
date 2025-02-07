import { MongoClient, ServerApiVersion } from 'mongodb'
export const collectionNames = {
 TEST_COLLECTION: 'test-services',
 USER_COLLECTION: 'user-services',
 BOOKING_SERVICE: 'booking-service',
}
export default function dbConnect (collectionName){
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      })
      return client.db(process.env.DB_NAME).collection(collectionName)
}