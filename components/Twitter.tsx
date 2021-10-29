import React from 'react';
// @ts-ignore Typescript can't find this one either
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useTheme } from 'next-themes';

export default function Twitter() {
  const { theme } = useTheme();

  return (
    <TwitterTimelineEmbed
      key={theme}
      sourceType="profile"
      screenName="sebseb122_"
      autoHeight="true"
      options={{ width: 1200, tweetLimit: 20 }} /* Seem like Twitter can only go to 1200px*/
      theme={theme}
      noFooter
    />
  )
}
