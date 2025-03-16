import BoxBeef from "./BoxBeef"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useData } from '../../../BeefContext';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function GallerySection() {
    const { foods } = useData();
    if (!foods || foods.length === 0) {
        return <div>No foods available.</div>;
    }
    
    const filteredGallery = foods.filter(food => food.section === 'gallery');
    return (
        <div className="py-20">
            <div className="flex flex-col gap-14">
                <div className="flex flex-col items-center justify-center gap-7 mx-auto  xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
                    <BoxBeef title="Kebab Corner" />
                    <h1 className="font-extrabold text-5xl text-center tracking-tighter uppercase">Delights of Our Kebab</h1>

                </div>
                <div className="flex justify-center items-center rounded-2xl transition-all duration-500 ease-in-out ">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{ delay: 300000 }} // حرکت خودکار هر 3 ثانیه
                        spaceBetween={25}
                        slidesPerView={4}
                        speed={200}
                        effect="slide"
                        breakpoints={{
                            // تنظیمات ریسپانسیو
                            300: { slidesPerView: 1 },
                            500: { slidesPerView: 2 }, 
 
                            768: { slidesPerView: 3 }, 
                            1024: { slidesPerView: 4 }, 
                        }}

                    >
                        {filteredGallery.map((food, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative transition-all duration-600 ease-in-out rounded-2xl" style={{ textAlign: 'center' }}>
                                    <img src={food.image} alt={food.title} className="rounded-2xl w-full max-w-[500px] h-full"/>
                                    <div className="absolute text-white top-0 left-0 w-full h-full flex items-end rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, #000 100%)' }}>
                                        <div className="flex w-full justify-between px-7 pb-8">
                                            <div className="flex flex-col justify-start items-start gap-2">
                                                <h3 className="text-2xl font-bold tracking-tighter capitalize">{food.title}</h3>
                                                <p className="text-xl font-bold text-yellow-500">{food.price}</p>
                                            </div>
                                            <button
                                                className="xl:rounded-xl rounded-xl w-fit h-fit bg-green-600 xl:p-5 p-3 text-white text-xl font-semiboldbold cursor-pointer"
                                            >
                                                <AiOutlineShoppingCart />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

        </div>
    )
}