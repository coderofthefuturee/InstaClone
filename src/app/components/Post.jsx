import React from 'react'
import Posts from './Posts'
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon } from '@heroicons/react/outline'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className=''>
        {/* post header */}
        {/* <h1>{username}</h1> */}
        <div className='mt-negative p-40 space-y-2'>
            <div className='flex justify-between border p-1 rounded-full'>
                <img src={userImg} class="h-12 border-2 hover:scale-125 cursor-pointer rounded-full object-cover border border-red-500 p-1 mr-3 p-[2px] border-2 hover:border-4 border-red-500 hover:border-purple-500 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out" alt="img" />
                <img src="/bluecheck.jpg" class="h-8 mr-3 rounded-full object-cover mt-2" alt="img" />
                <p className='font-bold mr-10 hover:text-purple-500 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out flex-1 p-3'>{username}</p>
                {/* p-[2px] border-2 hover:border-4 border-red-500 hover:border-purple-500 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out */}
                <DotsHorizontalIcon className='h-10 flex-1 mt-1 ml-60 hover:text-purple-500 hover:scale-125 cursor-pointer transition-transform duration-200 ease-out'/>
            </div>
            <img src={userImg} class="border rounded-md" alt="img" width={600} height={600} />
            <div className='flex border rounded-full justify-between px-7 pt-4 p-3'>
                <div className='flex space-x-8 btn'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>
        </div>

        
            

    </div>
  )
}
