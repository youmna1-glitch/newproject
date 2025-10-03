'use client';

import React from 'react';
import Link from 'next/link';


interface Category {
    id: number;
    name: string;
    imgUrl: string;
}

interface CategoryPageItemProps {
    category: Category;
}

const CategoryPageItem: React.FC<CategoryPageItemProps> = ({ category }) => { 
    
    if (!category) {
        
        return null;
    }

    
    return (
        <Link href={`/products?category=${category.id}`} style={linkStyle}>
            <div style={cardStyle}>
                {}
                <div style={imageContainerStyle}>
                    <img src={category.imgUrl} 
                        alt={category.name} 
                        style={imageStyle}
                        onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null; 
                            (e.target as HTMLImageElement).src = 'https://placehold.co/400x250/ccc/333?text=Image+Missing';
                        }}
                    />
                </div>
                
                {}
                <h3 style={titleStyle}>{category.name}</h3>
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
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
    border: '2px solid #28a74550',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    cursor: 'pointer',
    position: 'relative',
  
};

const imageContainerStyle: React.CSSProperties = {
    width: '100%',
    paddingTop: '66.66%', 
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid #eee',
};

const imageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const titleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    padding: '1rem',
    margin: 0,
};

export default CategoryPageItem;
