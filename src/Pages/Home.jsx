// src/pages/Home.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserRegister from './UserRegister';
import AdminRegister from './AdminRegister';

function Home() {
  const [showUserRegister, setShowUserRegister] = useState(false);
  const [showAdminRegister, setShowAdminRegister] = useState(false);
  const [role, setRole] = useState('');

  const handleUserRegister = () => {
    setShowUserRegister(true);
    setShowAdminRegister(false);
    setRole('user');
  };

  const handleAdminRegister = () => {
    setShowAdminRegister(true);
    setShowUserRegister(false);
    setRole('admin');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to Our Platform</h1>
      <div className="flex space-x-4">
        <button
          onClick={handleUserRegister}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          User Register
        </button>
        <button
          onClick={handleAdminRegister}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
        >
          Admin Register
        </button>
      </div>

      <div className="mt-8 w-full max-w-md">
        {showUserRegister && <UserRegister />}
        {showAdminRegister && <AdminRegister />}
      </div>

      <div className="mt-2">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link
            to={role === 'user' ? '/login' : '/admin-login'}
            className="text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
