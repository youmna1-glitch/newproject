'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

export interface Product { 
    id: number;
    name: string;
    price: number; 
    rating: number;
    imgUrl: string; 
    quantity: number; 
}

export interface CartItem extends Product {
    quantity: number;
}

interface SavedCartItem {
    quantity?: any;
    price?: any;
    id: number;
    name: string;
    rating: number;
    imgUrl: string;
}


export const useCartState = () => {

    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const savedCart = localStorage.getItem('cart');
                if (savedCart) {
                   
                    const parsedCart: CartItem[] = JSON.parse(savedCart).map((item: SavedCartItem) => ({
                        ...item,
                       
                        quantity: typeof item.quantity === 'number' ? item.quantity : 1,
                        price: typeof item.price === 'string' ? parseFloat(item.price) : item.price,
                    }));
                    setCart(parsedCart);
                }
            } catch (e) {
                console.error("Failed to load cart from localStorage", e);
                
                setCart([]);
            }
        }
    }, []);

    
    const saveCart = useCallback((currentCart: CartItem[]) => {
        setCart(currentCart);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(currentCart));
        }
    }, []);


    
    const addToCart = useCallback((product: Product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id);
            let updatedCart: CartItem[];

            if (existingItem) {
                
                updatedCart = currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
         
                const newItem: CartItem = {
                    ...product,
                    price: typeof product.price === 'string' ? parseFloat(product.price) : product.price,
                    quantity: 1
                };
                updatedCart = [...currentCart, newItem];
            }

            saveCart(updatedCart);
            return updatedCart;
        });
    }, [saveCart]);


  
    const removeFromCart = useCallback((productId: number) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        saveCart(updatedCart);
    }, [cart, saveCart]);


   
    const updateQuantity = useCallback((productId: number, newQuantity: number) => {
        setCart(currentCart => {
            if (newQuantity <= 0) {
                
                const updatedCart = currentCart.filter(item => item.id !== productId);
                saveCart(updatedCart);
                return updatedCart;
            }

            const updatedCart = currentCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            );

            saveCart(updatedCart);
            return updatedCart;
        });
    }, [saveCart]);


 
    const clearCart = useCallback(() => {
        saveCart([]);
    }, [saveCart]);

    
    const cartCount = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    return {
        cart,
       
        cartCount: cartCount,
        addToCart,
        removeFromCart,
        updateQuantity, 
        clearCart,
    };
};