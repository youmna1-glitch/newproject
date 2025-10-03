'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';



const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const router = useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      formData
    );

    if (response.data.message === 'success') {
    
      localStorage.setItem('userToken', response.data.token);

      
      router.push('/home');
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      alert(error.response.data.message);
    } else {
      alert('An error occurred. Please try again.');
    }
  }
};
  return (
    <>
      <Head>
        <title>Fresh Cart - Login</title>
      </Head>
      <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
          login now
        </h1>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <p style={{ textAlign: 'left', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/auth/forget-password" style={{ color: '#28a745', textDecoration: 'none' }}>
              forget your password ?
            </Link>
          </p>
          <button type="submit" style={buttonStyle}>
            login now
          </button>
        </form>
      </div>
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ddd',
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
export default LoginPage;