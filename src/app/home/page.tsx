'use client';

import React from 'react'; 
import Head from 'next/head';
import MainNavbar from '@/components/MainNavbar';
import { useCartState } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState'; 


import ProductSection from '@/components/ProductSection'; 

const HomePage: React.FC = () => {
    
    const { cartCount } = useCartState();
    const { wishlistCount } = useWishlistState();
    
    return (
        <>
            <Head> 
                <title>Fresh Cart - Home</title>
            </Head>
            {}
            <MainNavbar cartCount={cartCount} wishlistCount={wishlistCount} />
            
            {}
            {}
            <ProductSection title="المنتجات المميزة" />
        </>
    );
};

export default HomePage;
