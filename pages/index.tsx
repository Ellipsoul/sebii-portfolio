import React, { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ContentContainer from '../components/ContentContainer';
import { Toaster } from 'react-hot-toast';

// Main component that is mounted into _App.tsx
export default function App():ReactElement {
  return (
    // Full screen with flexbox and aligning items to the left
    <div className='flex h-screen w-screen items-start'>
      <Sidebar key={uuidv4()}/>
      <ContentContainer key={uuidv4()}/>

      {/* Toast will be rendered whenever called! */}
      <Toaster />
    </div>
  )
}
