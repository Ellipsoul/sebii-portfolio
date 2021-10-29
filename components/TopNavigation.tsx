import React from 'react'
import {
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useTheme } from 'next-themes';
import toast from 'react-hot-toast';

export default function TopNavigation() {
  return (
    <div className='top-navigation'>
      <Title />
      <ThemeIcon />
      <UserCircle />
    </div>
  )
}

// Custom dynamic sizes for the icons
const iconSize:string = 'calc(30px + 1vh)';
const iconMoonSize:string = 'calc(25px + 1vh)'

// Icon that toggles the theme
const ThemeIcon = () => {
  // Built in theme handler, which also stores 'theme' into localstorage
  const handleMode = () => { setTheme(theme === 'dark' ? 'light' : 'dark'); }
  const {theme, setTheme} = useTheme();

  // Render a sun or moon depending on the current theme
  return (
    <span onMouseDown={handleMode}>
      {theme === 'light' ? 
        <FaSun size={iconSize} className='top-navigation-icon' /> :
        <FaMoon size={iconMoonSize} className='top-navigation-icon' />}
    </span>
  );
};

// Toast that this is under construction, dynamic to theme
const handleInProgressToast = (theme:string|undefined):void => {
  if (theme === "light") {
    toast(
      "Coming Soon!",
      {
        icon: '🔧',
        duration: 2500,
        style: {
          borderRadius: '5px',
          background: '#fff',
          color: '#333',
        }
      }
    )
  } else if (theme === "dark") {
    toast(
      "Coming Soon!",
      {
        icon: '🔧',
        duration: 2500,
        style: {
          borderRadius: '5px',
          background: '#150916',
          color: '#fff',
        }
      })
  }
}

// User profile
const UserCircle = () => {
  // Need to declare in a React function or React hook component
  const { theme } = useTheme();

  // Alert the user that work is in progress
  return (
    <FaUserCircle 
      size={iconSize}
      className='top-navigation-icon user-icon' 
      onMouseDown={() => handleInProgressToast(theme)}/>
  );
}


// Title on lop left
const Title = () => <h5 className='title-text'>SEBii</h5>;

