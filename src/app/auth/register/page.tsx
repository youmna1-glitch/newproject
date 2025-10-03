'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    rePassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: '', rePassword: '' };

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    // Password matching validation
    if (formData.password !== formData.rePassword) {
      newErrors.rePassword = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (validate()) {
    try {
      const response = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/signup', 
        formData
      );

      console.log(response); 

      if (response.data.message === 'success') {
        alert('Registration successful!'); 
        
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  }
};

  return (
    <>
      <Head>
        <title>Fresh Cart - Register</title>
      </Head>
      <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
          register now
        </h1>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
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
            {errors.email && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</p>}
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
          <div>
            <label htmlFor="rePassword" style={{ display: 'block', marginBottom: '0.5rem' }}>Re-password :</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {errors.rePassword && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.rePassword}</p>}
          </div>
          <div>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone :</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Register now
          </button>
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>
  Already have an account?{' '}
  <Link href="/auth/login" style={{ color: '#28a745', textDecoration: 'none' }}>
    Login here
  </Link>
</p>
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
export default RegisterPage;