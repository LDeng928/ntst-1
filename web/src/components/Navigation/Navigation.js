import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import SignoutBtn from 'src/components/SignoutBtn'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <nav>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>
          <Link to={routes.signup()}>Sing Up</Link>
          <Link to={routes.signin()}>Sign In</Link>
        </>
      )}
    </nav>
  )
}

export default Navigation
