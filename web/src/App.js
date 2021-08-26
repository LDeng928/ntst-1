import { AuthProvider } from '@redwoodjs/auth'
import GoTrue from 'gotrue-js'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { CartProvider } from 'src/components/Cart'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const goTrueClient = new GoTrue({
  APIUrl: 'https://ntst.netlify.app/.netlify/identity',
  setCookie: true,
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <AuthProvider client={goTrueClient} type="goTrue">
        <RedwoodApolloProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
