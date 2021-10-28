import React from 'react';
// @ts-ignore Unbelievable
import { TwitchEmbed } from 'react-twitch-embed';

export default function Twitch() {
  // TODO: Play around with the settings for react-twitch-embed
  return (
    <TwitchEmbed 
      channel="sebseb122"
      id="sebseb122"
      theme="dark"
      height="100%"
      width="100%"
      muted
      onVideoPause={() => console.log(':(')}
    />
  )
}
