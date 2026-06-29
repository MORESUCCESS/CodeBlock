import React, { useState } from "react";

import {
  Menu,
  X,
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, Outlet, useLocation } from "react-router-dom";

import Logo from "../../components/logo";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },

    {
      name: "Resources",
      path: "/admin/resources",
      icon: Package,
    },

    {
      name: "Orders",
      path: "/admin/orders",
      icon: ShoppingBag,
    },

    {
      name: "Users",
      path: "/admin/users",
      icon: Users,
    },

    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-gray-100
      dark:bg-gray-950
    "
    >
      {/* Mobile overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
              fixed
              inset-0
              bg-black/40
              z-40
              lg:hidden
            "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0

          h-screen
          w-72

          bg-white
          dark:bg-gray-900

          border-r
          border-gray-200
          dark:border-gray-800

          z-50

          flex
          flex-col

          p-6

          transition-transform
          duration-300

          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}

        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <Logo size="sm" />

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              lg:hidden
              text-gray-500
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}

        <nav
          className="
          mt-10
          space-y-2
          flex-1
        "
        >
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`

                    flex
                    items-center
                    gap-3

                    px-4
                    py-3

                    rounded-xl

                    transition


                    ${
                      active
                        ? "bg-gray-950 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }

                  `}
              >
                <Icon size={20} />

                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}

        <button
          className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            text-red-500
            hover:bg-red-50
            dark:hover:bg-red-950
            transition
            cursor-pointer
          "
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main */}

      <div
        className="
        lg:ml-72
        min-h-screen
      "
      >
        {/* Header */}

        <header
          className="
          h-20

          sticky
          top-0

          z-30

          bg-white/80
          dark:bg-gray-900/80

          backdrop-blur

          border-b

          border-gray-200
          dark:border-gray-800

          px-6

          flex
          items-center
          justify-between
        "
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="
              lg:hidden
              p-2
              rounded-xl
              bg-gray-100
              dark:bg-gray-800
            "
          >
            <Menu />
          </button>

          <h1
            className="
            font-bold
            text-xl
            text-gray-900
            dark:text-white
          "
          >
            Admin Panel
          </h1>

          <div
            className="
            w-10
            h-10
            rounded-full
            bg-gray-950
            text-white
            flex
            items-center
            justify-center
            font-bold
            border
            border-gray-600
          "
          >
            A
          </div>
        </header>

        {/* Page */}

        <main
          className="
          p-6
        "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
