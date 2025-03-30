import a1 from '../../../../assets/pages/about/a1.jpg'
import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // آیکن ضربدر  
import { FaPlay } from "react-icons/fa";
import FadeInDown from "../../../FadeInDown";
import svid from "../../../../assets/video-section/v1.mp4";

export default function About1() {
    const videoRef = useRef(null); // برای نگه‌داری رفرنس ویدیو  
    const [isVideoVisible, setIsVideoVisible] = useState(false); // برای کنترل نمایش ویدیو  
    const handlePlay = () => {
        setIsVideoVisible(true); // نمایش ویدیو  
        if (videoRef.current) {
            videoRef.current.play(); // پخش ویدیو  
        }
    };
    const handleClose = () => {
        setIsVideoVisible(false); // مخفی کردن ویدیو  
        if (videoRef.current) {
            videoRef.current.pause(); // توقف ویدیو  
            videoRef.current.currentTime = 0; // بازنشانی ویدیو  
        }
    };
    return (
        <div className="">
            <div className="flex flex-col gap-16 py-16 mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4">
                <div className="flex max-[992px]:flex-col gap-8">
                    <h1 className="text-[28px] leading-12 font-bold tracking-tighter basis-1/2 max-[992px]:w-4/5 max-[768px]:w-full">Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers.</h1>
                    <p className="basis-1/2 text-lg font-semibold text-gray-600">Embark on a delectable journey as we delve into the world of culinary delights and gastronomic adventures. Food is not just sustenance; it's an art that connects cultures, evokes memories, and stirs emotions. In this blog, we invite you to join us as we explore the fascinating realm.</p>

                </div>
                <div className="flex">
                    <div className="max-h-[550px] h-[500px] w-full bg-cover bg-center bg-no-repeat relative before:absolute before:z-1 before:content-[''] before:opacity-40 
                    before:bg-gray-70 before:top-0 before:left-0 before:w-full before:h-full before:rounded-3xl rounded-3xl " style={{ backgroundImage: `url(${a1})` }}>
                        <div className="mx-auto ">
                            <FadeInDown>
                                <div className="flex flex-col py-30 z-10">

                                    <div className="relative flex items-center justify-center">
                                        <button
                                            onClick={handlePlay}
                                            className="text-white bg-green-600 mx-auto px-8 py-8 w-20 rounded-full mb-10 cursor-pointer z-1 relative overflow-hidden">
                                            <FaPlay />
                                            {/* استفاده از pseudo elements */}
                                            <span className="absolute rounded-full z-20 border border-blue-400 w-24 h-24 opacity-50 animate-pulse animation-delay-75"></span>
                                            <span className="absolute rounded-full z-20 border border-blue-400 w-36 h-36 opacity-50 animate-pulse animation-delay-150"></span>
                                            <span className="absolute rounded-full z-20 border border-blue-400 w-48 h-48 opacity-50 animate-pulse animation-delay-225"></span>
                                        </button>
                                    </div>
                                    <h1 className="mx-auto text-center text-white font-extrabold tracking-tighter uppercase text-[48px] leading-14 w-3/5 max-[1102px]:w-3/4 max-[992px]:w-full   
                              max-[768px]:text-4xl max-[500px]:text-3xl max-[400px]:text-[28px] max-[400px]:leading-10 z-1">
                                        Eat and enjoy in our
                                        restaurant
                                    </h1>
                                </div>
                            </FadeInDown>
                            {isVideoVisible && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">  {/* Added z-30 here */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleClose}></div>
                                    <div className="relative bg-white z-40"> {/* محتوای ویدیو در لایه بالایی */}
                                        <video ref={videoRef} controls className="w-full mx-auto opacity-100" onClick={(e) => e.stopPropagation()}>
                                            <source src={svid} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <button
                                            onClick={handleClose}
                                            className="absolute -top-5 right-0 text-gray-300 hover:text-white text-lg cursor-pointer"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
