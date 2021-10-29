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

// Icon that toggles the theme
const ThemeIcon = () => {
  // Built in theme handler, which also stores 'theme' into localstorage
  const {theme, setTheme} = useTheme();
  const handleMode = () => { setTheme(theme === 'dark' ? 'light' : 'dark'); }

  // Render a sun or moon depending on the current theme
  return (
    <span onMouseDown={handleMode}>
      {theme === 'light' ? 
        <FaSun size='24' className='top-navigation-icon' /> :
        <FaMoon size='24' className='top-navigation-icon' />}
    </span>
  );
};

const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon user-icon' />;
const Title = () => <h5 className='title-text'>Sebii</h5>;

