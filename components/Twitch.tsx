import React from 'react';
// @ts-ignore Unbelievable that TS can't find this...
import { TwitchEmbed } from 'react-twitch-embed';

import { v4 as uuidv4 } from 'uuid';

export default function Twitch() {
  return (
    <TwitchEmbed 
      channel="sebseb122"
      id={uuidv4()}
      allowFullscreen="true"
      autoplay="false"
      theme="dark"
      height="100%"
      width="100%"
      muted
      onVideoPause={() => console.log(':(')}
    />
  )
}
