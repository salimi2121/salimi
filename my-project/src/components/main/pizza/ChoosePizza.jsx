import React from 'react';
import { useData } from '../../../PizzaContext';
import FadeInDown from '../../FadeInDown'


export default function ChoosePizza() {
    const { foods } = useData();
    
    if (!foods || foods.length === 0) {
        return <div>No foods available.</div>;
    }

    const filteredbeef = foods.filter(food => food.category === 'menu');

    return (
        <div className="">
            <div className="flex flex-col gap-15 justify-center items-center py-25 xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <p className="text-red-700 font-bold uppercase animate-drop ">Choose your flavor</p>
                        <h1 className="tracking-tighter md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">the best food in town</h1>
                        <p className="tracking-tighter lg:w-4/6 sm:w-3/4 text-lg font-semibold max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-700 text-center mt-2">
                            Indulge in the extraordinary with Our Special Pizza. A tantalizing blend of succulent toppings, premium cheeses, and a secret sauce, crafted to perfection.
                        </p>
                    </div>
                </FadeInDown>
                <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[1110px]:grid-cols-1 gap-6">
                    {
                        filteredbeef.map((item) => (
                            <div className="flex flex-col gap-9 max-[768px]:gap-6 justify-center items-center rounded-xl max-[1110px]:justify-start px-5 pt-8 pb-16 bg-pink-100  hover:border-5 border-green-600">
                                <div className="relative flex  justify-center items-center rounded-full " >
                                    <img src={item.image} alt="" className="rounded-full z-1 w-full h-full" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <a href=""><h1 className="text-[1.3rem] tracking-tighter font-bold uppercase">{item.title}</h1></a>

                                    <p className="text-gray-700 text-lg text-center px-4 max-[1200px]:px-12 max-[450px]:px-4">{item.body}</p>
                                    <p className="text-red-700 font-bold text-3xl ">{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}