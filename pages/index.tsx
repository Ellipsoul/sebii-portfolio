import React, { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import { v4 as uuidv4 } from 'uuid';

export default function App():ReactElement {
  return (
    <div className='flex'>
      <Sidebar key={uuidv4()}/>
    </div>
  )
}
