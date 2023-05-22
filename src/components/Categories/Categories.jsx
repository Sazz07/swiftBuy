/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(res.data);
            }
            catch (error) {
                console.error('Error in fetching Data', error);
            }
        };

        fetchData();
    }, []);

    // console.log(categories);

    return (
        <div className="my-24">
            <p className='text-4xl text-secondary font-bold text-center mb-4'>Categories</p>
            <h1 className='text-xl font-semibold text-center px-8 lg:px-0 mode:text-white'>Discover the best selection of products on our e-commerce site. Explore our carefully curated categories to easily find what you're looking for. From fashion and electronics to home decor and beauty, our categories section has something for everyone. Start browsing now and enjoy the convenience of online shopping with us.</h1>
            <div className="max-w-screen-xl mx-auto px-4 pt-16">
                <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">

                    {
                        categories?.map((category, index) => <CategoriesCard
                            key={index}
                            category={category}
                        ></CategoriesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;