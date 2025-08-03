import { authOptions } from "@/lib/authOptions"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => { 
                const singleItem = await params
                const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
                const query = {_id: new ObjectId(singleItem.id)}

                   const session = await getServerSession(authOptions)
                const email = session?.user?.email
                const currentBookingData = await bookingCollection.findOne(query)
                const  isUserOk = email === currentBookingData?.email
                if(isUserOk) { 
           return NextResponse.json(singleBooking)
                }
                else{ 
                              return NextResponse.json({message: "Forbidden GET action"}, { 
                                                status: 403
                                })   
                }
               
}

export const PATCH = async (req, {params}) => { 
                 const singleItem = await params
                const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
                const query = {_id: new ObjectId(singleItem.id)}

                const session = await getServerSession(authOptions)
                const email = session?.user?.email
                const currentBookingData = await bookingCollection.findOne(query)
                const  isUserOk = email === currentBookingData?.email

                if(isUserOk) { 
                                 const body = await req.json()
                const filter = { 
                                $set: { ...body }
                }
                const option = { 
                                upsert:true
                }
                const updateResponse = await bookingCollection.updateOne(query,filter, option)
                revalidatePath("/my-bookings")
                return NextResponse.json(updateResponse)
                }
                else{ 
                                return NextResponse.json({message: "Forbidden Update action"}, { 
                                                status: 403
                                })
                }
               
}