import React, { useState } from 'react';
import { useData } from '../../../../MenuGridContext';
import FadeInUp from '../../../FadeInUp';
import FadeInDown from '../../../FadeInDown';
import { FaStar } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";


export default function MenuItemGrid() {
    const { foods } = useData();
    const categories = [...new Set(foods.map(food => food.category))]; //  دسته‌بندی‌ها  
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته بندی پیش‌فرض 
    const [selectedType, setSelectedType] = useState('special');

    const filteredFoods = foods.filter(food => food.category === selectedCategory);
    return (
        <div className='container mx-auto  w-full'>
            <div className="flex flex-col gap-17">
                <FadeInUp>
                    <div className="grid grid-cols-4 max-[768px]:grid-cols-2 gap-8 max-[620px]:gap-4 mx-auto w-[55%] max-[1024px]:w-[80%] max-[480px]:w-full">
                        {categories.filter(category => category !== 'menu').map(category => (
                            <button
                                type='button'
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex justify-center items-center xl:px-3 md:px-[10.7px] max-[768px]:px-10 pt-3 pb-4 rounded-lg  md:text-md max-[700px]:text-sm font-bold capitalize tracking-tighter cursor-pointer ${selectedCategory === category ? 'bg-red-700 text-white' : 'bg-[#f2daca]'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </FadeInUp>
                <div className="grid 
             max-[1280px]:px-0 max-[850px]:px-0">
                    <FadeInDown>
                        <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6">
                            {filteredFoods.length > 0 ? (
                                filteredFoods.map(food => (
                                    <div key={food.id} className="menu-item relative group flex flex-col items-center max-[768px]:items-start  gap-2 rounded-3xl bg-white">
                                        <div className=" flex 
                                           transition-all duration-200 ease-in p-0 w-full rounded-t-3xl overflow-hidden">
                                            <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-full h-full flex-shrink-0'/>
                                        </div>

                                        <div className='flex flex-col gap-1 w-full px-8 justify-start items-start'>
                                            <div className="flex justify-between w-full py-4 border-b border-gray-200">
                                                <p className='text-red-700 text-xl font-bold w-full'>{food.price}</p>
                                                <div className="flex gap-3 text-yellow-500 text-xl justify-center items-center">
                                                    <FaStar />
                                                    <p className='text-gray-700 font-semibold text-lg'>4.7(375)</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4 w-full">
                                                <h1 className='capitalize font-bold text-xl tracking-tighter mt-3'>
                                                    <a href="" className=''>{food.title}</a>
                                                </h1>
                                                <div className="flex flex-col gap-2 text-md text-gray-500 font-semibold">
                                                    <div className="flex gap-3 items-center">
                                                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 
                                                        6.5 22 12 22Z" stroke="#bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#Bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                        <p className="">4 Piece Chicken</p>

                                                    </div>
                                                    <div className="flex gap-3 items-center">
                                                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 
                                                        6.5 22 12 22Z" stroke="#bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#Bf1109" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                        <p className="">Spicy Sauce</p>

                                                    </div>
                                                </div>
                                                <div className="bg-white hover:border-red-700 transition-bg duration-200 cursor-pointer flex justify-center 
                                                  items-center text-gray-700 rounded-xl font-semibold text-xl w-full my-6 xl:p-4 xl:px-5 p-3 px-5 capitalize border border-gray-200">
                                                    <a href={food.href || '#'} className='flex gap-3 justify-center items-center w-full'>
                                                        <div className="text-2xl"><BsCartPlus /></div>
                                                        add to cart
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p>No items available in this category.</p>
                            )}
                        </div>
                    </FadeInDown>
                </div>


            </div>
        </div>
    )
}