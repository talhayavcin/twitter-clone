import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 transform transition-colors duration-100'>
        <img src='https://pbs.twimg.com/profile_images/1471200875414790152/P4ESp6xE_400x400.jpg' alt='Profile' className='w-10 h-10 rounded-full'></img>
        <div className='flex flex-col mr-14'>
            <span className='font-bold text-md text-black '>
                Talha 
            </span>
            <span className='text-md text-gray-dark '>@talhayavcin8</span>
        </div>

        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        </div>

    </div>
  )
}

export default UserBox