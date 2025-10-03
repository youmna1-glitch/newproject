'use client'; 

import React, { useMemo } from 'react';
import CartPage from '@/components/CartPage'; 
import MainNavbar from '@/components/MainNavbar'; 


import { useCartState, CartItem } from '@/hooks/useCartState'; 



const CartRoutePage: React.FC = () => {
    
    const { 
        cart, 
        cartCount, 
        removeFromCart, 
        clearCart, 
        updateQuantity 
    } = useCartState();

 
    const calculateTotal = (currentCart: CartItem[]): number => {
        if (!currentCart || currentCart.length === 0) {
            return 0;
        }
        return currentCart.reduce((total, item) => {
           
            const priceValue = parseFloat(String(item.price)) || 0; 
            return total + (priceValue * item.quantity);
        }, 0);
    };

    const totalPrice = useMemo(() => calculateTotal(cart), [cart]);

    return (
        <div className="font-sans min-h-screen flex flex-col bg-gray-50">
            {}
            <header>
                 {}
                 <MainNavbar totalItemCount={cartCount} /> 
            </header>

            <main className="flex-grow p-4 md:p-8 w-full max-w-5xl mx-auto">
                <CartPage
                    cart={cart}
                    totalPrice={totalPrice} 
                    totalItemCount={cartCount}
                    handleRemove={removeFromCart}
                    handleClearCart={clearCart}
                    handleUpdateQuantity={updateQuantity}
                />
            </main>
        </div>
    );
};

export default CartRoutePage;