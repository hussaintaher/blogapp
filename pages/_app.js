import '../styles/globals.css'
import '../styles/Navbar.css'
import Navbar from '../components/Navbar'
import { getSession, SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
        <Navbar/>
        <Component {...pageProps} />    
    </SessionProvider>
  )
}

export default MyApp
