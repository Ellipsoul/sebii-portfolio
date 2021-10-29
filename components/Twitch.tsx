import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore Unbelievable that TS can't find this...
import { TwitchEmbed } from 'react-twitch-embed';
import { useTheme } from 'next-themes';

// Using a packaged TwitchEmbed component
export default function Twitch() {
  // Grab the theme and window dimensions to decide whether chat should be displayed
  const { theme } = useTheme();

  // Width is relative to the device orientation
  // Primary means right way up, in landscape it means button on right
  // Not using this for now since screen object and next.js don't like each other

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height
  //   };
  // }
  // const { width } = getWindowDimensions();

  return (
    <TwitchEmbed 
      channel="sebseb122"
      id="sebseb122"  // For some reason this must be static
      allowFullscreen="true"
      autoplay="false"
      theme={theme}
      height="100%"
      width="100%"
      withChat={true}
      muted
    />
  )
}
