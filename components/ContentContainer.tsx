import React, { ReactElement, useContext } from 'react'

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
      case 'Tiktok':
        component = <Tiktok />
        break
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
    <div className="content-container">
      <TopNavigation />
      <div className="media-content">
        {renderMedia(media)}
      </div>
    </div>
  )
}
