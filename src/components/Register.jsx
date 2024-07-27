import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = {
          ...formData,
          uid: user.uid,
        };
        localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') || '[]'), newUser]));
        onRegister(newUser);
        alert('Registered successfully! Please login.');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="fullName">Full Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-200" type="submit">Register</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500 hover:underline">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;