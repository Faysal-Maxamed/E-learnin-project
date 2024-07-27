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
                      className="bg-red-500 text-white px-2 py-1 rounded ml-16"
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
      
    </div>
  );
};

export default Admin;
