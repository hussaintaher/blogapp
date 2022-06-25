import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import {getSession} from 'next-auth/react'

function Navbar() {
  const {data: session, status} = useSession()
  
  console.log(session)
  return (
    <nav className='header px-60'>
      <h1 className='logo'>
        <a href='#'>Instrumentation Blog</a>
      </h1>
      <ul className='main-nav'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/blogs'>
            <a>Blogs</a>
          </Link>
        </li>
        {!status.loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn()
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
