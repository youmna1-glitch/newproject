'use client';

import React, { useState, useEffect } from 'react';
import CategoryItem from '@/components/CategoryItem';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/hooks/useCartState'; 

const products: Product[] = [
    { id: 1, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item1.jpeg', quantity: 1 },
    { id: 2, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item2.jpeg', quantity: 1 },
    { id: 3, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item3.jpeg', quantity: 1 },
    { id: 4, name: 'T-Shirt', price: 450, rating: 4.9, imgUrl: '/images/productCard/item4.jpeg', quantity: 1 }, 
    { id: 5, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item5.jpeg', quantity: 1 },
    { id: 6, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item6.jpeg', quantity: 1 },
    { id: 7, name: 'Dress', price: 450, rating: 4.9, imgUrl: '/images/productCard/item7.jpeg', quantity: 1 },
    { id: 8, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item8.jpeg', quantity: 1 },
    { id: 9, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item9.jpeg', quantity: 1 },
    { id: 10, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item10.jpeg', quantity: 1 },
    { id: 11, name: 'Mouse', price: 450, rating: 4.9, imgUrl: '/images/productCard/item11.jpeg', quantity: 1 },
    { id: 12, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item12.jpeg', quantity: 1 },
    { id: 13, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item13.jpeg', quantity: 1 },
    { id: 14, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item14.jpeg', quantity: 1 },
    { id: 15, name: 'Keyboard', price: 450, rating: 4.9, imgUrl: '/images/productCard/item15.jpeg', quantity: 1 },
    { id: 16, name: 'Wireless Headphones', price: 250, rating: 4.8, imgUrl: '/images/productCard/item16.jpeg', quantity: 1 },
    { id: 17, name: 'Smart Watch', price: 300, rating: 4.5, imgUrl: '/images/productCard/item17.jpeg', quantity: 1 },
    { id: 18, name: 'Gaming Console', price: 450, rating: 4.9, imgUrl: '/images/productCard/item18.jpeg', quantity: 1 },
    { id: 19, name: 'Laptop Bag', price: 450, rating: 4.9, imgUrl: '/images/productCard/item19.jpeg', quantity: 1 },
    { id: 20, name: 'Tablet', price: 450, rating: 4.9, imgUrl: '/images/productCard/item20.jpeg', quantity: 1 },
];


const categories = [
    { id: 1, name: 'Music', imgUrl: '/images/music.jpeg' },
    { id: 2, name: 'Men\'s Fashion', imgUrl: '/images/Men.jpeg' },
    { id: 3, name: 'Women\'s Fashion', imgUrl: '/images/Women.jpeg' },
    { id: 4, name: 'Baby & Toys', imgUrl: '/images/Baby & Toys.png' },
    { id: 5, name: 'SuperMarket', imgUrl: '/images/SuperMarket.png' },
    { id: 6, name: 'Home', imgUrl: '/images/Home.png' },
];

interface ProductSectionProps {
    title: string;
    showCategories?: boolean; 
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, showCategories = true }) => { 
    const [searchTerm, setSearchTerm] = useState('');
    
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredProducts(products);
            return;
        }

        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div style={containerStyle}>
            
            {showCategories && (
                <div style={categoriesContainerStyle}>
                    {categories.map((cat) => (
                        <CategoryItem key={cat.id} name={cat.name} imgUrl={cat.imgUrl} />
                    ))}
                </div>
            )}

            <div style={searchContainerStyle}>
                <input
                    type="text"
                    placeholder="search..."
                    style={searchInputStyle}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <h2 style={{ color: 'black', margin: '1rem 0', paddingBottom: '0.5rem', borderBottom: '1px solid #eee' }}>
                {title} ({filteredProducts.length})
            </h2>
            
            <div style={productsContainerStyle}>
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                       
                    />
                ))}
            </div>
            
            {filteredProducts.length === 0 && searchTerm && (
                <div style={{ textAlign: 'center', padding: '50px', color: '#777', fontSize: '1.2rem' }}>&quot;{searchTerm}&quot;
                </div>
            )}
        </div>
    );
};


const containerStyle: React.CSSProperties = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: 'auto',
};

const categoriesContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '1rem',
    marginTop: '2rem',
    color:'black',
    overflowX: 'auto',
    paddingBottom: '10px',
};

const searchContainerStyle: React.CSSProperties = {
    marginTop: '3rem',
    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'center',
};

const searchInputStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    padding: '0.75rem 1rem',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    textAlign: 'center',
    outline: 'none',
    color:'black',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
};

const productsContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '2rem',
    color:'black',
};

export default ProductSection;