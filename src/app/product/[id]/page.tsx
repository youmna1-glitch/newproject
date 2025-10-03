
import React from 'react';

import ProductDetailsWrapper from '@/components/ProductDetailsWrapper';

import { Product } from '@/hooks/useCartState';


const ALL_PRODUCTS: (Product & {
    material: string;
    color: string;
    department: string;
})[] = [
  
  
    { id: 1, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item1.jpeg' },
    { id: 2, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item2.jpeg' },
    { id: 3, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item3.jpeg' },
    { id: 4, name: 'T-Shirt', price: 450, rating: 4.9, imgUrl: '/images/productCard/item4.jpeg' }, 
    { id: 5, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item5.jpeg' },
    { id: 6, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item6.jpeg' },
    { id: 7, name: 'Dress', price: 450, rating: 4.9, imgUrl: '/images/productCard/item7.jpeg' },
    { id: 8, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item8.jpeg' },
    { id: 9, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item9.jpeg' },
    { id: 10, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item10.jpeg' },
    { id: 11, name: 'Mouse', price: 450, rating: 4.9, imgUrl: '/images/productCard/item11.jpeg' },
    { id: 12, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item12.jpeg' },
    { id: 13, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item13.jpeg' },
    { id: 14, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item14.jpeg' },
    { id: 15, name: 'Keyboard', price: 450, rating: 4.9, imgUrl: '/images/productCard/item15.jpeg' },
    { id: 16, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item16.jpeg' },
    { id: 17, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item17.jpeg' },
    { id: 18, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item18.jpeg' },
    { id: 19, name: 'Laptop Bag', price: 450, rating: 4.9, imgUrl: '/images/productCard/item19.jpeg' },
    { id: 20, name: 'Tablet', price: 450, rating: 4.9, imgUrl: '/images/productCard/item20.jpeg' },
];

interface ProductPageProps {
    
    params: {
        id: string; 
    };
}

const ProductPage = ({ params }: ProductPageProps) => {
    
   
    const productIdString = Array.isArray(params.id) ? params.id[0] : params.id;
    

    const productId = parseInt(productIdString);
    
   
    const validProductId = !isNaN(productId) ? productId : 0; 

 
    const product = ALL_PRODUCTS.find(p => p.id === validProductId);

    return (
        <ProductDetailsWrapper 
            product={product as Product} 
            productIdString={productIdString}
        />
    );
};

export default ProductPage;
