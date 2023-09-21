import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

export default function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-col-3 md:max-w-6xl mx-auto'>
        <section className='md:col-span-2 mt-negative space-y-40'>
            <Stories />
            <Posts />
        </section>
        

        <section className="hidden lg:grid md:col-span-1">
            <div className="fixed top-10 right-20 w-[380px] flex flex-col space-y-20">
                <MiniProfile />
                <Suggestions />
            </div>
        </section>



    </main>
  )
}
