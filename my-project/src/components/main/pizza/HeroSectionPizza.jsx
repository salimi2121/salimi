import React, { useEffect, useState } from 'react';
import FadeInDown from '../../FadeInDown';
import FadeInUp from '../../FadeInUp';
import h2 from '../../../assets/pizza-page/hero-section/h1.png'
import shape1 from '../../../assets/pizza-page/hero-section/h4.png'
import t1 from '../../../assets/pizza-page/hero-section/h2.png'
import t2 from '../../../assets/pizza-page/hero-section/h3.png'


export default function HeroSectionPizza() {
    return (
        <div className="relative w-full max-w-full flex 
              justify-between items-center z-10 max-[1285px]:px-4 ">
            {/* pizza */}
            <div className="absolute -bottom-[15%] max-[1290px]:-bottom-[10%] max-[1250px]:-bottom-[6%] -right-[50px] w-[43%] flex  max-[1200px]:hidden"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span data-depth=".3"
                    style={{
                        transform: 'translate3d(-0.7px, -19.8px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={h2} alt="" />
                </span>
            </div>

            <div className="block absolute z-0 right-[44%] max-[992px]:right-[32%] -bottom-[27%] scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".5"
                    style={{
                        transform: 'translate3d(-3.9px, -6.1px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={shape1} alt="shape image" />
                </span>
            </div>

            {/*  */}
            <div className=" block absolute z-1 -right-[1%] top-[99%] max-[1200px]:top-[84%] max-[1100px]:top-[88%] max-[1170px]:top-[86%] max-[1024px]:top-[89%] max-[952px]:top-[91%] scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".5"
                    style={{
                        transform: 'translate3d(-3.9px, -6.1px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={t1} alt="shape image" />
                </span>
            </div>

            {/* 150% off */}
            <div className="block absolute -z-3 top-[20%] left-[16.5%]  shape-five scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".4"
                    style={{
                        transform: 'translate3d(-1.9px, -3.2px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={t2} alt="shape image" />
                </span>
            </div>

            <div className="text-white xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 mt-[21%] max-[1200px]:mt-[16%] max-[900px]:mt-[20%]">

                <FadeInUp>
                    <h1 className="xl:text-[75px] lg:text-7xl text-5xl max-[760px]:text-4xl xl:w-3/5 max-[1280px]:w-2/4 max-[1242px]:w-3/5 max-[1200px]:w-full
                    leading-26 max-[1200px]:leading-20 max-[460px]:leading-13 font-bold py-2 tracking-tighter uppercase">Cheese Delight Pizza</h1>

                </FadeInUp>
                <FadeInDown>
                    <p className="text-2xl  max-[760px]:text-xl xl:w-[63%] max-[1280px]:w-[60%] max-[1170px]:w-[63%] max-[1123px]:w-[65%] max-[1094px]:w-[66%] max-[1024px]:w-[74%] 
                    max-[992px]:w-full xl:mx-0 leading-9 font-semibold py-3 max-[1200px]:py-3 pb-7">Savor the perfection of our Italian Cheese Pizza—crispy golden crust, premium mozzarella, Parmesan, and ricotta...
                    </p>
                </FadeInDown>
                <FadeInUp>

                    <div className=" flex justify-center items-center pt-3 xl:mx-0 text-xl w-46">
                        <div className="bg-white transition-bg duration-200 ease-in cursor-pointer flex justify-center 
        items-center text-red-700 rounded-xl font-bold w-full text-xl xl:p-4 xl:px-9 py-4 px-10 capitalize">
                            <a href='#'>
                                order now
                            </a>

                        </div>
                    </div>
                </FadeInUp>

            </div>
        </div>
    )
}
