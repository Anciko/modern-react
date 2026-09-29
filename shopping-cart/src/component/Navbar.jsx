import { Link, NavLink } from "react-router";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  return (
    <nav className="bg-white border-gray-200 shadow-sm dark:bg-gray-900">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            StoreLogo
          </span>
        </Link>

        {/* Right Navigation Items (Cart & Profile) */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-4">
          <Link
            to="/cart"
            className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            {/* Badge*/}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {itemCount}
            </span>
          </Link>
        </div>

        {/* Menu Links*/}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" :
                    "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-gray-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"
                  }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" :
                    "block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-gray-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"
                  }
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
