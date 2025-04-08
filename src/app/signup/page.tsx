'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    if (password === confirmPassword) {
      console.log('Email:', email, 'Password:', password);
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 mt-12">
      {/* Left side with image */}
      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <Image
          height={500}
          width={500}
          src="/signup.svg" // Replace with your actual image path
          alt="Sign Up Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right side with form */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
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

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 border border-gray-300 rounded-md mt-2 text-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white p-3 rounded-md mt-4 hover:bg-yellow-500 transition"
            >
              Sign Up
            </button>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
