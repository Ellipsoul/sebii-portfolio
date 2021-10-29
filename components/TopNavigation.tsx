import React from 'react'
import {
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function TopNavigation() {
  return (
    <div className='top-navigation'>
      <Title />
      <ThemeIcon />
      <UserCircle />
    </div>
  )
}

const iconSize:string = 'calc(30px + 1vh)';
const iconMoonSize:string = 'calc(25px + 1vh)'

// Icon that toggles the theme
const ThemeIcon = () => {
  // Built in theme handler, which also stores 'theme' into localstorage
  const {theme, setTheme} = useTheme();
  const handleMode = () => { setTheme(theme === 'dark' ? 'light' : 'dark'); }

  // Render a sun or moon depending on the current theme
  return (
    <span onMouseDown={handleMode}>
      {theme === 'light' ? 
        <FaSun size={iconSize} className='top-navigation-icon' /> :
        <FaMoon size={iconMoonSize} className='top-navigation-icon' />}
    </span>
  );
};

const UserCircle = () => <FaUserCircle size={iconSize} className='top-navigation-icon user-icon' />;
const Title = () => <h5 className='title-text'>Sebii</h5>;

