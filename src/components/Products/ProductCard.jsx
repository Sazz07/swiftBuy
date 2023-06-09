/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
    const { title, image, description, price } = product;

    // Handle to cart
    const handleAddToCart = () => {
        // Get the existing cart data from local storage
        const existingCart = localStorage.getItem('cart');
        const cart = existingCart ? JSON.parse(existingCart) : [];
        toast.success("Product Added to the cart");
        // Add the product to the cart
        cart.push(product);

        // Save the updated cart data to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="w-full  md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div className="bg-white shadow-2xl rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure className="mb-2">
                    <img src={image} alt="" className="h-64 ml-auto mr-auto w-full" />
                </figure>
                <div className="rounded-lg p-4 flex flex-col border-2">
                    <div>
                        <h5 className="text-2xl font-bold leading-none">
                            {title}
                        </h5>
                        <span className="text-xs  leading-none">{description}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="text-lg text-red-700 font-bold">
                            ${price}
                        </div>
                        <button onClick={handleAddToCart} className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;