import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, {params}) => { 
  const item = await params;
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
  const query = {_id: new ObjectId(item.id)}


  //validation
  const session = await getServerSession(authOptions)
  const currentBooking = await bookingCollection.findOne(query)
  const isUser = session?.user?.email ==currentBooking.email

  if(isUser) { 
     //Deleting user specific booking
  
  const deleteResponse = await bookingCollection.deleteOne(query)
  revalidatePath("/my-bookings")
  return NextResponse.json(deleteResponse)
  }
 else { 
  return NextResponse.json({success:false, message: "Forbidden Access"}, {status: 401})
 }
}

export const GET = async (req, {params}) => { 
                 const details = await params;
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.findOne({
    _id: new ObjectId(details.id),
  });
  return NextResponse.json(data);
}

