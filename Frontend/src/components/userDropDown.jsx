import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, BookOpen, Package, Settings, LogOut } from "lucide-react";
import { useAuth } from "../context/authContext.jsx";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { user, logOut } = useAuth();
  
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await logOut();
    navigate("/login")
    setIsOpen(false);
  };

  // Fallback initials if user has no profile picture
  const getInitials = () => {
    if (!user?.fullName) return "U";

    const names = user.fullName.split(" ");

    return names
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          px-2
          py-1.5
          hover:bg-gray-100
          dark:hover:bg-gray-800
          transition
          cursor-pointer
        "
      >
        {/* Avatar */}

        {user?.profilePicture ? (
          <img
            src={user.profilePicture}
            alt={user.fullName}
            className="
              w-9
              h-9
              rounded-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-gray-900
              text-white
              flex
              items-center
              justify-center
              text-sm
              font-semibold
            "
          >
            {getInitials()}
          </div>
        )}

        <ChevronDown
          size={16}
          className="
            text-gray-500
            dark:text-gray-400
          "
        />
      </button>

      {/* Dropdown */}

      {isOpen && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-64
            rounded-2xl
            border
            border-gray-200
            dark:border-gray-800
            bg-white
            dark:bg-gray-950
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          {/* User Info */}

          <div
            className="
              px-5
              py-4
              border-b
              border-gray-200
              dark:border-gray-800
            "
          >
            <p
              className="
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              {user?.fullName}
            </p>

            <p
              className="
                text-sm
                text-gray-500
                truncate
              "
            >
              {user?.email}
            </p>
          </div>

          {/* Menu Items */}

          <div className="py-2">
            <Link
              to="/library"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                text-sm
                text-gray-700
                dark:text-gray-200
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
              "
            >
              <BookOpen size={18} />
              My Library
            </Link>

            <Link
              to="/orders"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                text-sm
                text-gray-700
                dark:text-gray-200
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
              "
            >
              <Package size={18} />
              Orders
            </Link>

            <Link
              to="/settings"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                text-sm
                text-gray-700
                dark:text-gray-200
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
              "
            >
              <Settings size={18} />
              Settings
            </Link>
          </div>

          {/* Logout */}

          <div
            className="
              border-t
              border-gray-200
              dark:border-gray-800
              py-2
            "
          >
            <button
              onClick={handleLogout}
              className="
                w-full
                flex
                items-center
                gap-3
                px-5
                py-3
                text-sm
                text-red-500
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition
                cursor-pointer
              "
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
