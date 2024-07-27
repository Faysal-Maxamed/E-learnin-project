import React, { useState, useEffect } from 'react';

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
    avatar: null
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
        avatar: user.avatar
      });
    }
  }, [user]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is blank
    for (let key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        alert('All fields must be filled out');
        return;
      }
    }
    setUser(formData);
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Profile updated successfully');
  };

  const handleDeleteUser = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUser(null);
      localStorage.removeItem('user');
      alert('User deleted successfully');
    }
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <div className="bg-yellow-200 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8">Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 hover:bg-gray-300 cursor-pointer"
              onClick={() => document.getElementById('fileInput').click()}
            >
              {formData.avatar ? (
                <img src={formData.avatar} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
              )}
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
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
            <label className="block mb-2 font-bold" htmlFor="district">District</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="school">School</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="class">Class</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Update Profile</button>
        </form>
        <button
          onClick={handleDeleteUser}
          className="w-full px-4 py-2 mt-4 bg-red-500 text-white rounded"
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default Profile;
