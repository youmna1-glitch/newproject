'use client';

import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import BrandItem from '@/components/BrandItem';
import { useCartState } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';

interface Brand {
    id: number;
    name: string;
    imgUrl: string;
}

const brands: Brand[] = [
    { id: 1, name: 'Canon', imgUrl: '/images/brands/brand1.png' },
    { id: 2, name: 'Dell', imgUrl: '/images/brands/brand2.png' },
    { id: 3, name: 'Lenovo', imgUrl: '/images/brands/brand3.png' },
    { id: 4, name: 'Sony', imgUrl: '/images/brands/brand4.png' },
    { id: 5, name: 'Infinix', imgUrl: '/images/brands/brand5.png' },
    { id: 6, name: 'Realme', imgUrl: '/images/brands/brand6.png' },
    { id: 7, name: 'HONOR', imgUrl: '/images/brands/brand7.png' },
    { id: 8, name: 'Nokia', imgUrl: '/images/brands/brand8.png' },
    { id: 9, name: 'Canon', imgUrl: '/images/brands/brand9.png' },
    { id: 10, name: 'Dell', imgUrl: '/images/brands/brand10.png' },
    { id: 11, name: 'Lenovo', imgUrl: '/images/brands/brand11.png' },
    { id: 12, name: 'Sony', imgUrl: '/images/brands/brand12.png' },
    
    
];

const BrandsPage: React.FC = () => {
    const { cartCount } = useCartState();
    const { wishlistCount } = useWishlistState();

    return (
        <div style={mainContainerStyle}>
            <MainNavbar cartCount={cartCount} wishlistCount={wishlistCount} />
            
            <div style={contentSpacerStyle}> 
                <h1 style={headingStyle}>All Brands</h1>
                
                <div style={brandsGridStyle}>
                    {brands.map(brand => (
                        <BrandItem key={brand.id} brand={brand} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const mainContainerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
};

const contentSpacerStyle: React.CSSProperties = {
    padding: '1.5rem',
    maxWidth: '1200px',
    margin: 'auto',
    marginTop: '5rem',
};

const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#28a745',
    marginBottom: '2rem',
    textAlign: 'center',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #ccc',
};

const brandsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
    gap: '1.5rem',
   
};

export default BrandsPage;