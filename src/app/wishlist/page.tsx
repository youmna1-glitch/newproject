'use client';

import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { useCartState } from '@/hooks/useCartState';
import { useWishlistState } from '@/hooks/useWishlistState';


const WishlistPage: React.FC = () => {
    const { wishlist, removeFromWishlist, wishlistCount } = useWishlistState();
   const { addToCart, cartCount } = useCartState(); 

    const handleMoveToCart = (product: Product) => {
        addToCart(product);
    
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
            {/* **تم تمرير wishlistCount إلى Navbar** */}
            <MainNavbar cartCount={cartCount} wishlistCount={wishlistCount} />
            <div style={pageContainerStyle}>
                <h1 style={headingStyle}>My Wish List ({wishlistCount})</h1>
                {wishlist.length > 0 ? (
                    <div style={itemsContainerStyle}>
                        {wishlist.map(item => (
                            <div key={item.id} style={itemStyle}>
                                {/* صورة المنتج مع معالجة خطأ التحميل */}
                                <img 
                                    src={item.imgUrl || item.imageUrl} // تم تعديله للتعامل مع المفاتيح المختلفة
                                    alt={item.name} 
                                    style={itemImageStyle} 
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).onerror = null; 
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image';
                                    }}
                                />
                                <div style={itemDetailsStyle}>
                                    <h3 style={itemTitleStyle}>{item.name}</h3>
                                    <p style={itemPriceStyle}>{item.price} EGP</p>
                                    <span onClick={() => removeFromWishlist(item.id)} style={removeTextStyle}>
                                        Remove
                                    </span>
                                </div>
                                <button onClick={() => handleMoveToCart(item)} style={addButtonToCartStyle}>
                                    add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={emptyWishlistStyle}>Your Wish List is empty.</div>
                )}
            </div>
        </div>
    );
};

// **الـ Styles الجديدة والمحسّنة**
const pageContainerStyle: React.CSSProperties = {
    padding: '2rem',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)', // ظل أكبر وأجمل
    marginTop: '2rem',
    marginBottom: '2rem',
    color: '#333', // لون نص داكن لتباين أفضل
};

const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #28a74550', // لون أخضر خفيف للخط الفاصل
    paddingBottom: '0.8rem',
    color: '#333',
};

const itemsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem', // تقليل الفجوة لتبدو كقائمة واحدة
};

const itemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1rem 0',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    borderRadius: '8px',
};

const itemImageStyle: React.CSSProperties = {
    width: '80px', // حجم أصغر قليلاً
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #ddd',
};

const itemDetailsStyle: React.CSSProperties = {
    flexGrow: 1,
    paddingLeft: '1rem',
};

const itemTitleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
};

const itemPriceStyle: React.CSSProperties = {
    color: '#28a745', // سعر باللون الأخضر
    fontWeight: 'bold',
    margin: '0.5rem 0 0',
};

const removeTextStyle: React.CSSProperties = {
    color: '#dc3545',
    cursor: 'pointer',
    fontSize: '0.9rem',
    textDecoration: 'underline', // إضافة خط تحته لجعله يبدو كزر
    display: 'block', // ليكون على سطر جديد
    marginTop: '0.5rem',
    transition: 'color 0.2s',
};

const addButtonToCartStyle: React.CSSProperties = {
    padding: '0.75rem 2rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '25px', // حواف مستديرة بالكامل
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s, transform 0.1s',
    boxShadow: '0 4px 6px rgba(40, 167, 69, 0.4)', // ظل أخضر جميل
    // إضافة خاصية hover لزر Add To Cart (يجب استخدام مكتبة CSS-in-JS أو Tailwind للـ Hover الفعلي)
};

const emptyWishlistStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#999',
    marginTop: '4rem',
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
};

export default WishlistPage;
