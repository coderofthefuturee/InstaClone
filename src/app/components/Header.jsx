import Image from 'next/image'
import React from 'react'
import SearchBox from './Search'

export default function Header() {
  return (
    <div class="relative w-full">
      <div class="absolute opacity-60 inset-0 bg-gradient-to-b from-gray-900 to-gray-900 rounded-full"></div>
      <div className="relative lg:justify-center p-1 flex place-items-center">

        {/* ...pseudo elements for the background... */}
        <div className="relative inset-0 z-0 pointer-events-none before:absolute before:h-[300px] before:w-[1080px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#c001ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

        <div className="px-4 cursor-pointer hover:animate-bounce z-10 flex items-center">
            <Image 
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/favicon.ico"
                width={50}
                height={45}
                priority
            />
            <h1 className="instagram-gradient p-3 font-bold text-4xl">Instagram</h1>
        </div>

        <SearchBox className="px-4 z-10" placeholder="Search" />
      </div>
    </div>

  )
}
