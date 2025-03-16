import React, { useEffect, useState } from 'react';
import Navbtn from "../../header/Navbtn";
import FadeInDown from '../../FadeInDown';
import FadeInUp from '../../FadeInUp';
import h2 from '../../../assets/burger-page/hiro-section/h2.png'
import text1 from '../../../assets/resturan-page/hiro-section/text-0.png'
import shape1 from '../../../assets/burger-page/hiro-section/h4.png'
import shape2 from '../../../assets/burger-page/hiro-section/h3.png'
import t1 from '../../../assets/burger-page/hiro-section/t1.png'
import t2 from '../../../assets/burger-page/hiro-section/t2.png'

export default function HerosectionBurger() {
    return (
        <div className="relative w-full max-w-full flex 
              justify-between items-center z-10 max-[1285px]:px-4 ">

            <div className="absolute -bottom-[25%] right-[1px] w-[59%] flex  max-[1200px]:hidden"
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

            <div
                className="block absolute z-0 left-5 top-[20%] scene"
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

            {/*burger text  */}
            <div className=" max-[1200px]:hidden block absolute z-1 left-[41%] top-[26%] scene"
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
            <div className="block absolute -z-1 right-[-1%] bottom-[30%] shape-three scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".8"
                    style={{
                        transform: 'translate3d(-6.3px, -9.8px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={shape2} alt="shape image" />
                </span>
            </div>

            <div  className="block absolute -z-1 bottom-[-3%] left-13 scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".9"
                    style={{
                        transform: 'translate3d(-8.3px, -9.8px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={shape2} alt="shape image" />
                </span>
            </div>
            {/* 150% off */}
            <div className="block  max-[1200px]:hidden absolute -z-3 top-[37%] right-[3.5%] shape-five scene"
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
             max-[530px]:px-7 max-[440px]:px-4 mt-60">
                <FadeInDown>
                    <h5 className="text-amber-400 text-2xl font-bold uppercase "> The best in town </h5>

                </FadeInDown>
                <FadeInUp>
                    <h1 className="xl:text-[75px] lg:text-7xl sm:text-6xl text-5xl max-[460px]:text-4xl xl:w-2/4 max-[1280px]:w-2/4 max-[1100px]:w-3/4 
                    max-[1024px]:w-3/5 max-[985px]:w-4/5 max-[755px]:w-full
                    leading-26 max-[1200px]:leading-20 max-[460px]:leading-13 font-bold py-2 tracking-tighter uppercase">The hot Boss Burger</h1>

                </FadeInUp>
                <FadeInDown>
                    <p className="sm:text-2xl text-xl max-[460px]:text-lg xl:w-[52%] max-[1280px]:w-[60%] max-[1100px]:w-[65%] max-[1024px]:w-[70%] 
                    max-[992px]:w-[85%] max-[768px]:w-full 
                    xl:mx-0 leading-9 font-semibold py-9 max-[1200px]:py-3 pb-7">
                        Savor the perfection of our Savory Symphony Burger flame-grilled Angus, aged cheddar...
                    </p>
                </FadeInDown>
                <FadeInUp>

                    <div className=" flex justify-center items-center xl:mx-0 text-xl w-52">
                        <Navbtn title="order now" />
                    </div>
                </FadeInUp>

            </div>
        </div>
    )
}
