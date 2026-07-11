import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

import Logo from "./logo";

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import UserDropdown from "./userDropDown";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // check if user if logged in
  const { user } = useAuth();

  // Temporary cart count
  // Replace with global cart state later
  const cartCount = 2;

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Browse Resources",
      path: "/resources",
    },

    {
      name: "Categories",
      path: "/categories",
    },

    {
      name: "About",
      path: "/about",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        bg-gray-50
        dark:bg-gray-950
      "
    >
      {/* Navbar */}

      <header
        className="
          w-full
          border-b
          border-gray-200
          dark:border-gray-800
          bg-white/80
          dark:bg-gray-950/80
          backdrop-blur-md
          sticky
          top-0
          z-50
        "
      >
        <nav
          className="
            max-w-7xl
            mx-auto
            px-6
            py-4
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <Link to="/">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
              text-sm
              font-medium
              text-gray-600
              dark:text-gray-300
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="
                  hover:text-black
                  dark:hover:text-white
                  transition
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* Cart */}

            <Link
              to="/cart"
              className="
                relative
                p-2
                rounded-xl
                hover:bg-gray-100
                dark:hover:bg-gray-800
                text-gray-900
                dark:text-white
              "
            >
              <ShoppingCart size={22} />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    min-w-5
                    h-5
                    px-1
                    rounded-full
                    bg-red-500
                    text-white
                    text-xs
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth */}

            <div
              className="
                hidden
                sm:flex
                items-center
                gap-3
              "
            >
              {user ? (
                <UserDropdown />
              ) : (
                <>
                  <Link
                    to="/login"
                    className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                "
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="
                  px-5
                  py-2
                  rounded-xl
                  bg-gray-900
                  text-white
                  text-sm
                  font-semibold
                "
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                md:hidden
                p-2
                rounded-xl
                bg-gray-100
                text-white
                dark:bg-gray-800
              "
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}

        {isMenuOpen && (
          <div
            className="
              md:hidden
              border-t
              border-gray-200
              dark:border-gray-800
              px-6
              py-6
              bg-white
              dark:bg-gray-950
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className="
                    font-medium
                    text-gray-700
                    dark:text-gray-200
                  "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/cart"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  gap-2
                  font-medium
                "
              >
                <ShoppingCart size={18} />
                Cart ({cartCount})
              </Link>

              <div
                className="
                  pt-5
                  border-t
                  border-gray-200
                  dark:border-gray-800
                  flex
                  flex-col
                  gap-3
                "
              >
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="
                    text-center
                    py-3
                    rounded-xl
                    bg-gray-100
                  "
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="
                    text-center
                    py-3
                    rounded-xl
                    bg-black
                    text-white
                  "
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page */}

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}

      <footer
        className="
          border-t
          border-gray-200
          dark:border-gray-800
          bg-white
          dark:bg-gray-950
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-10
            grid
            md:grid-cols-3
            gap-8
          "
        >
          <div>
            <Logo size="sm" />

            <p
              className="
                mt-4
                text-sm
                text-gray-500
              "
            >
              Get production-ready code blocks, starter kits, and developer
              resources for your next project.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Platform</h3>

            <div className="space-y-2 text-sm text-gray-500">
              <p>Components</p>
              <p>Starter Kits</p>
              <p>Templates</p>
              <p>Documentation</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Connect</h3>

            <div className="flex gap-3">
              <button
                className="
                  p-2
                  rounded-xl
                  bg-gray-100
                "
              >
                <FaGithub size={18} />
              </button>

              <button
                className="
                  p-2
                  rounded-xl
                  bg-gray-100
                "
              >
                <FaXTwitter size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="
            border-t
            py-5
            text-center
            text-sm
            text-gray-500
          "
        >
          © {new Date().getFullYear()} codeblock. Built for developers.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
