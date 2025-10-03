'use client';

import Navbar from '@/components/Navbar';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: '#efededff', minHeight: '100vh', color: '#090909ff' }}>
      <Navbar />
      {children}
    </div>
  );
}