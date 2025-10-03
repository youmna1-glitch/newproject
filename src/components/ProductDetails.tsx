import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number | string; 
    rating: number;
    imgUrl: string;
    material?: string;
    color?: string;
    department?: string;
    
}

interface ProductDetailsProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    onAddToWishlist: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart, onAddToWishlist }) => {
    
    const [isWishlisted, setIsWishlisted] = useState(false);

    if (!product) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.5rem', color: '#888' }}>
                Loading product details... or product not found.
            </div>
        );
    }

    const formattedPrice = (): string => {
        const priceString = String(product.price);
        const priceValue = parseFloat(priceString.replace(/,/g, ''));
        return isNaN(priceValue) ? '0.00' : priceValue.toFixed(2);
    };

    const renderRating = (rating: number) => {
        const fullStars = '★'.repeat(Math.floor(rating));
        const emptyStars = '☆'.repeat(5 - Math.floor(rating));
        return (
            <span style={{ fontSize: '1.5rem' }} aria-label={`Rating: ${rating} out of 5`}>
                {fullStars}
                <span style={{ color: '#ccc' }}>{emptyStars}</span>
            </span>
        );
    };

    const handleAddToCart = () => {
        onAddToCart(product);
        console.log(`Product added to cart: ${product.name}`);
    };

    
    const handleAddToWishlist = () => {
       
        const newState = !isWishlisted;
        setIsWishlisted(newState);

      
        onAddToWishlist(product);
        
        console.log(`Product ${newState ? 'added to' : 'removed from'} wishlist: ${product.name}`);
    };

  
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        direction: 'ltr',
        gap: '2rem',
        flexWrap: 'wrap',
    };

    const imageSectionStyle: React.CSSProperties = {
        flex: '1 1 300px',
        maxWidth: '400px',
        minWidth: '300px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
    };

    const mainImageContainerStyle: React.CSSProperties = {
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const detailsSectionStyle: React.CSSProperties = {
        flex: '2 1 400px',
        padding: '1rem',
    };

    const nameStyle: React.CSSProperties = {
        fontSize: '2.2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
        borderBottom: '2px solid #eee',
        paddingBottom: '0.5rem',
    };

    const detailTextStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.8',
        display: 'block',
        marginBottom: '0.5rem',
    };

    const detailLabelStyle: React.CSSProperties = {
        fontWeight: 'bold',
        color: '#1a73e8',
        marginRight: '0.5rem',
    };

    const detailSeparatorStyle: React.CSSProperties = {
        marginLeft: '1rem',
        color: '#ccc',
    };

    const priceStyle: React.CSSProperties = {
        fontSize: '2rem',
        fontWeight: 'extrabold',
        color: '#1a73e8',
        margin: '1.5rem 0',
    };

    const actionContainerStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        marginTop: '2rem',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '0.75rem 2rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#1a73e8',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.1s',
        boxShadow: '0 4px 10px rgba(26, 115, 232, 0.3)',
    };
    
    
    const wishlistButtonStyle: React.CSSProperties = {
        ...buttonStyle,
        
        backgroundColor: isWishlisted ? '#ff4d4d' : '#fff',
        
        border: `2px solid ${isWishlisted ? '#ff4d4d' : '#ccc'}`,
        boxShadow: '0 4px 10px rgba(255, 77, 77, 0.2)',
        width: '50px',
        height: '50px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };


    return (
        <div style={containerStyle}>
            <div style={imageSectionStyle}>
                <div style={mainImageContainerStyle}>
                    <img
                        src={product.imgUrl} 
                        alt={product.name}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        
                        onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null; 
                            (e.target as HTMLImageElement).src = `https://placehold.co/400x400/3b82f6/ffffff?text=${encodeURIComponent(product.name)}`;
                        }}
                    />
                </div>
              
                <div style={{ textAlign: 'center', padding: '10px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a73e8', margin: '0 5px' }}></span>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ccc', margin: '0 5px' }}></span>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ccc', margin: '0 5px' }}></span>
                </div>
            </div>

            {}
            <div style={detailsSectionStyle}>
                
                {}
                <h1 style={nameStyle}>{product.name}</h1>

                {}
                <p style={{ ...detailTextStyle, marginTop: '1rem' }}>
                    {}
                    <span style={detailLabelStyle}>Material:</span> 
                    {product.material || 'N/A'}
                    <span style={detailSeparatorStyle}>|</span>
                    
                    {}
                    <span style={detailLabelStyle}>Color:</span> 
                    {product.color || 'N/A'}
                    <span style={detailSeparatorStyle}>|</span>
                    
                    {}
                    <span style={detailLabelStyle}>Department:</span> 
                    {product.department || 'General'}
                </p>

                {}
                <p style={priceStyle}>
                    {formattedPrice()} EGP
                </p>

               
                <div style={actionContainerStyle}>
                   
                    <button 
                        onClick={handleAddToCart} 
                        style={buttonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0c4d9b')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1a73e8')}
                    >
                        + Add to Cart
                    </button>
                   
                    <button 
                        onClick={handleAddToWishlist} 
                        style={wishlistButtonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                        
                        <span style={{ fontSize: '1.5rem', color: isWishlisted ? '#fff' : '#ff4d4d' }}>
                            {isWishlisted ? '❤️' : '🤍'}
                        </span>
                    </button>
                    
                    
                    <div style={{ margin: '0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffc107' }}>
                        {renderRating(product.rating)}
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>{product.rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
