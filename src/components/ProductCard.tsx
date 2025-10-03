'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa'; 
import { useCartState, Product } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    
  
    const { addToCart } = useCartState();
    const { addToWishlist, isInWishlist } = useWishlistState(); 

    const handleAddToCartClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    };

    const handleAddToWishlistClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        addToWishlist(product);
    };

    return (
        <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
                style={cardStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={imageContainerStyle}>
                    <img src={product.imgUrl} alt={product.name} style={imageStyle} />
                    
                    {isHovered && (
                        <div style={heartIconStyle} onClick={handleAddToWishlistClick}>
                            <FaHeart 
                                style={{ 
                                    color: isInWishlist(product.id) ? 'red' : '#fff', 
                                    stroke: 'red', 
                                    strokeWidth: isInWishlist(product.id) ? 0 : 30 
                                }} 
                            />
                        </div>
                    )}
                </div>

                <div style={detailsStyle}>
                    <h3 style={titleStyle}>{product.name}</h3>
                    <p style={priceStyle}>{product.price} EGP</p>
                </div>
                {isHovered && (
                    <button
                        onClick={handleAddToCartClick}
                        style={isAdded ? addedButtonStyle : buttonStyle}
                    >
                        {isAdded ? 'Added!' : 'Add to Cart'}
                    </button>
                )}
            </div>
        </Link>
    );
};


const cardStyle: React.CSSProperties = {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: 'white',
    height: '100%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
};

Object.assign(cardStyle, {
    ':hover': {
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        transform: 'translateY(-3px)',
    }
});

const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '200px', 
    marginBottom: '1rem',
    overflow: 'hidden',
    borderRadius: '4px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px', 
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', 
};

const heartIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: '50%',
    padding: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 10,
    fontSize: '1.2rem',
    lineHeight: 0,
};

const detailsStyle: React.CSSProperties = {
    flexGrow: 1,
    width: '100%',
};

const titleStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0 0.5rem 0.5rem 0.5rem',
    color: 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

const priceStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#28a745',
    margin: '0 0 1rem 0',
};

const buttonStyle: React.CSSProperties = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: 'auto', 
    width: '100%',
    transition: 'background-color 0.3s',
};

const addedButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#ffc107', 
};


export default ProductCard;