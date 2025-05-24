import React, { useState } from 'react';
import { useData } from '../../../BurgerContext';
import FadeInUp from '../../FadeInUp';
import FadeInDown from '../../FadeInDown';
import { FaStar } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function MenuItemBurger() {
    const { foods } = useData();

    const categories = [...new Set(foods.map(food => food.category))]; //  دسته‌بندی‌ها  
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته بندی پیش‌فرض 
    const [selectedType, setSelectedType] = useState('special');

    const filteredFoods = foods.filter(food => food.category === selectedCategory);
    return (
        <div className='container mx-auto  w-full'>
            <div className="xl:px-26 max-[650px]:px-14 max-[450px]:px-10 max-[370px]:px-7 flex flex-col gap-17">
                <FadeInUp>
                    <div className="grid grid-cols-4 max-[530px]:grid-cols-2 gap-8 max-[620px]:gap-4 mx-auto w-[60%] max-[1024px]:w-[80%] max-[480px]:w-full">
                        {categories.filter(category => category !== 'griddl' && category !== 'sushi-cart').map(category => (
                            <button
                                type='button'
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex justify-center items-center xl:px-10 lg:px-[41px] md:px-[26.7px] max-[760px]:px-6 pt-2 pb-3 rounded-lg  md:text-md max-[700px]:text-sm font-bold capitalize cursor-pointer ${selectedCategory === category ? 'bg-red-700 text-white' : 'bg-white'}`}
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
                                    <div key={food.id} className="menu-item group relative flex flex-col  items-center gap-6 mb-4 rounded-2xl bg-white pb-9">
                                        <div className="flex justify-center items-center rounded-md z-2 p-8 mt-5 xl:w-[320px] xl:h-[270px] max-[1280px]:w-[300px] max-[1280px]:h-[250px] 
                                        max-[1024px]:w-[340px] max-[1024px]:h-[250px] max-[460px]:w-[300px] max-[460px]:h-[250px] max-[430px]:w-[270px] max-[430px]:h-[230px] max-[390px]:w-[240px] max-[390px]:h-[210px]
                                          bg-pink-50 group-hover:bg-green-600 transition-all duration-200 ease-in shadow-md shadow-gray-100 overflow-hidden">
                                            <img src={food.image || 'placeholder_image_url'} alt={food.title} className='w-[95%] h-[95%] min-h-[195px] flex-shrink-0' />
                                        </div>
                                        <div className='flex flex-col gap-2 justify-start items-start px-4 max-[530px]:px-10 max-[505px]:px-7 max-[480px]:px-4'>
                                            <h1 className='capitalize font-bold text-xl hover:text-green-600 transition-all duration-200 ease-in'><a href="" className=''>{food.title}</a> </h1>
                                            <div className="flex justify-center items-center text-lg gap-1 text-amber-500">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <p className='text-black text-xl '>(4.5)</p>
                                            </div>
                                            <p className='text-gray-600' >{food.body}</p>
                                            <div className="flex justify-between items-center w-full">
                                                <p className='text-red-700 text-xl font-bold'>{food.price}</p>
                                                <button
                                                    className="xl:rounded-xl rounded-xl w-fit h-fit bg-green-600 xl:p-4 p-3 text-white text-xl font-semiboldbold cursor-pointer"
                                                >
                                                    <AiOutlineShoppingCart />
                                                </button>
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