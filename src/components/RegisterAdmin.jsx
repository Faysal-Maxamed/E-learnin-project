import React, { useState, useEffect } from 'react';

const RegisterAdmin = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [adminType, setAdminType] = useState('Admin');

  const handleRegister = () => {
    if (email && number && password && adminType !== 'none') {
      if (!email.includes('@gmail.com')) {
        alert('Please enter a valid Gmail address!');
      } else {
        alert('You are registered as a new admin!');
        const admin = {
          email,
          number,
          password,
          adminType,
        };
        // Save admin to local storage
        const admins = JSON.parse(localStorage.getItem('admins')) || [];
        admins.push(admin);
        localStorage.setItem('admins', JSON.stringify(admins));

        onRegister(admin);
      }
    } else {
      alert('Please fill in all the fields!');
    }
  };

  return (
    <div className="container mx-auto mt-12 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 max-w-lg bg-white rounded-3xl shadow-md">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Register Admin</h1>
      <div className="flex items-center space-x-4 justify-center">
        <label htmlFor="admin-type">Type:</label>
        <select
          id="admin-type"
          value={adminType}
          onChange={(e) => setAdminType(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          <option value="Admin">Admin</option>
        </select>
      </div>
      <div className="flex flex-col space-y-4 mt-8 w-full">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg"
          autoComplete="off"
        />

        <button
          onClick={handleRegister}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterAdmin;
