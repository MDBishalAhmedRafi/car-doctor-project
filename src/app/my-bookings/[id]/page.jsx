
import BookingUpdateForm from '@/Components/fomrs/BookingUpdateForm';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { headers } from 'next/headers';
import React from 'react';
export default async function UpdateBookingPage({params}) {
                const p = await params;
                console.log(p);
                // const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`, { 
                //                 headers: await headers(),
                // });
                const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
const singleItem = await bookingCollection.findOne({_id: new ObjectId(p.id)})
console.log(singleItem);
                // const data = await res.json()
  return (
    <div>
                <BookingUpdateForm data={singleItem}></BookingUpdateForm>
    </div>
  );
}



