
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
export default async function Services() {
                // const res = await fetch("/services.json")
                const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
                const data = await serviceCollection.find({}).toArray();

  return ( 
  <>


  {/* Text Section */}
                <div className='text-center'>
        <h1 className='font-bold text-4xl'>Our Services</h1>
        <p className='text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>        
  </div>


    {/* Card Section */}
<div className='lg:w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
      { 
                data.map((item) => { 
                                return <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <Image src={item.img} width={290} height={190} alt='item' className='rounded-2xl'></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center text-2xl">{item.title}</h2>
    <p className='text-[#FF3811] font-bold text-xl'>Price: ${item.price}</p>
    <div className="card-actions text-[#FF3811] cursor-pointer">
      <Link href={`/services/${item._id}`}>
                <FaArrowRight />
      </Link>
    </div>
  </div>
</div>
                })
      }
    </div>
  </>
  );
}

