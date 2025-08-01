import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => { 
                 const details = await params;
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.findOne({
    _id: new ObjectId(details.id),
  });
  return NextResponse.json(data);
}

