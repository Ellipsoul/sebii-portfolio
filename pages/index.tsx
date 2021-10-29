import React, { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ContentContainer from '../components/ContentContainer';
import { Toaster } from 'react-hot-toast';

export default function App():ReactElement {
  return (
    <div className='flex h-screen w-screen items-start'>
      <Sidebar key={uuidv4()}/>
      <ContentContainer key={uuidv4()}/>

      {/* Toast will be rendered whenever called! */}
      <Toaster />
    </div>
  )
}
