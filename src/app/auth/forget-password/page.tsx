'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 

const ForgetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const router = useRouter(); 

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        { email }
      );
      if (response.data.statusMsg === 'success') {
        alert('Verification code sent to your email. Please check your inbox.');
        setIsCodeSent(true);
        localStorage.setItem('resetPasswordEmail', email); 
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message || 'Error sending code.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };


  const handleVerifySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const trimmedResetCode = resetCode.trim();
    

    console.log('Code being sent to API:', trimmedResetCode);

    try {
      const response = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        { resetCode: trimmedResetCode } 
      );

      if (response.data.status === 'success') {
        alert('Verification successful! Redirecting to password reset page.');
        router.push('/auth/reset-password'); 
      } else {
            alert('Verification code is incorrect or expired.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert('Verification failed: ' + (error.response.data.message || 'Unknown error.'));
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  // ... (باقي الـ Styles والـ JSX)

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff', 
    color: '#000',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
  };

  return (
    <>
      <Head>
        <title>Fresh Cart - Forget Password</title>
      </Head>
      <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto', color: '#000' }}>
        {isCodeSent ? (
          <>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
              reset your account password
            </h1>
            <form onSubmit={handleVerifySubmit} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label htmlFor="code" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Verification Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value)}
                  required
                  style={inputStyle}
                />
              </div>
              <button type="submit" style={buttonStyle}>
                verify
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
              please enter your email
            </h1>
            <form onSubmit={handleEmailSubmit} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                />
              </div>
              <button type="submit" style={buttonStyle}>
                verify
              </button>
            </form>
          </>
        )}
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link href="/auth/login" style={{ color: '#28a745', textDecoration: 'none' }}>
            Back to login
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordPage;