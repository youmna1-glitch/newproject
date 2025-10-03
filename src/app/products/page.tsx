'use client';

import React from 'react';
import Head from 'next/head';
import MainNavbar from '@/components/MainNavbar';
import { useCartState } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';

import ProductSection from '@/components/ProductSection'; 

const ProductsPage: React.FC = () => {

    const { cartCount } = useCartState();
    const { wishlistCount } = useWishlistState();

    return (
        <>
            <Head>
                <title>Fresh Cart - All Products</title>
            </Head>
            {}
            <MainNavbar cartCount={cartCount} wishlistCount={0} /> 
            
            {}
            <ProductSection 
                title="All products available " 
                showCategories={false} 
            />
        </>
    );
};

export default ProductsPage;
