import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Utils/Button';
import Card from '../Components/Utils/Card'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }
    setError('');
    navigate('/verification'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <h2 className="text-2xl font-bold mb-6 text-center">Let's get you started</h2>
        <p className="mb-4 text-center text-gray-600">Please enter your email address</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="work-email@gmail.com"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          {error && <p className="text-red-500 text-center mb-2">{error}</p>}
          <p className="text-center text-gray-600 mb-4">
            We recommend using your work email to easily find your teammates
          </p>
          <Button text="Create Account" onClick={handleSubmit} />
        </form>
        <div className="text-center mb-4">or</div>
        <button className="w-full bg-white border border-gray-300 text-gray-600 p-2 rounded flex items-center justify-center">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
          Continue with Google
        </button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="#" className="text-purple-500">Sign In</a>
        </p>
      </Card>
    </div>
  );
};

export default Signup;
