import React, { useState } from 'react';
import { useData } from '../../../PizzaContext';
import FadeInUp from '../../FadeInUp';
import FadeInDown from '../../FadeInDown';
import hoverimg from '../../../assets/pizza-page/menu-section/hover-img.png'


export default function MenuItemPizza() {
    const { foods } = useData();

    const categories = [...new Set(foods.map(food => food.category))]; //  دسته‌بندی‌ها  
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته بندی پیش‌فرض 
    const [selectedType, setSelectedType] = useState('special');

    const filteredFoods = foods.filter(food => food.category === selectedCategory);
    return (
        <div className='container mx-auto  w-full'>
            <div className="xl:px-26 max-[650px]:px-14 flex flex-col gap-17">
                <FadeInUp>
                    <div className="grid grid-cols-4 max-[530px]:grid-cols-2 gap-8 max-[620px]:gap-4 mx-auto w-[60%] max-[1024px]:w-[80%] max-[480px]:w-full">
                        {categories.filter(category => category !== 'menu').map(category => (
                            <button
                                type='button'
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex justify-center items-center xl:px-10 lg:px-[41px] md:px-[26.7px] max-[760px]:px-6 pt-2 pb-3 rounded-lg  md:text-md max-[700px]:text-sm font-bold capitalize tracking-tighter cursor-pointer ${selectedCategory === category ? 'bg-red-700 text-white' : 'bg-pink-100'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </FadeInUp>
                <div className="grid 
             max-[1280px]:px-0 max-[850px]:px-50 max-[768px]:px-33 max-[710px]:px-34 max-[690px]:px-33 max-[650px]:px-19 max-[620px]:px-17
             max-[600px]:px-14 max-[580px]:px-12 max-[560px]:px-6 max-[530px]:px-0">
                    <FadeInDown>
                        <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[850px]:grid-cols-1 gap-5">
                            {filteredFoods.length > 0 ? (
                                filteredFoods.map(food => (
                                    <div key={food.id} className="menu-item relative group hover-img flex flex-col items-center  gap-6 mb-4 rounded-full bg-white pb-9">
                                         <div className=" flex justify-center items-center rounded-full z-4 mt-5 xl:w-[350px] xl:h-[350px]
                                           transition-all duration-200 ease-in border-15 border-white shadow-menu overflow-hidden">
                                            <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-full h-full min-h-full flex-shrink-0' />
                                            <div className="absolute left-0 top-8 max-[450px]:top-0 max-[380px]:-top-12 w-full h-full -z-1  text-center transition-all ease-out duration-600 h-img ">
                                                <img src={hoverimg} alt="" className='w-full' />
                                            </div>
                                        </div>
                                       
                                        <div className='flex flex-col gap-2 justify-center items-center px-4 pt-4 max-[530px]:px-10 max-[505px]:px-7 max-[480px]:px-4'>
                                            <h1 className='capitalize font-bold text-3xl tracking-tighter '><a href="" className=''>{food.title}</a> </h1>
                                            <p className='text-gray-600 text-center text-lg w-54 py-2' >{food.body}</p>
                                            <div className="flex items-center w-full">
                                                <p className='text-red-700 text-3xl font-bold text-center w-full'>{food.price}</p>
                                               
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