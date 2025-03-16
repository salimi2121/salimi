import React, { useEffect, useState } from 'react';
import img1 from "../../../assets/herro2.png"
import shape1 from "../../../assets/herro1.png"
import shape2 from "../../../assets/herro3.png"
import Navbtn from "../../header/Navbtn";
import FadeInDown from '../../FadeInDown';
import FadeInUp from '../../FadeInUp';


export default function Hirrosection() {
    return (

        <div className="container relative z-0 flex flex-col gap-6 lg:justify-start justify-center  
        xl:text-left text-center mt-40 xl:mt-58 mb-5 w-full xl:pl-20 text-white capitalize">
            <div className="image-one scene hidden xl:flex"
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
                    <img src={img1} alt="" />
                </span>
            </div>

            <div
                className="hidden lg:block absolute z-0 left-0 top-[-30%] scene"
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

            <div
                className="hidden lg:block absolute z-0 right-[28%] top-[-30%] shape-two scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".7"
                    style={{
                        transform: 'translate3d(-6.4px, -7.5px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={shape1} alt="shape image" />
                </span>
            </div>

            <div
                className="hidden lg:block absolute -z-1 right-[44%] bottom-[-59px] shape-three scene"
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

            <div
                className="hidden lg:block absolute -z-1 top-[52%] left-23 scene"
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

            <div
                className="hidden lg:block absolute -z-3 bottom-[-189px] right-[-95px] shape-five scene"
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
                    <img src={shape2} alt="shape image" />
                </span>
            </div>

            <div className="">
                <FadeInDown>
                    <h5 className="text-amber-400 text-xl font-bold uppercase ">hot for every friday</h5>

                </FadeInDown>
                <FadeInUp>
                    <h1 className="xl:text-[86px] lg:text-6xl md:text-5xl text-5xl xl:w-2/4 max-[650px]:w-5/6 max-[650px]:mx-auto 
                    leading-24 font-bold py-2 mt-5 tracking-tighter">sushi flavors redefined</h1>

                </FadeInUp>
                <FadeInDown>
                    <p className="lg:text-xl text-lg xl:w-[55%] lg:w-[70%] md:w-3/4 w-5/6 max-[650px]:w-5/6 mx-auto xl:mx-0 leading-7 font-semibold py-9 pb-11">Cluckin' Good Chicken Delight: A savory haven for chicken lovers offering
                        meticulously crafted dishes bursting with flavor.</p>
                </FadeInDown>
                <FadeInUp>

                    <div className=" flex justify-center items-center xl:mx-0 mx-auto text-xl w-52">
                        <Navbtn title="order now" />
                    </div>
                </FadeInUp>

            </div>


        </div>
    )
}