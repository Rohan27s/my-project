import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Utils/Button';
import Card from '../Components/Utils/Card'; 

const CompanyVerification = () => {
    const navigate = useNavigate();

    const handleYes = () => {
        navigate('/bio');
    };

    const handleNo = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card showBackButton={true}>
                <h2 className="text-2xl font-bold mb-6 text-center">Is this your company?</h2>
                <div className="flex flex-col items-center mb-4">
                    <span className="w-24 h-24 mb-4 object-cover rounded-full shadow-custom p-2">
                        <img src="/company-logo.png" alt="Company Logo" className="w-full h-full object-contain" />
                    </span>
                    <p className="text-xl font-semibold">White Code Labs</p>
                </div>
                <div className='flex flex-col mt-8'>
                    <Button id="yes-button" text="Yes" onClick={handleYes} />
                    <Button id="no-button" text="No" onClick={handleNo} />
                </div>
            </Card>
        </div>
    );
};

export default CompanyVerification;
