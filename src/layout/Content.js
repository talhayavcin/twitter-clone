import React  from 'react'
import { PopulerIcon } from '../icons/Icon'
import TweetBox from '../components/TweetBox'

const Content = () => {
  return (
    <main className=' flex-1 flex flex-col border-r border-l border-gray-100 '>
      <header className='sticky top-0 z-10 flex justify-between items-center p-4  bg-white '>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopulerIcon className='w-5 h-5 text-gray-900' />
      </header>
      <div className='flex px-4 py-3 space-x- border-b border-gray-100'>
        <img src='https://pbs.twimg.com/profile_images/1471200875414790152/P4ESp6xE_400x400.jpg' alt='Profile' className='w-12 h-12 rounded-full'></img>
        <TweetBox />
        <div>

        </div>
      </div>
    </main>
  )
}

export default Content