import React, { useState } from 'react';

const Admin = ({ users, setUsers }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    // Check if any field is blank
    for (let key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        alert('All fields must be filled out');
        return;
      }
    }

    setUsers([...users, formData]);
    setFormData({
      fullName: '',
      age: '',
      address: '',
      phone: '',
      email: ''
    });
  };

  const handleDeleteUser = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const newUsers = users.filter((_, i) => i !== index);
      setUsers(newUsers);
    }
  };

  const handleUpdateUser = (index) => {
    if (index === -1) {
      alert('User not found');
      return;
    }

    // Check if any field is blank
    for (let key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        alert('All fields must be filled out');
        return;
      }
    }

    const updatedUsers = users.map((user, i) => (i === index ? formData : user));
    setUsers(updatedUsers);
    setFormData({
      fullName: '',
      age: '',
      address: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-4">Admin Page</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 border">Full Name</th>
                <th className="py-2 px-4 border">Age</th>
                <th className="py-2 px-4 border">Address</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="py-2 px-4 border">{user.fullName}</td>
                  <td className="py-2 px-4 border">{user.age}</td>
                  <td className="py-2 px-4 border">{user.address}</td>
                  <td className="py-2 px-4 border">{user.phone}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => setFormData(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDeleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-2xl font-bold mb-4">Add / Update User</h3>
        <div className="space-y-4">
          <div>
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
          <div>
            <label className="block mb-2 font-bold" htmlFor="age">Age</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="address">Address</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="phone">Phone</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
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
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddUser}
          >
            Add User
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            onClick={() => handleUpdateUser(users.findIndex(user => user.email === formData.email))}
          >
            Update User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
