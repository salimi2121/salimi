import BoxBeef from "./BoxBeef"
import React from 'react';
import { useData } from '../../../BeefContext';
import bg1 from "../../../assets/beef-page/menu-section/bg1.png"

export default function MenuBeefSection() {
    const { foods } = useData();
    if (!foods || foods.length === 0) {
        return <div>No foods available.</div>;
    }

    const filteredbeef = foods.filter(food => food.section === 'menu');
    return (
        <div className="mx-auto xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 py-20 bg-pink-50">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-5 justify-center items-center ">
                    <BoxBeef title="Biryani Menu"/>
                    <h1 className="font-extrabold text-5xl tracking-tighter text-center uppercase">Delights of Our Menu</h1>
                </div>
                <div className="grid grid-cols-2 max-[1110px]:grid-cols-1 gap-6">
                    {
                        filteredbeef.map((item) => (
                            <div className="flex max-[768px]:flex-col gap-2 max-[768px]:gap-6 justify-center items-center max-[1110px]:justify-start px-5 py-3 bg-white rounded-[160px] max-[768px]:rounded-md hover:bg-purple-200 hover:border border-dashed border-red-600">
                                <div className="relative flex  justify-center items-center w-40 h-40 max-[1230px]:w-37 max-[1150px]:w-30 max-[1110px]:w-40 max-[1230px]:h-37 max-[1150px]:h-30 max-[1110px]:h-40 rounded-full " >
                                    <img src={item.image} alt="" className="rounded-full z-1 w-full h-full" />
                                    <div className="-left-3 absolute  w-40 h-40 max-[1230px]:w-37 max-[1150px]:w-30 max-[1110px]:w-40 max-[1230px]:h-37 max-[1150px]:h-30 max-[1110px]:h-40 ">
                                        <img src={bg1} alt="" className="rounded-full z-0 w-full h-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <a href=""><h1 className="text-[1.3rem] tracking-tighter font-bold uppercase">{item.title}</h1></a>

                                    <p className="text-gray-700 text-lg ">{item.body}</p>
                                    <p className="text-red-700 font-bold text-2xl">{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}