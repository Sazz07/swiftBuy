/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    console.log(category);
    return (
        <div className="h-12 md:h-12 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <Link to={`/products/category/${category}`} className="h-12 md:h-12 block group relative mx-2 overflow-hidden shadow-xl border-4 border-secondary">
                <div>
                <h1 className='text-center font-bold uppercase text-2xl'>{category}</h1>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesCard;