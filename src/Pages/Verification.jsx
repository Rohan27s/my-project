import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Utils/Button';
import Card from '../Components/Utils/Card'; 

const Verification = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 3) {
        inputRefs.current[index + 1].focus();
      } else {
        document.getElementById('continue-button').focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/company-verification'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card showBackButton={true}>
        <h2 className="text-2xl font-bold mb-6 text-center">Verification</h2>
        <p className="mb-4 text-center text-gray-600">
          A verification code has been sent out to your email. Please check for the 4 digit verification code and enter it here.
        </p>
        <form  className="text-center">
          <div className="flex justify-center mb-4">
            {code.map((num, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 border border-gray-300 rounded text-center mx-1 text-2xl"
              />
            ))}
          </div>
          <p className="mb-4 text-center text-gray-600">
            Didn't receive the code? <a href="#" className="text-purple-500">Resend</a>
          </p>
          <Button id="continue-button" text="Continue" onClick={handleSubmit} />
        </form>
      </Card>
    </div>
  );
};

export default Verification;
