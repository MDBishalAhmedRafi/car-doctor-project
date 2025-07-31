import Image from "next/image";
import { FaDownload, FaTools, FaWrench, FaCarBattery, FaOilCan } from "react-icons/fa";
import React from "react";
import Link from "next/link";
export default async function ServicesDetailsPage({ params }) {
 const detail = await params;
 const res = await fetch (`http://localhost:3000/api/service/${detail.id}`);
 const data = await res.json()
  return (
                <>
<section className="px-4 py-6">
  <div className="max-w-7xl mx-auto">
    <figure className="w-full">
      <Image
        src="/assets/images/checkout/checkout.png"
        alt="checkout"
        width={1080}
        height={280}
        className="w-full h-auto rounded-md object-cover"
        priority
      />
    </figure>
  </div>
</section>

                <div className="px-4 md:px-8 lg:px-16 py-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Image */}
          <div className="w-full h-[200px] md:h-[300px] relative rounded-lg overflow-hidden">
            <Image src={data.img} alt="Engine Service" fill className="object-cover" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold">{data.title}</h2>
          <p className="text-gray-600">
            {data.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Instant Car Services</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">24/7 Quality Service</h4>
              <p className="text-gray-600 text-sm">Ut enim ad minim veniam, quis nostrud...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Easy Customer Service</h4>
              <p className="text-gray-600 text-sm">Duis aute irure dolor in reprehenderit...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Quality Cost Service</h4>
              <p className="text-gray-600 text-sm">Excepteur sint occaecat cupidatat non proident...</p>
            </div>
          </div>

          {/* Additional Text */}
          <p className="text-gray-600">
            More placeholder content goes here to simulate full content description...
          </p>

          {/* Process Steps */}
          <h3 className="text-xl md:text-2xl font-semibold">3 Simple Steps to Process</h3>
          <p className="text-gray-600">
            There Are Many Variations Of Passages Of Lorem Ipsum...
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Services List */}
          <div className="bg-gray-100 p-6 rounded-md space-y-3">
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <div className="flex items-center justify-between text-gray-700 font-medium hover:text-red-500 transition">
              <span className="flex items-center gap-2"><FaWrench /> {data.title}</span>
            </div>
            {/* <div className="flex items-center justify-between text-gray-700 font-medium hover:text-red-500 transition">
              <span className="flex items-center gap-2"><FaTools /> Engine Repair</span>
            </div>
            <div className="flex items-center justify-between text-gray-700 font-medium hover:text-red-500 transition">
              <span className="flex items-center gap-2"><FaOilCan /> Auto Services</span>
            </div>
            <div className="flex items-center justify-between text-gray-700 font-medium hover:text-red-500 transition">
              <span className="flex items-center gap-2"><FaWrench /> Engine Oil Change</span>
            </div>
            <div className="flex items-center justify-between text-gray-700 font-medium hover:text-red-500 transition">
              <span className="flex items-center gap-2"><FaCarBattery /> Battery Change</span>
            </div> */}
          </div>

          {/* Download Section */}
          <div className="bg-gray-100 p-6 rounded-md space-y-4">
            <h4 className="text-lg font-semibold">Download</h4>
            <button className="w-full flex items-center justify-center gap-2 bg-white border rounded py-2 font-medium hover:bg-gray-200 transition">
              <FaDownload /> Brochure
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white border rounded py-2 font-medium hover:bg-gray-200 transition">
              <FaDownload /> Company Details
            </button>
          </div>

          {/* Offer Section */}
          <div className="bg-black text-white p-6 rounded-md text-center space-y-4">
                <Image
            src={"/assets/logo.svg"}
            alt={"checkout"}
            width={120}
            height={60}
            className="mx-auto"
          ></Image>
            <h3 className="text-xl font-bold">Car Doctor</h3>
            <p>Need Help? We’re Here To Help You</p>
            <div className="bg-white text-black p-4 rounded-md">
              <p className="text-sm">Car Doctor Special</p>
              <p className="text-lg font-bold text-orange-500">Save up to 40%</p>
            </div>
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition px-4 py-2 rounded text-white font-semibold">
              Get A Quote
            </button>
          </div>

          {/* Price and Checkout */}
          <div className="bg-gray-100 p-6 rounded-md text-center space-y-4">
            <h4 className="text-xl font-bold text-gray-800">Price $250.00</h4>
            <Link href={`/checkout/${data._id}`}>
            <button className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-2 rounded font-semibold">
              Proceed Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
                </div>
                </>
  );
}
