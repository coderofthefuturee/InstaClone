import Image from 'next/image'
import React from 'react'
import SearchBox from './Search'


export default function Header() {
  return (
    <div class="relative w-full">
      <div class="absolute opacity-60 top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-900 rounded-full"></div>
      <div className="relative lg:justify-center p-1 flex place-items-center">

        {/* ...pseudo elements for the background... */}
        <div className="relative inset-0 z-0 pointer-events-none before:absolute before:h-[300px] before:w-[1080px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#c001ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

        <div className="px-7 cursor-pointer hover:scale-110 hover:text-purple-600 transition-transform duration-200 ease-out flex items-center">
            <Image 
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/favicon.ico"
                width={50}
                height={45}
                priority
            />
            <h1 className="hidden md:block instagram-gradient p-3 font-bold text-4xl">Instagram</h1>
        </div>

        <SearchBox className="px-4 z-10" placeholder="Search" />
        <div className='flex space-x-14 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 cursor-pointer text-gray-500 hover:scale-125 hover:text-purple-600 transition-transform duration-200 ease-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 cursor-pointer text-gray-500 hover:scale-125 hover:text-purple-600 transition-transform duration-200 ease-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>

          <Image 
          className='h-15 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out">'
          src='/boredape.jpg'
          width={50}
          height={50}
          alt='user-image'
          />
        </div>
      </div>
    </div>

  )
}
