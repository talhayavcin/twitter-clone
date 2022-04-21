import React from 'react'
import { SearchIcon } from '../icons/Icon'
import { Timeline } from 'react-twitter-widgets'


const Widgets = () => {
  return (
    <aside className='w-80'>
      <div className='flex items-center space-x-4 p-3 m-2 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
        <SearchIcon className='w-5 h-5'/>
        <input type='text' placeholder='Search Twitter' className='placeholder-gray-dark bg-transparent focus:outline-none w-full text-m'/>
      </div>
      <div className='mt-4'>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'talhayavcin8'
        }}
          options={{
            height: '760'
        }}
/>
      </div>

    </aside>
  )
}

export default Widgets