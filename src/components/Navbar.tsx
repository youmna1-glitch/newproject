'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <h1 style={logoTextStyle}>fresh cart</h1>
      </div>
      <ul style={linkListStyle}>
        <li>
          <Link href="/auth/register" style={linkStyle}>
            register
          </Link>
        </li>
        <li>
          <Link href="/auth/login" style={linkStyle}>
            log in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#b8b4b4ff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  borderBottom: '1px solid #ccc',
  color: '#444',
};

const logoContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const logoTextStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#28a745',
  margin: 0,
};

const linkListStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  margin: 0,
  padding: 0,
};

const linkStyle: React.CSSProperties = {
  color: '#444',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '600',
};

export default Navbar;