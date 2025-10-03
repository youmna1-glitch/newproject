'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHeart } from 'react-icons/fa'; 

interface MainNavbarProps {
    cartCount: number; 
    wishlistCount: number; 
}


const MainNavbar: React.FC<MainNavbarProps> = ({ cartCount, wishlistCount }) => {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/auth/login');
    };

    return (
        <nav style={navStyle}>
            <div style={logoContainerStyle}>
                <h1 style={logoTextStyle}>fresh cart</h1>
            </div>
            <ul style={linkListStyle}>
                <li>
                    <Link href="/home" style={linkStyle}>Home</Link>
                </li>
                <li>
                    <Link href="/products" style={linkStyle}>Products</Link>
                </li>
                <li>
                    <Link href="/categories" style={linkStyle}>categories</Link>
                </li>
                <li>
                    <Link href="/brands" style={linkStyle}>brands</Link>
                </li>
                <li>
                    <Link href="/cart" style={linkStyle}>Cart</Link>
                </li>
            </ul>
            <div style={iconsContainerStyle}>
                
                <div style={cartIconContainerStyle}> 
                    <Link href="/wishlist">
                        <FaHeart style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#dc3545' }} />
                    </Link>
                    {wishlistCount > 0 && <span style={cartCountStyle}>{wishlistCount}</span>}
                </div>

                <div style={cartIconContainerStyle}>
                    <Link href="/cart">
                        <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🛒</span>
                    </Link>
                    {cartCount > 0 && <span style={cartCountStyle}>{cartCount}</span>}
                </div>
                
                <button onClick={handleLogout} style={buttonStyle}>log out</button>
            </div>
        </nav>
    );
};


const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderBottom: '1px solid #ccc',
    position: 'fixed', 
    top: 0,
    width: '100%', 
    zIndex: 1000, 
} as React.CSSProperties; // يجب أن يتم الإغلاق هنا

const logoContainerStyle: React.CSSProperties = {
    flexGrow: 1,
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
    gap: '1.5rem', 
    margin: 0,
    padding: 0,
    marginRight:'20%', 
};

const linkStyle: React.CSSProperties = {
    color: '#6d6c6c94',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
};

const iconsContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
};

const cartIconContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex', 
    alignItems: 'center',
};

const cartCountStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    minWidth: '20px', 
    textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: '600',
};

export default MainNavbar;