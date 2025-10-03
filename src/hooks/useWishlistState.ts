'use client';

import { useState, useEffect, useCallback } from 'react';

import { Product } from './useCartState'; 

export const useWishlistState = () => {
    const [wishlist, setWishlist] = useState<Product[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedWishlist = localStorage.getItem('wishlist');
            if (savedWishlist) {
                try {
                    setWishlist(JSON.parse(savedWishlist));
                } catch (e) {
                    console.error("Error parsing wishlist from localStorage", e);
                    setWishlist([]);
                }
            }
        }
    }, []);

   
    const isInWishlist = useCallback((productId: number): boolean => {
        return wishlist.some(item => item.id === productId);
    }, [wishlist]);


    const addToWishlist = (product: Product) => {
     
        if (!isInWishlist(product.id)) {
            const updatedWishlist = [...wishlist, product];
            setWishlist(updatedWishlist);
            if (typeof window !== 'undefined') {
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            }
        }
    };

    const removeFromWishlist = (productId: number) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        if (typeof window !== 'undefined') {
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        }
    };

   
    return {
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist, 
    };
};
