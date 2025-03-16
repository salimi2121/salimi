import React, { useState } from 'react';
import { useData } from '../../../DataContext';
import FadeInUp from '../../FadeInUp';
import FadeInDown from '../../FadeInDown';

export default function MenuItem() {
    const { foods } = useData();

    const categories = [...new Set(foods.map(food => food.category))]; //  دسته‌بندی‌ها  
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته بندی پیش‌فرض 
    const [selectedType, setSelectedType] = useState('special');

    const filteredFoods = foods.filter(food => food.category === selectedCategory && food.type === selectedType);

    return (
        <div className='container mx-auto  w-full'>
            <div className="lg:px-22 md:px-12 max-[650px]:px-14 ">
                <FadeInUp>
                    <div className="flex max-[650px]:grid max-[650px]:grid-cols-3 justify-stretch space-x-1 border border-red-200 bg-white rounded-xl mx-auto xl:w-5/6 my-6 py-2 px-2  ">
                        {categories.filter(category => category !== 'griddl' && category !== 'sushi-cart').map(category => (
                            <button
                                type='button'
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex justify-center items-center xl:px-10 lg:px-[41px] md:px-[26.7px] max-[760px]:px-6 pt-4 pb-4 rounded-lg xl:text-xl md:text-md max-[700px]:text-sm font-bold uppercase cursor-pointer ${selectedCategory === category ? 'bg-red-700 text-white' : 'bg-white'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </FadeInUp>

            </div>

            <div className="flex justify-center items-center">
                <FadeInDown>
                    <div className='min-[1250px]:grid min-[1250px]:grid-cols-3 min-[770px]:grid min-[770px]:grid-cols-2 items-center justify-center gap-5
                             max-[1280px]:px-0 max-[1140px]:px-10 max-[1055px]:px-19 max-[1024px]:px-0 max-[875px]:px-10  max-[560px]:px-5 xl:px-20'>
                        {filteredFoods.length > 0 ? (
                            filteredFoods.map(food => (
                                <div key={food.id} className="menu-item relative flex flex-col  items-center gap-4 mb-4 rounded-2xl bg-white pb-9">
                                    <div className='background absolute w-full h-[195px] z-0 bg-gray-100 rounded-b-[50%] rounded-tl-2xl rounded-tr-2xl transition-colors duration-500'></div>
                                    <div className="w-[230px] h-[230px] rounded-full z-2 p-4 mt-12 bg-white shadow-md shadow-gray-100 overflow-hidden">
                                        <img src={food.image || 'placeholder_image_url'} alt={food.title} className='rounded-full' />
                                    </div>
                                    <div className='flex flex-col gap-4 justify-center items-center px-9'>
                                        <h1 className='uppercase font-bold text-lg'>{food.title}</h1>
                                        <p className='text-center text-gray-600' >{food.body}</p>
                                        <p className='text-red-700 text-xl font-bold'>{food.price}</p>
                                    </div>
                                    <div className="bg-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-bg duration-200 cursor-pointer flex justify-center 
                                   items-center text-green-500 rounded-xl font-bold text-xl w-5/6 xl:p-4 xl:px-15 p-3 px-10 max-[420px]:px-2 capitalize border border-green-400">
                                        <a href={food.href || '#'}>
                                            add to cart
                                        </a>

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
    );
}