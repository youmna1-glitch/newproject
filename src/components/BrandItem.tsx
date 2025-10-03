'use client';

import React from 'react';
import Link from 'next/link';

interface Brand {
    id: number;
    name: string;
    imgUrl: string;
}

interface BrandItemProps {
    brand: Brand;
}

const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
    return (
        <Link href={`/products?brand=${brand.id}`} style={linkStyle}>
            <div style={cardStyle}>
                <div style={imageContainerStyle}>
                    <img 
                        src={brand.imgUrl} 
                        alt={brand.name} 
                        style={imageStyle}
                        onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null; 
                            (e.target as HTMLImageElement).src = 'https://placehold.co/150x80/ccc/333?text=Logo';
                        }}
                    />
                </div>
                <h3 style={nameStyle}>{brand.name}</h3>
            </div>
        </Link>
    );
};

const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
};

const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '1rem',
    display: 'flex',
    width:'100%',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
};

const imageContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const imageStyle: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
};

const nameStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    margin: '1rem 0 0',
};

export default BrandItem;