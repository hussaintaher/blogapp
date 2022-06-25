import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/Navbar.css'
import '../styles/style.css'
import '../styles/blogCard.css'
import Navbar from '../components/Navbar'
import { getSession, SessionProvider } from "next-auth/react"
import {useState, useEffect} from 'react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  const [showing, setShowing] = useState(false);

      useEffect(() => {
        setShowing(true);
      }, []);
    
      if (!showing) {
        return null;
      }
    
      if (typeof window === 'undefined') {
        return <></>;
      } else {
        return (
          <SessionProvider session={session}>
              <Navbar/>
              <Component {...pageProps} />    
          </SessionProvider>
      
        )
      }
}

export default MyApp
