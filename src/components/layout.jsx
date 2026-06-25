import React from "react";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      {/* Navbar */}
      <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Browse Resources
            </a>

            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              Categories
            </a>

            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition"
            >
              About
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Auth Links */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#"
                className="
                  px-4 py-2
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                  transition
                "
              >
                Login
              </a>

              <a
                href="#"
                className="
                  px-5 py-2
                  rounded-xl
                  bg-gray-900
                  text-white
                  text-sm
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Signup
              </a>
            </div>

            {/* Mobile Menu */}
            <button
              className="
                md:hidden
                p-2
                rounded-xl
                bg-gray-100
                dark:bg-gray-800
                text-white
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1 mb-20">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Logo size="sm" />

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-sm">
              Get production-ready code blocks, starter kits, and developer
              resources for your next project.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Platform
            </h3>

            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Components</li>

              <li>Starter Kits</li>

              <li>Templates</li>

              <li>Documentation</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-3">
              <button
                className="
                  p-2
                  rounded-xl
                  bg-gray-100
                  dark:bg-gray-800
                "
              >
                <FaGithub size={18} />
              </button>

              <button
                className="
                  p-2
                  rounded-xl
                  bg-gray-100
                  dark:bg-gray-800
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
          border-gray-200
          dark:border-gray-800
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
