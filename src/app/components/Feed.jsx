import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-col-3 md:max-w-6xl mx-auto'>
        <section className='md:col-span-2 mt-negative space-y-40'>
            <Stories />

            <Posts />
        </section>

        <section className='hidden md:inline-grid md:col-span-1'>
            {/* Mini profile */}
            
            {/* Suggestions */}
        </section>
    </main>
  )
}
