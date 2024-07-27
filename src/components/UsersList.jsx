import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-medium text-gray-700">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white even:bg-gray-50 hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.role}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
