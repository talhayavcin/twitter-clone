import React, { useState } from 'react'
import twitterLogo from '../images/icons8-twitter.svg'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import { HomeIcon,
         ExploreIcon,
         NotificationIcon,
         MessageIcon,
         BookmarksIcon,
         ListsIcon,
         ProfileIcon,
         MoreIcon,
} from '../icons/Icon'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notification',
    icon: NotificationIcon,
  },
  {
    name: 'Message',
    icon: MessageIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Lists',
    icon: ListsIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]

const Sidebar = () => {
  const [active, setActive] = useState('Home');

  const onMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between w-72  px-2'>
      <div>
        <div className=' mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary-light transform transition-colors duration-200'>
        <img src={twitterLogo} alt='Twitter Logo' className='w-10 h-10'></img>
        </div>
        <nav className='mb-4'>
          <ul>
            {sideLinks.map(({name, icon}) => (
              <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={onMenuItemClick} />
              ))}
          </ul>
        </nav>
        <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-4 px-8 w-10/12 transform transition-colors duration-200  font-bold'>Tweet</button>
      </div>
      <div>
        <UserBox />
      </div>
    </div>
  )
}

export default Sidebar

