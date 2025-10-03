import React from 'react';
import Link from 'next/link'; 

export interface CartItem {
    id: number;
    name: string;
    price: string | number; 
    imgUrl: string; 
    rating?: number;
    quantity: number; 
}

interface CartPageProps {
    cart: CartItem[];
    totalPrice: number; 
    totalItemCount: number;
    handleRemove: (id: number) => void;
    handleUpdateQuantity: (id: number, newQuantity: number) => void;
    handleClearCart: () => void;
}

const getNumericPrice = (price: string | number): number => {
    if (typeof price === 'number') return price;
    const priceString = String(price).replace(/[^0-9.]/g, ''); 
    return parseFloat(priceString) || 0;
};


const CartPage: React.FC<CartPageProps> = (props) => {
    
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-xl rounded-xl" dir="ltr">
            
            {}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h1 className="text-2xl font-bold text-gray-800">Cart Shop</h1>
                
                {}
                <Link href="/checkout" passHref>
                    <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        check out
                    </button>
                </Link>
            </div>

            {}
            <div className="flex justify-between items-center text-lg mb-8 p-3 bg-gray-50 rounded-lg">
                <span className="font-bold text-gray-700">
                    total price: <span className="text-red-600">{props.totalPrice.toFixed(0)} EGP</span>
                </span>
                <span className="font-bold text-gray-700">
                    total number of items: <span className="text-green-600">{props.totalItemCount}</span>
                </span>
            </div>

            
            {props.cart.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-xl border border-dashed rounded-lg">
                    Your cart is empty. Start shopping now!
                </div>
            ) : (
                <>
                    {}
                    <div className="space-y-4">
                        {props.cart.map((item) => {
                            const priceValue = getNumericPrice(item.price);
                            
                            return (
                            <div key={item.id} className="flex items-center border rounded-xl p-4 transition-shadow hover:shadow-lg bg-white">
                                <img 
                                    src={item.imgUrl || "https://placehold.co/80x80/f0f4f8/333?text=Prod"} 
                                    alt={item.name} 
                                    className="w-20 h-20 object-cover rounded-md mr-4 shadow-sm"
                                />
                                <div className="flex-grow flex flex-col justify-center">
                                    <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                                    <p className="text-gray-600 font-bold mt-1">{priceValue.toFixed(0)} EGP</p>
                                    <button
                                        onClick={() => props.handleRemove(item.id)}
                                        className="text-red-500 text-sm w-fit mt-1 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                                
                                {}
                                <div className="flex items-center ml-auto">
                                    {}
                                    <button
                                        onClick={() => props.handleUpdateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                        className="px-3 py-1 border border-green-400 rounded-l-lg bg-white text-green-600 hover:bg-green-50 transition-colors font-bold disabled:text-gray-400 disabled:hover:bg-white"
                                    >
                                        -
                                    </button>
                                    
                                    {}
                                    <span className="px-3 py-1 border-t border-b border-green-400 bg-white font-bold text-gray-800 text-lg">
                                        {item.quantity}
                                    </span>

                                    {}
                                    <button
                                        onClick={() => props.handleUpdateQuantity(item.id, item.quantity + 1)}
                                        className="px-3 py-1 border border-green-400 rounded-r-lg bg-white text-green-600 hover:bg-green-50 transition-colors font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <button 
                            onClick={props.handleClearCart}
                            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition duration-150 font-medium"
                        >
                            Clear Your Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;