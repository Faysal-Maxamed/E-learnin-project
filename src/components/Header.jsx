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
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative z-20">
      <Link to="/home" className="text-2xl font-bold">
        EduPlatform
      </Link>
      {user && (
        <nav className="space-x-4 flex items-center">
          <Link to="/home" className={getLinkClass('/')}>Home</Link>
          <Link to="/courses" className={getLinkClass('/courses')}>Courses</Link>
          <Link to="/contact-us" className={getLinkClass('/contact-us')}>Contact Us</Link>
          <Link to="/about-us" className={getLinkClass('/about-us')}>About Us</Link>
          <div className="relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="bg-gray-800 text-white font-bold hover:bg-gray-700 px-4 py-2 rounded"
            >
              Menu
            </button>
            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg z-30">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/profile" className="block text-gray-800">
                    Profile
                  </Link>
                </li>
                {user.isAdmin && (
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/admin" className="block text-gray-800">
                      See Users
                    </Link>
                  </li>
                )}
                <li className="px-4 py-2 hover:bg-gray-200">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-gray-800 bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
