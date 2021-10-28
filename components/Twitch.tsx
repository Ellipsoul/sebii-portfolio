import React, { useRef } from 'react';
// @ts-ignore Unbelievable that TS can't find this...
import { TwitchEmbed } from 'react-twitch-embed';
import { useTheme } from 'next-themes';

export default function Twitch() {
  const { theme } = useTheme();
  return (
    <TwitchEmbed 
      channel="sebseb122"
      id="sebseb122"  // For some reason this must be static
      allowFullscreen="true"
      autoplay="false"
      theme={theme}
      height="100%"
      width="100%"
      muted
    />
  )
}
