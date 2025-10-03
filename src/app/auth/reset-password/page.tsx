'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState(''); 
  const router = useRouter();

  useEffect(() => {

    if (typeof window !== 'undefined') { 
        const storedEmail = localStorage.getItem('resetPasswordEmail');
        if (storedEmail) {
          setEmail(storedEmail);
        } else {

          alert("Email address not found. Please start the password reset process from the 'Forget Password' page.");
          router.replace('/auth/forget-password');
        }
    }
  }, [router]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
        alert("Email address not available for reset. Please restart the process.");
        return;
    }

    if (password !== rePassword) {
      alert("Passwords don't match. Please try again.");
      return;
    }

    try {
     
      const response = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
        { email: email, newPassword: password } 
      );

      if (response.data.token) {
        alert('Password changed successfully! You can now log in.');
      
        localStorage.removeItem('resetPasswordEmail');
        router.push('/auth/login');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };
    

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
        <title>Fresh Cart - Reset Password</title>
      </Head>
      <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto', color: '#000' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
          Reset your password
        </h1>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label htmlFor="newPassword" style={{ display: 'block', marginBottom: '0.5rem' }}>
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="rePassword" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Re-Password
            </label>
            <input
              type="password"
              id="rePassword"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordPage;