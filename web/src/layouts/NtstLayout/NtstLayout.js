import { Link, routes } from '@redwoodjs/router'
import { useCart } from 'src/components/Cart'
const BlogLayout = ({ children }) => {
  const { cart } = useCart()
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-ntst-white p-6">
          <div className="flex items-center flex-shrink-0 text-ntst-blue">
            <Link
              to={routes.home()}
              className="block mt-5 text-6xl font-semibold sm:inline-block sm:mt-0 text-ntst-blue hover:text-ntst-purple"
            >
              NTST
            </Link>
          </div>

          <div className="flex flex-col uppercase text-sm items-center md:flex-row md:justify-around md:w-2/5">
            <Link
              to={routes.product()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-ntst-blue hover:text-ntst-purple mr-4"
            >
              Product
            </Link>
            <Link
              to={routes.article()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-ntst-blue hover:text-ntst-purple mr-4"
            >
              Article
            </Link>
            <Link
              to={routes.about()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-ntst-blue hover:text-ntst-purple mr-4"
            >
              About
            </Link>

            <button className="uppercase block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-ntst-blue hover:text-ntst-purple mr-4">
              Shop
            </button>


            <Link
              to={routes.contact()}
              className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-ntst-blue hover:text-ntst-purple mr-4"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end">
            {/* Shopping cart */}

            <Link
              to={routes.cart()}
              href="#"
              className="block cursor-pointer px-4 py-2"
            >
              <i className="text-xl text-ntst-ntst-blue hover:text-ntst-purple fas fa-shopping-cart"></i>
              <span className="bg-gray-100 text-ntst-blue font-semibold ml-1">
                {cart.cartItems.length > 0
                  ? cart.cartItems.reduce((a, c) => a + c.qty, 0)
                  : null}
              </span>
            </Link>
            {/* Login */}
            <button
              href="#"
              className="inline-block text-sm px-4 py-2 font-semibold leading-none border rounded text-ntst-blue border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-ntst-white py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <div className="flex items-center  flex-shrink-0 text-ntst-blue mr-6">
              <span className="font-bold text-xl">NTST</span>
            </div>
            <ul className="flex justify-center text-ntst-blue uppercase gap-12 text-xs">
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex gap-10 mt-12 md:mt-0">
            <li className="list-none">
              <i className="text-ntst-blue text-2xl fab fa-twitter hover:text-ntst-grey cursor-pointer"></i>
            </li>
            <li className="list-none">
              <i className="text-ntst-blue text-2xl fab fa-facebook hover:text-ntst-grey cursor-pointer"></i>
            </li>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BlogLayout
