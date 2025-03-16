import React, { useEffect, useState } from 'react';
import Navbtn from "../../header/Navbtn";
import FadeInDown from '../../FadeInDown';
import FadeInUp from '../../FadeInUp';
import hiro1 from '../../../assets/resturan-page/hiro-section/hiro1.png'
import text1 from '../../../assets/resturan-page/hiro-section/text-0.png'


export default function HirrosectionRes() {
    return (
        <div className="container relative z-0 flex flex-col xl:flex-row xl:gap-3 gap-14 lg:justify-start justify-center  
                xl:text-left text-center max-[1280px]:mt-50 xl:mt-60  mb-5  w-full xl:px-21 
                text-white ">
            <div className=" xl:max-w-[550px] xl:max-h-[550px] xl:order-2 order-1 scene flex justify-center max-[768px]:px-14" >

                <img src={hiro1} alt="w-full h-full max-w-[590px] max-h-[590px] "/>

            </div>
            <div className="absolute xl:right-[35%] max-[1280px]:left-46 max-[1280px]:top-10 max-[1024px]:left-14 max-[768px]:left-5 max-[585px]:left-8 max-[535px]:left-5 max-[500px]:left-3 max-[410px]:left-0">
                <img src={text1} alt="" className='transform skew-x-23 xl:skew-y-[12rad] max-[1280px]:skew-y-[59rad] max-[768px]:w-40 max-[585px]:w-35 max-[500px]:w-30' />
            </div>
            <div className="xl:order-1 order-2 xl:w-2/4 max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:gap-4">
                <FadeInDown>
                    <h5 className="text-amber-400 text-xl font-bold uppercase ">hot for every sunday</h5>
                </FadeInDown>
                <FadeInUp>
                    <h1 className="xl:text-[83px] lg:text-6xl md:text-5xl text-5xl max-[650px]:w-5/6 
                    max-[650px]:mx-auto leading-25 max-[1280px]:leading-20 font-bold xl:pb-5 xl:mt-5 capitalize tracking-tighter">enjoy our <span className='text-red-700'>delicious</span> food</h1>
                </FadeInUp>
                <FadeInDown>
                    <p className="lg:text-xl text-lg xl:w-full lg:w-[70%] md:w-3/4 w-5/6 max-[650px]:w-5/6 mx-auto 
                    xl:mx-0 leading-8 font-semibold xl:py-9 xl:pb-11">Savor the taste of our delicious, expertly crafted dishes made with
                        the finest ingredients, offering a perfect blend of flavors.</p>
                </FadeInDown>
                <FadeInUp>

                    <div className=" flex justify-center items-center xl:mx-0 mx-auto text-xl w-52 mb-40">
                        <Navbtn title="order now" />
                    </div>
                </FadeInUp>

            </div>
        </div>
    )
}
