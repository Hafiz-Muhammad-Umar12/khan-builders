'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side with image */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          height={300}
          width={300}
          src="/login.jpg" // Replace with your actual image path
          alt="Sign In Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right side with form */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">LOGIN</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white p-3 rounded-md mt-4 hover:bg-yellow-500 transition"
            >
              Sign In
            </button>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                Don’t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
