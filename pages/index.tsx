import React, { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ContentContainer from '../components/ContentContainer';

export default function App():ReactElement {
  return (
    <div className='flex'>
      <Sidebar key={uuidv4()}/>
      <ContentContainer key={uuidv4()}/>
    </div>
  )
}
