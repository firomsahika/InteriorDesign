import React from 'react'

export default function Nav() {
  return (
    <main className='w-full '>
       <div className='flex items-center justify-center h-20'>
        <nav className='flex gap-80 items-center justify-center '>
            <p>I  N  T  E  R  I  A</p>
            <ul className='flex gap-14 items-center justify-center'>
                <li>Home</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className=' border border-gray-500 px-6  py-2 rounded-2xl'>GET STARTED</button>
        </nav>
       </div>
    </main>
  )
}
