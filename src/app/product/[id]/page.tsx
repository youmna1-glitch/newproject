'use client';

import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import ProductDetails from '@/components/ProductDetails';
import { useCartState, Product } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';

// يجب أن تتطابق هذه الواجهة مع Product، لكنها قد تكون ممتدة بخصائص إضافية
interface ExtendedProduct extends Product {
    material: string;
    color: string;
    department: string;
}

// تم إضافة خاصية quantity: 1 إلى كل المنتجات لإزالة خطأ النوع
const products: ExtendedProduct[] = [
    { id: 1, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item1.jpeg', quantity: 1, material: 'Plastic', color: 'Black', department: 'Electronics' },
    { id: 2, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item2.jpeg', quantity: 1, material: 'Metal', color: 'Silver', department: 'Electronics' },
    { id: 3, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item3.jpeg', quantity: 1, material: 'Composite', color: 'White', department: 'Gaming' },
    { id: 4, name: 'T-Shirt', price: 450, rating: 4.9, imgUrl: '/images/productCard/item4.jpeg', quantity: 1, material: 'Cotton', color: 'Grey', department: "Men's Fashion" },
    { id: 5, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item5.jpeg', quantity: 1, material: 'Rubber', color: 'Blue', department: 'Electronics' },
    { id: 6, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item6.jpeg', quantity: 1, material: 'Plastic', color: 'Black', department: 'Gaming' },
    { id: 7, name: 'Dress', price: 450, rating: 4.9, imgUrl: '/images/productCard/item7.jpeg', quantity: 1, material: 'Silk', color: 'Red', department: "Women's Fashion" },
    { id: 8, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item8.jpeg', quantity: 1, material: 'Leather', color: 'Brown', department: 'Electronics' },
    { id: 9, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item9.jpeg', quantity: 1, material: 'Aluminium', color: 'Gold', department: 'Electronics' },
    { id: 10, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item10.jpeg', quantity: 1, material: 'Plastic', color: 'Green', department: 'Gaming' },
    { id: 11, name: 'Mouse', price: 450, rating: 4.9, imgUrl: '/images/productCard/item11.jpeg', quantity: 1, material: 'Plastic', color: 'White', department: 'Accessories' },
    { id: 12, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item12.jpeg', quantity: 1, material: 'Plastic', color: 'Pink', department: 'Electronics' },
    { id: 13, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item13.jpeg', quantity: 1, material: 'Metal', color: 'Black', department: 'Electronics' },
    { id: 14, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item14.jpeg', quantity: 1, material: 'Composite', color: 'Red', department: 'Gaming' },
    { id: 15, name: 'Keyboard', price: 450, rating: 4.9, imgUrl: '/images/productCard/item15.jpeg', quantity: 1, material: 'Plastic', color: 'Silver', department: 'Accessories' },
    { id: 16, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item16.jpeg', quantity: 1, material: 'Fabric', color: 'Cyan', department: 'Electronics' },
    { id: 17, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item17.jpeg', quantity: 1, material: 'Silicone', color: 'Orange', department: 'Electronics' },
    { id: 18, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item18.jpeg', quantity: 1, material: 'Metal', color: 'Gold', department: 'Gaming' },
    { id: 19, name: 'Laptop Bag', price: 450, rating: 4.9, imgUrl: '/images/productCard/item19.jpeg', quantity: 1, material: 'Nylon', color: 'Gray', department: 'Accessories' },
    { id: 20, name: 'Tablet', price: 450, rating: 4.9, imgUrl: '/images/productCard/item20.jpeg', quantity: 1, material: 'Aluminium', color: 'Black', department: 'Electronics' },
];

interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const productId = parseInt(params.id, 10);
    const product = products.find(p => p.id === productId);

    const { cartCount, addToCart } = useCartState();
    const { wishlistCount, addToWishlist, removeFromWishlist, isInWishlist } = useWishlistState();

    if (!product) {
        return (
            <div className="text-center p-8">
                <MainNavbar cartCount={cartCount} wishlistCount={wishlistCount} />
                <h1 className="text-4xl font-bold mt-20 text-red-600">Product Not Found!</h1>
                <p className="text-gray-600 mt-4">The product ID {params.id} does not exist.</p>
            </div>
        );
    }

    return (
        <div className="font-sans min-h-screen flex flex-col bg-gray-50">
            <MainNavbar cartCount={cartCount} wishlistCount={wishlistCount} />
            
            <main className="flex-grow p-4 md:p-8 w-full max-w-6xl mx-auto">
                <ProductDetails
                    product={product}
                    onAddToCart={() => addToCart(product)}
                    onAddToWishlist={() => addToWishlist(product)}
                   
                    onRemoveFromWishlist={() => removeFromWishlist(product.id)}
                    isInWishlist={isInWishlist(product.id)}
                />
            </main>
        </div>
    );
};

export default ProductPage;