import React, { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ContentContainer from '../components/ContentContainer';
import { Toaster } from 'react-hot-toast';
import Metatags from '../components/Metatags';

// Main component that is mounted into _App.tsx
export default function App():ReactElement {
  return (
    // Full screen with flexbox and aligning items to the left
    <main className='flex h-screen w-screen items-start'>
      <Metatags title="Sebii" />

      <Sidebar key={uuidv4()}/>
      <ContentContainer key={uuidv4()}/>

      {/* Toast will be rendered whenever called! */}
      <Toaster />
    </main>
  )
}
