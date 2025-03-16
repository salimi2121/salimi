import React, { useState } from 'react';
import { useData } from '../../../DataContext';
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import FadeInDown from "../../FadeInDown"


export default function Blogsushi() {
    const { foods } = useData();

    const categories = [...new Set(foods.map(food => food.category))]; //  دسته‌بندی‌ها  
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته بندی پیش‌فرض 
    const [selectedType, setSelectedType] = useState('special');

    const filteredFoods = foods.filter(food => food.id >= 23 && food.id < 26);

    return (
        <div className='mx-auto xl:px-30 lg:px-20 sm:px-10 px-10'>
            <FadeInDown>
                <div className="flex flex-col gap-4 justify-center items-center bg-white pt-24 pb-14">
                    <p className="text-red-700 font-bold uppercase ">   Our Blog   </p>
                    <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Latest Blog Posts</h1>
                    <p className="lg:w-2/4 sm:w-3/4 text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">
                        Indulge in an array of meticulously crafted sushi rolls, artfully blending
                        fresh ingredients for a delightful taste experience.
                    </p>
                </div>
            </FadeInDown>
            <FadeInDown>
                <div className='min-[1250px]:grid min-[1250px]:grid-cols-3 min-[770px]:grid min-[770px]:grid-cols-2 items-center justify-center gap-6 mb-12 '>
                    {filteredFoods.length > 0 ? (
                        filteredFoods.map(food => (
                            <div key={food.id} className="relative flex flex-col gap-3 mb-4  rounded-2xl bg-white pb-9">
                                <div className="flex absolute bg-amber-400 px-4 py-1 text-md font-bold capitalize rounded-lg top-6 left-4 z-10">{food.category}</div>
                                <div className="z-2 bg-white overflow-hidden rounded-xl">
                                    <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-full h-full' />
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <div className='flex gap-3 items-center'><MdOutlineDateRange /> {food.time}</div>
                                    <div className="flex gap-3 items-center">
                                        <FaRegComment /><p className='capitalize'>comment (2)</p>

                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='uppercase font-bold text-xl tracking-tighter'>{food.title}</h1>
                                    <p className=' text-gray-600 font-semibold text-lg' >{food.body}</p>
                                </div>
                                <div className="text-red-700 font-semibold tracking-tighter mt-2 text-xl capitalize">
                                    <a href={food.href || '#'} className='flex gap-4 items-center'>learn more  <FaArrowRight /></a>

                                </div>

                            </div>
                        ))
                    ) : (
                        <p>No items available in this category.</p>
                    )}
                </div>
            </FadeInDown>

        </div>
    )
}