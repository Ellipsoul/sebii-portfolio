import React, { ReactElement } from 'react'

import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { uuid } from 'uuidv4';

export default function Sidebar():ReactElement {
  const icons:ReactElement[] = [
    <FaFire size="28" key={uuid()} />,
    <Divider key={uuid()}/>,
    <BsPlus size="28" key={uuid()} />,
    <BsFillLightningFill size="28" key={uuid()} />,
    <FaPoo size="20" key={uuid()} />
  ]

  return (
    // Fixed to the top left, height of full screen, 16 units width, 0 margin
    // Flex display in column direction with background and text colour, and a shadow 
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      {icons.map(icon => SideBarIcon(icon))}
    </div>
  )
}


const SideBarIcon = (icon:any, text='tooltip 💡'):ReactElement => (
  // Use group to have an action act on all its children
  <div className='sidebar-icon group'>
    {icon}
    {/* When hovered over, scale tooltip to 100% */}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;