import React from 'react'
import Story from './Story'

export default function Suggestions() {
  return (
    <div className='flex-col lg:p-20'>
    <div className='flex justify-between mb-1 text-sm'>
        <h3 className='font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-900 font-semibold'>See All</button>
    </div> 
    <div class="relative sm:fixed md:right-40 lg:right-130 mt-4 shadow-black shadow-lg bg-purple-900 opacity-100 rounded-full">
        <div className="flex flex-col cursor-pointer space-y-2 sm:space-y-4 p-3 sm:p-3 md:p-4 justify-start items-start">
            <div className="flex items-center space-x-2">
            <Story src="/ba12.jpg" id='1' />
            <span>John</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba13.jpg" id='2' />
            <span>Jane</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba5.png" id='3' />
            <span>Alex</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba6.png" id='4' />
            <span>Eva</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba1.png" id='5' />
            <span>Liam</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba7.png" id='6' />
            <span>Zoe</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba8.png" id='7' />
            <span>Max</span>
        </div>
        <div className="flex items-center space-x-2">
            <Story src="/ba9.png" id='8' />
            <span>Lara</span>
        </div>
    </div>
</div>



    </div>
  );
}

