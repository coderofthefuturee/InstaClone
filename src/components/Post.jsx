import React from 'react'
import Posts from './Posts'
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className='flex justify-center items-center'>
        {/* post header */}
        {/* <h1>{username}</h1> */}
        <div className='lg:max-w-5xl mt-negative p-10 space-y-3'>
            <div className='flex border-gray-800 border-4 justify-between p-1 rounded-full'>
                <img src={userImg} class="h-12 mr-3 hover:scale-125 cursor-pointer rounded-full object-cover relative h-15 p-[2px] hover:p-[4px] rounded-full hover:scale-125 transition-transform duration-200 ease-out bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500" alt="img" />
                <img src="/bluecheck.jpg" class="h-8 mr-3 rounded-full object-cover mt-2" alt="img" />
                <p className='font-bold mr-10 hover:text-purple-500 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out flex-1 p-3'>{username}</p>
                {/* p-[2px] border-2 hover:border-4 border-red-500 hover:border-purple-500 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out */}
                <DotsHorizontalIcon className='h-10 flex-1 mt-1 ml-60 hover:text-purple-500 hover:scale-125 cursor-pointer transition-transform duration-200 ease-out'/>
            </div>
            <img src={userImg} class="border-4 rounded-2xl border-gray-900" alt="img" width={600} height={600} />
            <div className='border-gray-800 border-4 rounded-full'>
                <div className='flex justify-between px-7 sm:px-5 p-2'>
                    <div className='flex mt-2 space-x-8 sm:space-x-5 btn'>
                        <HeartIcon className='btn lg:mr-5 md:mr-5 sm:mr-1 hover:fill-red-600' />
                        <ChatIcon className='btn hover:fill-blue-400' />
                    </div>
                    <EmojiHappyIcon className='btn mt-2 hover:fill-purple-500' />
                    <form className='flex'>
                        <input type="text" placeholder='   Add a comment...' className='flex p-2 text-white focus:outline-none bg-transparent mr-7 border-4 border-gray-700 rounded-full shadow-lg max-w-small items-center focus-within:border-4 focus-within:border-purple-800 transition-transform duration-200 ease-out focus:ring-0' />
                        <button className='font-bold hover:text-blue-400 hover:text-bold hover:scale-125 text-blue-500 transition-transform duration-200 ease-out'>Post</button>
                    </form>
                    <BookmarkIcon className='btn mt-2 hover:fill-red-500' />
                </div>
            </div>
        </div>

    </div>
  )
}
