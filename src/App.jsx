import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Form1';
import CourseDetails from './pages/CourseDetails';
import Lesson from './pages/Lesson';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Form2 from './pages/Form2';
import F2Lessons from './pages/F2Lessons'; // Import F2Lessons component
import Form3 from './pages/Form3';
import Form4 from './pages/form4';
import F1Lessons from './pages/F1Lessons'; // Import F1Lessons component
import F3Lessons from './pages/F3Lessons'; // Import F3Lessons component

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password, userType) => {
    const adminEmail = '123@gmail.com';
    const adminPassword = '123';
    const admins = JSON.parse(localStorage.getItem('admins')) || [];

    if (userType === 'admin') {
      if (email === adminEmail && password === adminPassword) {
        const adminUser = {
          fullName: 'Pheyzal',
          age: 21,
          address: 'Taleh',
          email: adminEmail,
          phone: '0614388477',
          district: 'hodan',
          school: 'Ablaal',
          class: 'F4',
          isAdmin: true
        };
        setUser(adminUser);
        localStorage.setItem('user', JSON.stringify(adminUser));
        return true; // Allow navigation
      } else {
        const registeredAdmin = admins.find((admin) => admin.email === email && admin.password === password);
        if (registeredAdmin) {
          const adminUser = { ...registeredAdmin, isAdmin: true };
          setUser(adminUser);
          localStorage.setItem('user', JSON.stringify(adminUser));
          return true; // Allow navigation
        }
      }
    } else {
      const registeredUser = users.find((user) => user.email === email && user.password === password);
      if (registeredUser) {
        const normalUser = { ...registeredUser, isAdmin: false };
        setUser(normalUser);
        localStorage.setItem('user', JSON.stringify(normalUser));
        return true; // Allow navigation
      }
    }

    alert('Invalid credentials');
    return false; // Prevent navigation
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleRegister = (formData) => {
    setUsers([...users, formData]);
    alert('Registered successfully! Please login.');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {user && location.pathname !== '/login' && location.pathname !== '/register' && (
          <Header user={user} onLogout={handleLogout} />
        )}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/about-us" element={user ? <AboutUs /> : <Navigate to="/login" />} />
            <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId" element={user ? <CourseDetails /> : <Navigate to="/login" />} />
            <Route path="/courses/:courseId/F1Lessons/:lessonId" element={user ? <Lesson /> : <Navigate to="/login" />} />
            <Route path="/form1/:courseId/lessons" element={user ? <F1Lessons /> : <Navigate to="/login" />} />
            <Route path="/profile" element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} />
            <Route path="/contact-us" element={user ? <ContactUs /> : <Navigate to="/login" />} />
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} onLogout={handleLogout} />} />
            <Route path="/form2" element={user ? <Form2 /> : <Navigate to="/login" />} />
            <Route path="/form2/:courseId" element={user ? <F2Lessons /> : <Navigate to="/login" />} /> {/* Route to F2Lessons =*/}
            <Route path="/form3" element={user ? <Form3 /> : <Navigate to="/login" />} />
            <Route path="/form3/:courseId" element={user ? <F3Lessons /> : <Navigate to="/login" />} /> {/* Route to F3Lessons */}
            <Route path="/form4" element={user ? <Form4 /> : <Navigate to="/login" />} />
            {user && user.isAdmin && <Route path="/admin" element={<Admin users={users} setUsers={setUsers} />} />}
          </Routes>
        </main>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
};

export default App;
