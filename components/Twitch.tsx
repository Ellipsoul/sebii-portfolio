import React from 'react';
// @ts-ignore Unbelievable that TS can't find this...
import { TwitchEmbed } from 'react-twitch-embed';

import { v4 as uuidv4 } from 'uuid';

export default function Twitch() {
  // TODO: Play around with the settings for react-twitch-embed
  return (
    <TwitchEmbed 
      channel="sebseb122"
      id={uuidv4()}
      theme="dark"
      height="100%"
      width="100%"
      muted
      onVideoPause={() => console.log(':(')}
    />
  )
}
