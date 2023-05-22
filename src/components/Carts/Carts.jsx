// eslint-disable-next-line no-unused-vars
import React from 'react';

const Carts = () => {
    const cartData = localStorage.getItem('cart');
    const carts = cartData ? JSON.parse(cartData) : [];

    console.log(carts);

    const totalPrice = carts.reduce((total,cart) => total + cart.price, 0);

    return (
        <div className='flex justify-center my-20'>
            <div className="flex flex-col items-center max-w-3xl p-6 space-y-4 sm:p-10  shadow-xl rounded-xl">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col">
                    {
                        carts.map(cart => <li 
                        key={cart.id}
                        className="flex flex-col py-6 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 " src={cart.image} alt="Polaroid camera" />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{cart?.title}</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold text-red-600">${cart.price}</p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold text-lg text-red-600"> ${totalPrice} </span>
                    </p>
                </div>
             
            </div>
        </div>

    );
};

export default Carts;
