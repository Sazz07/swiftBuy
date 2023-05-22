/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className="flex items-center w-screen min-h-screen">
            <div className="container ml-auto mr-auto flex flex-wrap items-start">
                <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                    <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                        Order Now!
                    </h1>
                </div>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    )
}

export default Products