'use client'; 


import React from 'react';

import MainNavbar from '@/components/MainNavbar'; 
import ProductDetails from '@/components/ProductDetails';

import { useCartState, Product } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';


interface ProductDetailsWrapperProps {
    
    product: Product | undefined | null; 
    
    productIdString: string; 
}

const ProductDetailsWrapper: React.FC<ProductDetailsWrapperProps> = ({ product, productIdString }) => {


 const { cartCount, addToCart } = useCartState();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlistState();

    const isCurrentlyInWishlist = wishlist.some(item => item.id === product?.id);


    if (!product) {
        return (
            <>

                <MainNavbar cartCount={cartCount} wishlistCount={wishlist.length} />
                <div style={notFoundStyle}>
                    <h1 className="text-4xl font-bold mb-4" style={{color: '#dc3545'}}>خطأ 404</h1>
                    {/* ⬅️ تم إصلاح الخطأ هنا */}
                    <p className="text-xl">&quot;{productIdString}&quot; </p>
                </div>
            </>
        );
    }

    return (
        <div>
           
            <MainNavbar 
                cartCount={cartCount} 
                wishlistCount={wishlist.length} 
            /> 

            <ProductDetails
                product={product} 
                onAddToCart={addToCart}

                onAddToWishlist={
                    (p) => {
                        if (isCurrentlyInWishlist) {

                            removeFromWishlist(p.id); 
                        } else {
                            addToWishlist(p); 
                        }
                    }
                }
                isInWishlist={isCurrentlyInWishlist} 
            />
        </div>
    );
};


const notFoundStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '5rem',
    marginTop: '6rem',
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: '12px',
    margin: '6rem auto',
    maxWidth: '600px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
};

export default ProductDetailsWrapper;