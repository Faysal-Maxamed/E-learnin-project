import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBook, faUsers, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Components/Profile';
import RegisterAdmin from '../Components/RegisterAdmin';
import UsersList from '../Components/UsersList';

const Dashboard = ({ user, setUser, onLogout }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showRegisterAdmin, setShowRegisterAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      onLogout();
      navigate('/login');
    }
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowCourses(false);
    setShowUsers(false);
    setShowRegisterAdmin(false);
  };

  const handleCoursesClick = () => {
    setShowCourses(!showCourses);
    setShowProfile(false);
    setShowUsers(false);
    setShowRegisterAdmin(false);
  };

  const handleUsersClick = () => {
    setShowUsers(!showUsers);
    setShowProfile(false);
    setShowCourses(false);
    setShowRegisterAdmin(false);
  };

  const handleRegisterAdminClick = () => {
    setShowRegisterAdmin(!showRegisterAdmin);
    setShowUsers(false);
    setShowProfile(false);
    setShowCourses(false);
  };

  const handleRegister = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setShowRegisterAdmin(false);
    setShowUsers(true);
  };

  const navigateToForm2 = () => {
    navigate('/form2');
  };
  const navigateToForm3 = () => {
    navigate('/form3');
  };
  const navigateToForm4 = () => {
    navigate('/form4');
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-600 text-white p-8 w-64 flex flex-col items-center">
        <div className="text-center mb-8">
          <FontAwesomeIcon icon={faUser} className="text-white text-4xl mb-4" />
          {user && (
            <>
              <h3>{user.name}</h3>
              <p>{user.role}</p>
              <p>{user.email}</p> {/* Display the user's email */}
            </>
          )}
        </div>
        <nav className="w-full">
          <button onClick={() => navigate('/Home')} className="block w-full text-left p-2 text-lg font-medium transition duration-300 rounded-lg">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </button>
          <button onClick={handleCoursesClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
            <FontAwesomeIcon icon={faBook} className="mr-2" /> Courses
          </button>
          {showCourses && (
            <>
              <button onClick={() => navigate('/courses')} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 1 Course
              </button>
              <button onClick={navigateToForm2} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 2 Course
              </button>
              <button onClick={navigateToForm3} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 3 Course
              </button>
              <button onClick={navigateToForm4} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                Form 4 Course
              </button>
            </>
          )}
          <button onClick={handleProfileClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
          </button>
          {user?.isAdmin && (
            <>
              <button onClick={handleUsersClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                <FontAwesomeIcon icon={faUsers} className="mr-2" /> See Users
              </button>
              <button onClick={handleRegisterAdminClick} className="block w-full text-left p-2 text-lg font-medium transition duration-300">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Register Admin
              </button>
            </>
          )}
          <button onClick={handleLogout} className="block w-full text-left p-2 text-lg font-medium text-red-500 transition duration-300 mt-auto">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
          </button>
        </nav>
      </div>
      <div className="flex-grow p-8">
        {!showCourses && !showProfile && !showUsers && !showRegisterAdmin && (
          <p className="text-lg mb-8">Welcome to the Dashboard! Enjoy Your Time</p>
        )}
        {showProfile && <Profile user={user} setUser={setUser} />}
        {showUsers && <UsersList users={users} />} {/* Pass the users state */}
        {showRegisterAdmin && <RegisterAdmin onRegister={handleRegister} />} {/* Pass the handleRegister function */}
      </div>
    </div>
  );
};

export default Dashboard;
