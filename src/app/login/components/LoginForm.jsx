"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text  font-bold">Email</span>
        </div>
        <input
              type="email"
              placeholder="Your email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
              type="password"
              placeholder="Your password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
      </label>
      <button className="w-full mt-5 cursor-pointer h-12 bg-orange-500 text-white font-bold">
        Sign In
      </button>
      <p className="text-center">Or Sign In with</p>
      <SocialLogin />
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </form>
  );
}
