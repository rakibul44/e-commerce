import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Navigation Buttons Data
const navButtons = [{ name: "Go Home", link: "/" }];

// Profile Images (Dynamic Example)
const profileImages = [{ src: "https://via.placeholder.com/40", alt: "Profile 1" }];

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add/remove 'dark' class from root HTML
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle Profile Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      {/* Left Section: Search Input & Navigation Buttons */}
      <div className="flex items-center space-x-4 w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0">
        {/* Search Bar */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300">🔍</span>
        </div>

        {/* Navigation Buttons (Only show on larger screens) */}
        {navButtons.map((button, index) => (
          <Link
            key={index}
            to={button.link}
            className="bg-orange-500 text-white w-60 p-2 rounded hover:bg-orange-600 transition hidden sm:flex items-center justify-center"
          >
            {button.name}
          </Link>
        ))}
      </div>

      {/* Right Section: Dark Mode Toggle and Profile Images */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {isDarkMode ? (
            <span className="text-yellow-400">☀️</span>
          ) : (
            <span className="text-gray-800 dark:text-gray-200">🌙</span>
          )}
        </button>

        {/* Profile Image */}
        {profileImages.map((profile, index) => (
          <div key={index} className="relative">
            <img
              src={profile.src}
              alt={profile.alt}
              className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 cursor-pointer"
              onClick={toggleDropdown} // Toggle dropdown on click
            />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
                <ul className="py-2 text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/dashboard/profileupdate"
                      className="block px-4 py-2 text-sm text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
