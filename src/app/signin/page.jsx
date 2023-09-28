"use client"
import Header from "../../components/Header";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
// import app from "../../../../../firebase";
import { useSession } from "next-auth/react";
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function Signin() {
  const router = useRouter();
  const { data, status } = useSession();

  console.log("data: "+data);
  console.log("status: "+status);

  if (status === "authenticated") {
    router.push('/');  // or do something with the session
    return null;  // or return some JSX if needed
  }

  // Render the Sign-in UI if the user is unauthenticated or if the status is unknown.
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image"
        />
        <div className="">
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover"
              src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
              alt=""
            />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <button
              onClick={()=>signIn('google')}
              className="bg-purple-600 border-2 hover:border-4 hover:text-bold hover:scale-125 transition-transform duration-200 ease-out rounded-full p-3 text-white hover:bg-pink-600"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

