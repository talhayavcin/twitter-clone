import React from 'react'

const SideLink = ({name, Icon, active, onMenuItemClick}) => {
  const isActive = active === name;
  return (
    <li className='group' onClick={() => onMenuItemClick(name)}>
      <a href={name.toLowerCase()} className='block cursor-pointer text-xl pointer-events-none'>
        <div className='inline-block'>
          <div className={`flex items-center group-hover:bg-gray-100 transform transition-colors duration-100 rounded-full pl-3 py-3 pr-8 mb-1
          
          ${isActive ? 'text-primary-base' : ''}
          `}>
            <Icon />
            <span className='ml-4 font-normal'>{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink