"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";


export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form
        className="flex mr-8 border-4 border-gray-700 rounded-full shadow-lg px-6 py-3 ml-10 max-w-small items-center focus-within:border-4 focus-within:border-purple-800 transition-transform duration-200 ease-out"
        onSubmit={handleSubmit}
    >
      <input
        placeholder="Educational purposes."
        type="text"
        className="focus:outline-none bg-transparent text-white"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-500 hover:text-purple-600 hover:border-black ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>

    </form>
  );
}

// import { RxCross2 } from "react-icons/rx";
// import { BsFillMicFill } from "react-icons/bs";
// import { AiOutlineSearch } from "react-icons/ai";
    {/* <RxCross2
    className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
    onClick={() => setTerm("")}
    />
    <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
    <AiOutlineSearch
    className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
    onClick={handleSubmit}
    /> */}