

import React from 'react';
import { MenuGridProvider, useData } from '../../../../MenuGridContext';
import FadeInDown from '../../../FadeInDown'
import MenuItemGrid from './MenuItemGrid';



export default function ChooseMenuGrid() {
    const { foods } = useData();

    if (!foods || foods.length === 0) {
        return <div>No foods available.</div>;
    }

    const filteredbeef = foods.filter(food => food.category === 'menu');

    return (
        <div className="bg-pink-50">
            <div className="flex flex-col gap-15 justify-center items-center py-25 xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <h1 className="tracking-tighter md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">CHOOSE MENU</h1>
                        <p className="lg:w-4/6 sm:w-3/4 text-lg font-semibold max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-600 text-center mt-2">
                            Indulge in an array of meticulously crafted sushi rolls, artfully blending
                            fresh ingredients for a delightful taste experience.
                        </p>
                    </div>
                </FadeInDown>
                <MenuGridProvider>
                    <MenuItemGrid />
                </MenuGridProvider>

            </div>
        </div>
    )
}