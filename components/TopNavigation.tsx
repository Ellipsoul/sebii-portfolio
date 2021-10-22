import React from 'react'
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useTheme } from 'next-themes';

// TODO: Figure out why this is overlapping to the sidebar
export default function TopNavigation() {
  return (
    // TODO: There won't be too much in here, just the theme selector and a title
    <div className='top-navigation'>
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
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

// TODO: Remove all of these except probably the user icon, just for show
const Search = () => (
  <div className='search bg-blue-500 dark:bg-green-500'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>tailwind-css</h5>;

