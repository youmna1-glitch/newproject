'use client';

import React from 'react';
import MainNavbar from '@/components/MainNavbar';

import CategoryPageItem from '@/components/CategoryPageItem'; 

import { useCartState } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';


interface Category {
    id: number;
    name: string;
    imgUrl: string; 
}


const categories: Category[] = [
    { id: 1, name: 'Music Instruments', imgUrl: '/images/music.jpeg' },
    { id: 2, name: "Men's Fashion", imgUrl: '/images/Men.jpeg' },
    { id: 3, name: "Women's Fashion", imgUrl: '/images/Women.jpeg' },
    { id: 4, name: "Baby Care", imgUrl:  '/images/Baby & Toys.png' },
    { id: 5, name: "Supermarket Essentials", imgUrl: '/images/SuperMarket.png' },
    { id: 6, name: "Home Appliances", imgUrl: '/images/Home.png' },
];

const CategoriesPage: React.FC = () => {
 
    const { cartCount } = useCartState();
    const { wishlistCount } = useWishlistState();

    return (
        <div style={mainContainerStyle}>
            {}
            <MainNavbar cartCount={cartCount} wishlistCount={wishlistCount} />
            
            {}
            <div style={contentSpacerStyle}> 
                
                
                {}
                <div style={categoriesGridStyle}>
                    {categories.map(category => (
                        <CategoryPageItem key={category.id} category={category} />
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

const categoriesGridStyle: React.CSSProperties = {
    display: 'grid',
    
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem', 
};


export default CategoriesPage;
