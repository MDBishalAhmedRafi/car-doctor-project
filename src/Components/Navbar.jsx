"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const {data: session, status} = useSession();
  console.log(session);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            {status == 'authenticated' ? (<> 
          <li className="cursor-pointer btn btn-outline border-1 border-[#FF3811] text-[#FF3811]" onClick={() => {
    signOut()
      .then(() => {
        toast.success("You have been logged out successfully!");
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.");
      });
  }}>
                  Log Out
                </li>
          </>) : ( 
            <> 
             <li>
                  <Link  className="cursor-pointer" href={"/register"}>Register</Link>
                </li>
          <li>
                  <Link  className="cursor-pointer" href={"/login"}>Login</Link>
                </li>
            </>
          )}
          </ul>
        </div>
        <Link href={"/"} className=" text-xl">
          <Image src={"/assets/logo.svg"} alt="logo" width={50} height={50}></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
           
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="lg:mr-5 lg:flex lg:gap-5 hidden">
          {status == 'authenticated' ? (<> 
          <li>
            <Image src={session?.user?.image} width={40} height={40} alt="images" className="rounded-full border border-green-400 p-[2px]"></Image>
          </li>
          <li className="cursor-pointer btn btn-outline border-1 border-[#FF3811] text-[#FF3811]" onClick={() => {
    signOut()
      .then(() => {
        toast.success("You have been logged out successfully!");
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.");
      });
  }}>
                  Log Out
                </li>
          </>) : ( 
            <> 
             <li>
                  <Link  className="cursor-pointer btn btn-outline border-1 border-[#FF3811] text-[#FF3811]" href={"/register"}>Register</Link>
                </li>
          <li>
                  <Link  className="cursor-pointer btn btn-outline border-1 border-[#FF3811] text-[#FF3811]" href={"/login"}>Login</Link>
                </li>
            </>
          )}
         
        </ul>
        <a className="btn btn-outline border-1 border-[#FF3811] text-[#FF3811]">
          Appointment
        </a>
      </div>
    </div>
  );
}
