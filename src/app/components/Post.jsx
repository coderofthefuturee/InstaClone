import React from 'react'
import Posts from './Posts'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className=''>
        {/* post header */}
        {/* <h1>{username}</h1> */}
        <div className='p-40'>
            <div className='flex justify-between border p-2 rounded-md'>
                <img src={userImg} class="h-12 rounded-full object-cover border p-1 mr-3" alt="img" />
                <img src="/bluecheck.jpg" class="h-8 rounded-full object-cover mt-2" alt="img" />
                <p className='font-bold flex-1 p-3'>{username}</p>
                <DotsHorizontalIcon className='h-10 flex-1 mt-1 ml-60'/>
            </div>
            <img src={userImg} class="border rounded-md" alt="img" width={1000} height={1000} />
        </div>
            

    </div>
  )
}
