'use client';

import React from 'react';

import MainNavbar from '@/components/MainNavbar'; 

const CheckoutPage: React.FC = () => {
    
    
    const handlePayNow = () => {
       
 
        
        alert("Preparing payment... (In a real app, a secure Stripe Checkout link would open here.)");
      
    };

    return (
        <div className="min-h-screen flex flex-col"> 
            
            <MainNavbar /> 

            <div 
                className="flex-grow flex items-center justify-center p-4" 
                style={{ backgroundColor: '#f0f4f8' }}
            >
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-xl">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b pb-4">
                        Checkout Details
                    </h1>
                    
                    {}
                    <div className="mb-6">
                        <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">Details (e.g., Full Address)</label>
                        <input
                            type="text"
                            id="details"
                            placeholder="Enter your full address and delivery notes"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                        />
                    </div>

                    {}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                        />
                    </div>

                    {}
                    <div className="mb-8">
                        <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">City</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter your city"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                        />
                    </div>

                    {}
                    <button
                        onClick={handlePayNow}
                        className="w-full py-3 rounded-lg text-white font-bold transition duration-300 shadow-md"
                        style={{ backgroundColor: '#007bff', border: '1px solid #007bff' }} 
                    >
                        Pay now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;