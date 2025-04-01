import Navbtn from "../../../header/Navbtn";
import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../../../../DataContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import CounterCart from "./CounterCatr";

export default function Cart1() {
    const { foods } = useData();
    const filteredSushi = foods.filter(food => food.category === 'sushi-cart');
    const [cartItems, setCartItems] = useState(filteredSushi.slice(-5));


    // تابع حذف آیتم از سبد خرید
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };
    return (
        <div className="mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4 py-30">
            <div className="flex max-[1280px]:flex-col justify-between">
                <div className="flex flex-col w-4/6 max-[1280px]:w-full tracking-tighter">
                    {cartItems.length > 0 ? (
                        cartItems.map((sushi, index) => (
                            <div key={sushi.id} className={`relative flex flex-col gap-2 py-2 bg-white ${index !== cartItems.length - 1 ? 'border-b border-gray-300' : ''
                                }`}>
                                <div className='flex justify-between items-center gap-4 max-[1280px]:w-full'>
                                    <div className='flex gap-4 max-[420px]:gap-0 max-[1280px]:w-5/6 max-[992px]:w-3/6 max-[1280px]:justify-between'>
                                        <div className="flex  max-[768px]:flex-col max-[768px]:justify-center  gap-3 items-center max-[768px]:items-start">
                                            <div className="flex justify-center  min-w-30 max-[810px]:min-w-24  items-center rounded-md">
                                                <img src={sushi.image} alt="" className='w-full h-full rounded-xl ' />
                                            </div>
                                            <h1 className='capitalize  min-w-58 max-[970px]:min-w-50 max-[420px]:min-w-40 max-[395px]:min-w-30 max-[730px]:min-w-44 max-[530px]:min-w-41 text-gray-800 font-bold max-[768px]:font-semibold text-lg max-[768px]:text-[15px] max-[530px]:text-[14px]'>{sushi.title}</h1>

                                        </div>
                                        <div className="flex gap-1 justify-center items-center">
                                            <div className="flex gap-2 max-[500px]:gap-0 items-center">
                                                <p className='text-gray-800 text-lg font-semibold'>{sushi.price}</p>
                                                <div className="w-40 mx-3 max-[768px]:w-36 max-[520px]:w-20 ">
                                                    <CounterCart />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <p className='text-gray-800 text-lg font-semibold'>{sushi.price}</p>
                                        {/* دکمه حذف با اتصال به تابع removeItem */}
                                        <div className='cursor-pointer' onClick={() => removeItem(sushi.id)}>
                                            <RiDeleteBin6Line />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No sushi items available.</p>
                    )}
                    <div className="flex max-[768px]:flex-col gap-6 items-center max-[768px]:items-start mt-15 max-[1280px]:mb-10">
                        <div className="relative ">
                            <input type="text" placeholder="Coupon Code" className="p-3.5 pl-6 w-110 max-[801px]:w-98 max-[768px]:w-110 max-[490px]:w-90 max-[390px]:w-80 rounded-lg text-lg font-semibold text-gray-800 border border-gray-400 outline-red-700  focus-visible:border-0" />

                            <div className="absolute top-1.5 right-1.5 bg-red-700 hover:bg-green-600 transition-bg duration-200 ease-in cursor-pointer flex justify-center 
                             items-center text-white rounded-md font-semibold text-lg xl:px-4 py-2.5 px-6 capitalize">
                                <a href='#'>
                                    apply coupon
                                </a>
                            </div>
                        </div>
                        <div className="">
                        <Navbtn title='update cart' />

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 max-h-90 bg-pink-50 p-10 rounded-xl">
                    <h1 className="text-xl font-bold">Cart Totals</h1>
                    <div className="flex flex-col capitalize">
                        <div className="flex justify-between border-b text-gray-700 font-semibold border-gray-200 px-2 py-3">
                            <p className="">cart subtotal</p>
                            <p className="">$270</p>
                        </div>
                        <div className="flex justify-between border-b text-gray-700 font-semibold border-gray-200 px-2 py-3">
                            <p className="">shopping fee</p>
                            <p className="">$50</p>
                        </div>
                        <div className="flex justify-between font-semibold px-2 py-4">
                            <p className="">order total</p>
                            <p className="">$320</p>
                        </div>
                    </div>
                    <div className="max-[1280px]:w-70">
                    <Navbtn title='proceed to chekout' />

                    </div>

                </div>
            </div>


        </div>
    )
}
