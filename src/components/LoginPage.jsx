import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    navigate('/dashboard'); // Mock navigation
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col items-center justify-center p-12">
        <img 
          src="/logo.png" 
          alt="WellNest
           Logo" 
          className="w-36 h-36 mb-6 rounded-full shadow-lg" />
        <h2 className="text-4xl font-bold text-blue-600 mb-3">WellNest</h2>
        <p className="text-gray-700 text-center max-w-md text-lg">
          Discover personalized wellness tips for your mind and body. Get started on your journey to a healthier, happier you.
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-white p-12">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4 w-80 text-left">
          <label className="block text-sm font-medium mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4 w-80 text-left relative">
          <label className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {password && (
            <p className="text-xs text-gray-400 mt-1 italic">{password}</p>
          )}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleLogin}
          className="mb-4 w-80 py-3 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow-lg hover:brightness-105"
        >
          Continue
        </button>

        {/* Social Login */}
        <p className="mb-3 text-gray-500">Or login using:</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white border border-gray-700 rounded-xl shadow-sm hover:shadow-md">
            <FaApple size={18} /> Apple
          </button>
        </div>
      </div>
    </div>
  );
}
