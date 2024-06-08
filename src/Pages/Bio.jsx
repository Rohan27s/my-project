import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobTitles } from '../Data/data';
import Button from '../Components/Utils/Button';
import Card from '../Components/Utils/Card'; 

const Bio = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', jobTitle: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="flex items-center flex-col gap-4 justify-center min-h-screen bg-gray-100">
      <Card showBackButton={false}>
        <h2 className="text-2xl font-bold mb-2 text-center">Tell Us About Yourself</h2>
        <p className='text-center text-gray-600 mb-4'>Tell us about yourself so we can sort you in.</p>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2 font-medium">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 p-2 rounded-lg"
                placeholder='Enter First Name'
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-2 font-medium">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 p-2 rounded-lg"
                placeholder='Enter Last Name'
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="jobTitle" className="mb-2 font-medium">Job Title</label>
            <select 
              id="jobTitle" 
              name="jobTitle" 
              className="border border-gray-300 p-2 rounded-lg"
              value={formData.jobTitle}
              onChange={handleChange}
            >
              <option value="">Enter your Job Title</option>
              {jobTitles.map((job) => (
                <option key={job.value} value={job.value}>{job.label}</option>
              ))}
            </select>
          </div>
          <p className='text-center text-[#8766FF] mb-4'>Make sure everything is correct, you can’t change this information later</p>
          <div className='flex justify-center'>
            <Button id="create-account-button" text="Create Account" onClick={handleSubmit} />
          </div>
        </form>
      </Card>
      <p className='text-[#757981]'>By continuing, you are indicating that you agree to the <a href="#" className="text-purple-500">Privacy Policy</a> and <a href="#" className="text-purple-500">Terms</a>.</p>
      
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome!</h2>
            <p className="mb-4 text-center">We are glad to know that you are a {formData.jobTitle}. Here are your details:</p>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Job Title:</strong> {formData.jobTitle}</p>
            <div className="mt-4 flex justify-end">
              <Button id="popup__ok-button" text="Ok" onClick={() => setShowPopup(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bio;
