import React, { ReactElement, useContext, useEffect } from 'react'
// import toast from 'react-hot-toast';
// import { isMobile } from 'react-device-detect';
// import { useTheme } from 'next-themes';

import MediaContext from '../contexts/media';
import TopNavigation from "./TopNavigation";

import Spotify from "./Spotify";
import Twitch from './Twitch';
import Discord from './Discord';
import SoundCloud from './SoundCloud';
import Tiktok from './Tiktok';
import YouTube from './YouTube';
import Twitter from './Twitter';

// Contains the main social/media widget to be inserted
export default function ContentContainer():ReactElement {
  // const { theme } = useTheme();

  // const possibleSmallScreen:boolean = isMobile &&
  //   (screen.orientation.type === "portrait-primary" || 
  //   screen.orientation.type === "portrait-secondary");

  // useEffect(() => {
  //   if (possibleSmallScreen && theme === "dark") {
  //     toast(
  //       "Consider going Landscape!",
  //       {
  //         icon: '📱',
  //         duration: 5000, 
  //         style: {
  //           borderRadius: '5px',
  //           background: '#150916',
  //           color: '#fff',
  //         }
  //       }
  //     )
  //   } else if (possibleSmallScreen && theme === "light") {
  //     toast(
  //       "Consider going Landscape!",
  //       {
  //         icon: '📱',
  //         duration: 5000, 
  //         style: {
  //           borderRadius: '5px',
  //           background: '#fff',
  //           color: '#333',
  //         }
  //       }
  //     )
  //   }
  // }, [possibleSmallScreen, theme])

  // Dynamically change the media content based on user clicks on left
  const [media, _] = useContext(MediaContext);

  // List of media components that can be rendered
  function renderMedia(media:string):ReactElement {
    let component:ReactElement;

    switch(media) {
      case 'Spotify':
        component = <Spotify />
        break
      case 'Twitch':
        component = <Twitch />
        break
      case 'Discord':
        component = <Discord />
        break
      case 'SoundCloud':
        component = <SoundCloud />
        break
      // case 'Tiktok':
      //   component = <Tiktok />
      //   break
      case 'YouTube':
        component = <YouTube />
        break
      case 'Twitter':
        component = <Twitter />
        break
        
      default:
        component = <Spotify />
    }

    return component;
  }

  return (
    // Just 2 parts for now, a navigatino bar and the actual media
    <div className="content-container">
      <TopNavigation />
      {/* Special width for Twitter since component doesn't behave when > 1200px */}
      <div className={`media-content ${media === 'Twitter' ? 'twitter-content' : ''}`}>
        {renderMedia(media)}
      </div>
    </div>
  )
}
