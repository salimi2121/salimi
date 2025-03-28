import React, { useState } from 'react';
import { useData } from '../../../../Menu2Context';
import FadeInUp from '../../../FadeInUp';
import FadeInDown from '../../../FadeInDown';


export default function MenuItem2() {
    const { foods } = useData();
    const categories = [...new Set(foods.map(food => food.category))]; //  دسته‌بندی‌ها  
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته بندی پیش‌فرض 
    const [selectedType, setSelectedType] = useState('special');

    const filteredFoods = foods.filter(food => food.category === selectedCategory);
    return (
        <div className='container mx-auto  w-full'>
            <div className="flex flex-col gap-17">
                <FadeInUp>
                    <div className="grid grid-cols-4 max-[730px]:grid-cols-2 gap-8 max-[620px]:gap-4 mx-auto w-[70%] max-[1024px]:w-[80%] max-[480px]:w-full">
                        {categories.filter(category => category !== 'menu').map(category => (
                            <button
                                type='button'
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex justify-center items-center xl:px-12 lg:px-[41px] md:px-[26.7px] max-[760px]:px-6 pt-3 pb-4 rounded-lg  md:text-md max-[700px]:text-sm font-bold capitalize tracking-tighter cursor-pointer ${selectedCategory === category ? 'bg-red-700 text-white' : 'bg-pink-100'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </FadeInUp>
                <div className="grid 
             max-[1280px]:px-0 max-[850px]:px-0">
                    <FadeInDown>
                        <div className="grid grid-cols-2 max-[1200px]:grid-cols-1 gap-6">
                            {filteredFoods.length > 0 ? (
                                filteredFoods.map(food => (
                                    <div key={food.id} className="menu-item relative group flex max-[768px]:flex-col items-center max-[768px]:items-start max-[768px]:p-4  gap-5 border border-pink-100  bg-white">
                                        <div className=" flex 
                                           transition-all duration-200 ease-in p-0 w-50 h-[170px] overflow-hidden">
                                            <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-full h-full flex-shrink-0' />

                                        </div>

                                        <div className='flex flex-col gap-1 justify-start items-start'>
                                            <h1 className='capitalize font-bold text-xl tracking-tighter '><a href="" className=''>{food.title}</a> </h1>
                                            <p className='text-gray-600 text-lg w-80 max-[768px]:w-5/6 max-[460px]:w-full py-2' >{food.body}</p>
                                            <div className="flex w-full">
                                                <p className='text-red-700 text-xl font-bold w-full'>{food.price}</p>

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