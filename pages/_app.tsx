import 'tailwindcss/tailwind.css'
import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrapped nicely in a theme provider to track light and dark theme
    <ThemeProvider attribute='class' defaultTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
