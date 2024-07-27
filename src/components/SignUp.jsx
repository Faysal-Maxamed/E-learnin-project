import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-green-300">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

