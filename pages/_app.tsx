import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { MediaProvider } from '../contexts/media';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrapped nicely in a theme provider to track light and dark theme
    <ThemeProvider attribute='class' defaultTheme='light'>
      {/* On the inside, wrap the context provider */}
      <MediaProvider>
        {/* All components of the app are mounted here */}
        <Component {...pageProps} />
      </MediaProvider>
    </ThemeProvider>
  )
}
export default MyApp
