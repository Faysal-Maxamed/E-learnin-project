import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icons to the library
library.add(faUser);

const Profile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    address: '',
    email: '',
    phone: '',
    district: '',
    school: '',
    class: '',
    avatar: null,
    isAdmin: false
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        age: user.age,
        address: user.address,
        email: user.email,
        phone: user.phone,
        district: user.district,
        school: user.school,
        class: user.class,
        avatar: user.avatar,
        isAdmin: user.isAdmin || false
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Profile</h2>
        <form className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 hover:bg-gray-300 cursor-pointer mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-gray-500 text-6xl" />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor="fullName">Full Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            {!formData.isAdmin && (
              <>
                <div>
                  <label className="block mb-2 font-bold text-gray-700" htmlFor="age">Age</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-gray-700" htmlFor="district">District</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-gray-700" htmlFor="school">School</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-gray-700" htmlFor="class">Class</label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor="address">Address</label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor="phone">Phone</label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
