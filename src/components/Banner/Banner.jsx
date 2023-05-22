import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Banner.css'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section
                        className="relative bg-[url(https://i.postimg.cc/Y0C67jrx/black-friday-elements-assortment.jpg)] bg-cover bg-center bg-no-repeat"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="max-w-xl text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700">
                                        Desire Products.
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    Unleash Your Shopping Desires - Browse Through a Vast Collection of Clothing, Accessories, Gadgets, and More!
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <Link
                                        to='/categories'
                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        className="relative bg-[url(https://i.postimg.cc/mk1r7G8s/digital-wardrobe-transparent-screen.jpg)] bg-cover bg-center bg-no-repeat"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="max-w-xl text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700">
                                        Desire Products.
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    Transform Your Shopping Experience - Enjoy Seamless Navigation, Secure Payments, and Lightning-Fast Delivery!
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <Link
                                        to='/categories'
                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        className="relative bg-[url(https://i.postimg.cc/zvpVJktL/closeup-shot-two-pretty-afro-american-girls-using-their-phones-while-holding-shopping-bags.jpg)] bg-cover bg-center bg-no-repeat"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="max-w-xl text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700">
                                        Desire Gift.
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    Start Your Shopping Adventure - Get Inspired with Stylish Outfits, Home Makeovers, and Personalized Gifts!
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <Link
                                        to='/categories'
                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;