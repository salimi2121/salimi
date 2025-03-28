import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // آیکن ضربدر  
import { FaPlay } from "react-icons/fa";
import FadeInDown from "../../FadeInDown";
import bg from '../../../assets/burger-page/video-section/bg.jpg'
import svid from "../../../assets/video-section/v1.mp4";


export default function VideoBurger() {
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
        <div className="py-30 bg-white xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
            <div className="max-h-[470px] bg-cover bg-center bg-no-repeat relative before:absolute before:z-1 before:content-[''] before:opacity-40 
                    before:bg-gray-950 before:top-0 before:left-0 before:w-full before:h-full before:rounded-4xl rounded-4xl " style={{ backgroundImage: `url(${bg})` }}>
                <div className="mx-auto ">
                    <FadeInDown>
                        <div className="flex flex-col py-30 z-10">
                            
                            <div className="relative flex items-center justify-center">
                                <button
                                    onClick={handlePlay}
                                    className="bg-white text-red-700 mx-auto px-8 py-8 w-20 rounded-full mb-13 cursor-pointer z-20 relative overflow-hidden">
                                    <FaPlay />
                                    {/* استفاده از pseudo elements */}
                                    <span className="absolute rounded-full z-20 border border-blue-400 w-24 h-24 opacity-50 animate-pulse animation-delay-75"></span>
                                    <span className="absolute rounded-full z-20 border border-blue-400 w-36 h-36 opacity-50 animate-pulse animation-delay-150"></span>
                                    <span className="absolute rounded-full z-20 border border-blue-400 w-48 h-48 opacity-50 animate-pulse animation-delay-225"></span>
                                </button>
                            </div>
                            <h1 className="mx-auto text-center text-white font-extrabold tracking-tighter text-5xl w-3/5 max-[1102px]:w-3/4 max-[992px]:w-full   
                              max-[768px]:text-4xl max-[500px]:text-3xl z-10">
                               Possibilities Between Every Burger Bite.
                            </h1>
                        </div>
                    </FadeInDown>
                    {isVideoVisible && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-30">  {/* Added z-30 here */}
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
    )
}
