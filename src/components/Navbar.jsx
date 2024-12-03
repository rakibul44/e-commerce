import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 w-full">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-black">
            elans.
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <div className="relative group">
            <button className="text-gray-700 font-semibold hover:text-black">Home</button>
            <div className="absolute left-0 hidden group-hover:flex bg-white shadow-md p-2">
              <Link
                to="/home/sub1"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 1
              </Link>
              <Link
                to="/home/sub2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 2
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 font-semibold hover:text-black">Shop</button>
            <div className="absolute left-0 hidden group-hover:flex bg-white shadow-md p-2 space-x-2">
              <Link
                to="/shop/sub1"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 1
              </Link>
              <Link
                to="/shop/sub2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 2
              </Link>
              <Link
                to="/shop/sub3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 3
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 font-semibold hover:text-black">Product</button>
            <div className="absolute left-0 hidden group-hover:flex bg-white shadow-md p-2 space-x-2">
              <Link
                to="/product/sub1"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 1
              </Link>
              <Link
                to="/product/sub2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Submenu 2
              </Link>
            </div>
          </div>
          <Link to="/blog" className="text-gray-700 font-semibold hover:text-black">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 font-semibold hover:text-black">
            Contact
          </Link>
        </div>

        {/* Right Side: Search, User Icon, and Cart */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search entire store here..."
              className="border-b border-gray-400 focus:outline-none focus:border-black px-2 py-1 text-sm"
            />
            <button class='font-semibold text-lg'>
                <FaSearch />
            </button>
          </div>

          {/* User Icon */}
          <button> 
            <FaRegUser />
          </button>
          

          {/* Cart Icon */}
          <div className="relative">
            <button class='h-10 w-7'>
                <FaShoppingCart />
            </button>
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-2">
            <Link to="/home" className="block text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link to="/shop" className="block text-gray-700 hover:bg-gray-100">
              Shop
            </Link>
            <Link to="/product" className="block text-gray-700 hover:bg-gray-100">
              Product
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:bg-gray-100">
              Blog
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
