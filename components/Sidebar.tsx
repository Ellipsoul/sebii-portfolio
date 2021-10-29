import React, { ReactElement, useContext, useEffect } from 'react'

import { FaTiktok, FaDiscord, FaSoundcloud } from 'react-icons/fa';
import { BsTwitch, BsYoutube, BsSpotify, BsTwitter } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import MediaContext from '../contexts/media';

// Differentiate between an Icon and a Divider
export interface IconInterface {
  element: ReactElement
  isIcon: Boolean
  tooltip?: string
};

// Sidebar component with all social and media links
export default function Sidebar():ReactElement {

  // Big brain way to dynamically size with y = mx + c
  const iconSize:string = "calc(0.7vh + 0.6vw + 1.75rem)";

  // Array of icons and dividers
  const icons:IconInterface[] = [
    {
      element: <BsSpotify 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "Spotify"},
    {
      element: <FaSoundcloud 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "SoundCloud"},
    {
      element: <Divider key={uuidv4()}/>, 
      isIcon: false},
    {
      element: <BsTwitch 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "Twitch"},
    {
      element: <FaDiscord 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "Discord"},
    {
      element: <Divider key={uuidv4()} />, 
      isIcon: false
    },
    {
      element: <BsTwitter 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "Twitter"
    },
    {
      element: <FaTiktok 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "Tiktok"
    },
    {
      element: <BsYoutube 
        size={iconSize} 
        key={uuidv4()} />, 
      isIcon: true, 
      tooltip: "YouTube"
    },
  ];

  // When component loads up, set the media to Spotify by default
  const [_, setMedia] = useContext(MediaContext);
  useEffect(() => {
    setMedia("Spotify")
  }, [setMedia])


  // Map the array of icons/dividers to its respective component
  return (
    // Fixed to the top left, height of full screen, 16 units width, 0 margin
    // Flex display in column direction with background and text colour, and a shadow 
    <div className='h-screen w-sidebarWidth m-0 flex flex-col items-start
                  bg-white dark:bg-vvprimary-dark text-white shadow-lg justify-around'>
      {icons.map((v) => v.isIcon ? SideBarIcon(v.element, v.tooltip) : v.element)}
    </div>
  )
}

// Simple line divider
const Divider = () => <hr className="sidebar-hr" />;

// Individual icon component with tooltip
const SideBarIcon = (icon:ReactElement, text:string='Tooltip Placeholder 💡'):ReactElement => {
    // Allow sidebar to control state of loaded media
    const [media, setMedia] = useContext(MediaContext);
    const handleMediaClick = (media:string):void => {
      setMedia(media);
    }

  return (
    // media variable state will be the same as the tooltip
    // Use group to have an action act on all its children
    <div 
      className={`sidebar-icon group ${media === text ? "sidebar-icon-selected" : ""}`} 
      key={uuidv4()} 
      onMouseDown={() => handleMediaClick(text)}
    >
      {icon}
      {/* When hovered over, scale tooltip to 100% */}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  )
};
