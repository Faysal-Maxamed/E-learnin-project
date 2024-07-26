import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onLogout();
      navigate('/login');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-yellow-500' : '';
  };

  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center relative z-20">
      <Link to="/home" className="text-2xl font-bold">
        EduPlatform
      </Link>
      <nav className="space-x-4 flex items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-200 hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={menuOpen ? 'hidden' : 'block'}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={menuOpen ? 'block' : 'hidden'}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-16 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg z-30" ref={menuRef}>
              <Link
                to="/home"
                className={`block px-4 py-2 text-gray-800 ${getLinkClass('/')}`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`block px-4 py-2 text-gray-800 ${getLinkClass('/about-us')}`}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`block px-4 py-2 text-gray-800 ${getLinkClass('/courses')}`}
              >
                Courses
              </Link>
              <Link
                to="/contact-us"
                className={`block px-4 py-2 text-gray-800 ${getLinkClass('/contact-us')}`}
              >
                Contact Us
              </Link>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className={`block px-4 py-2 text-gray-800 ${getLinkClass('/dashboard')}`}
                  >
                    Dashboard
                  </Link>
                  <hr className="my-2" />
                  <Link to="/profile" className="block px-4 py-2 text-gray-800">
                    Profile
                  </Link>
                  {user.isAdmin && (
                    <>
                      <Link to="/admin" className="block px-4 py-2 text-gray-800">
                        See Users
                      </Link>
                      <Link to="/RegisterAdmin" className="block px-4 py-2 text-gray-800">
                        Register Admin
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-gray-800 bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/home" className={`text-gray-200 hover:text-white ${getLinkClass('/')}`}>
            Home
          </Link>
          <Link
            to="/about-us"
            className={`text-gray-200 hover:text-white ${getLinkClass('/about-us')}`}
          >
            About Us
          </Link>
          {user && (
            <>
              <Link to="/dashboard" className={`text-gray-200 hover:text-white ${getLinkClass('/dashboard')}`}>
                Dashboard
              </Link>
              <Link
                to="/contact-us"
                className={`text-gray-200 hover:text-white ${getLinkClass('/contact-us')}`}
              >
                Contact Us
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
