import React from 'react'
import Image from 'next/image'

export default function MiniProfile() {
  return (
    <div className="flex space-x-5 items-center justify-between mt-14 ml-10 lg:fixed mt-negative top-40 right-80">
      {/* Your MiniProfile content here */}
      <Image 
          className='h-15 p-[1.5px] border border-gray-500 hover:border-purple-500 hover:border-2 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out">'
          src='/boredape.jpg'
          width={55}
          height={55}
          alt='user-image'
          />
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>ApeYachtClub</h2>
            <h3 className="text-sm text-gray-400">Welcome to IG</h3>
        </div>
        <button className='font-semibold hover:text-purple-500 hover:text-bold hover:scale-125 text-blue-500 transition-transform duration-200 ease-out'>Sign Out</button>
    </div>
  )
}