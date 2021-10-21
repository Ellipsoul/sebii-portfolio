import React, { ReactElement } from 'react'

import { FaTiktok, FaDiscord, FaSoundcloud } from 'react-icons/fa';
import { BsTwitch, BsYoutube, BsSpotify, BsTwitter } from 'react-icons/bs';
import { uuid } from 'uuidv4';

// Sidebar component with all social and media links
export default function Sidebar():ReactElement {

  // Big brain way to dynamically size with y = mx + c
  const iconSize:string = "calc(1.3vh + 30px)";

  // Array of icons and dividers
  const icons:{"element": ReactElement, "isIcon": Boolean, "tooltip": string}[] = [
    {element: <BsSpotify size={iconSize} key={uuid()} />, isIcon: true, tooltip: "Spotify"},
    {element: <FaSoundcloud size={iconSize} key={uuid()} />, isIcon: true, tooltip: "SoundCloud"},
    {element: <Divider key={uuid()}/>, isIcon: false, tooltip: ""},
    {element: <BsTwitch size={iconSize} key={uuid()} />, isIcon: true, tooltip: "Twitch"},
    {element: <FaDiscord size={iconSize} key={uuid()} />, isIcon: true, tooltip: "Discord"},
    {element: <Divider key={uuid()} />, isIcon: false, tooltip: ""},
    {element: <BsTwitter size={iconSize} key={uuid()} />, isIcon: true, tooltip: "Twitter"},
    {element: <FaTiktok size={iconSize} key={uuid()} />, isIcon: true, tooltip: "Tiktok"},
    {element: <BsYoutube size={iconSize} key={uuid()} />, isIcon: true, tooltip: "YouTube"},
  ]

  // Map the array of icons/dividers to its respective component
  return (
    // Fixed to the top left, height of full screen, 16 units width, 0 margin
    // Flex display in column direction with background and text colour, and a shadow 
    <div className='fixed top-0 left-0 h-screen w-24 m-0 flex flex-col 
                  bg-gray-900 text-white shadow-lg justify-around'>
      {icons.map((v) => v.isIcon ? SideBarIcon(v.element, v.tooltip) : v.element)}
    </div>
  )
}

// Individual icon component with tooltip
const SideBarIcon = (icon:any, text='tooltip 💡'):ReactElement => (
  // Use group to have an action act on all its children
  <div className='sidebar-icon group'>
    {icon}
    {/* When hovered over, scale tooltip to 100% */}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

// Simple line divider
const Divider = () => <hr className="sidebar-hr" />;