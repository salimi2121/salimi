import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // اصلاح این خط
import '../../../../node_modules/swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper
import gr1 from "../../../assets/resturan-page/galllery/1.png"
import gr2 from "../../../assets/resturan-page/galllery/2.jpg"
import gr3 from "../../../assets/resturan-page/galllery/3.jpg"
import gr4 from "../../../assets/resturan-page/galllery/4.jpg"
import gr5 from "../../../assets/resturan-page/galllery/5.jpg"
import gr6 from "../../../assets/resturan-page/galllery/6.jpg"

import { GrInstagram } from "react-icons/gr";
import FadeInUp from '../../FadeInUp';


export default function GalleryRes() {
    const items = [
        {
            id: 1,
            category: 'pizza',
            title: 'hawaiian pizza',
            image: gr1,
            href: ''
        },
        {
            id: 2,
            category: 'pizza',
            title: 'hawaiian pizza',
            image: gr2,
            href: ''
        }, {
            id: 3,
            category: 'pizza',
            title: 'hawaiian pizza',
            image: gr3,
            href: ''
        }, {
            id: 4,
            category: 'pizza',
            title: 'hawaiian pizza',
            image: gr4,
            href: ''
        }, {
            id: 5,
            category: 'pizza',
            title: 'hawaiian pizza',
            image: gr5,
            href: ''
        }, {
            id: 6,
            category: 'pizza',
            title: 'hawaiian pizza',
            image: gr6,
            href: ''
        }
    ]

    return (
        <div className=' bg-pink-100 overflow-hidden'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // اضافه کردن ماژول‌ها به Swiper
                loop={true} // فعال کردن حرکت حلقه‌ای
                autoplay={{ delay: 300000 }} // حرکت خودکار هر 3 ثانیه 
                speed={800} // مدت زمان انتقال اسلایدها به 800 میلی‌ثانیه  

                slidesPerView={5} // تعداد اسلایدهای نمایش داده شده در هر بار
                spaceBetween={1} // فاصله بین اسلایدها
                breakpoints={{
                    // تنظیمات ریسپانسیو
                    320: { slidesPerView: 2 }, 
                    768: { slidesPerView: 3 }, 
                    1024: { slidesPerView: 5 }, 
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col bg-pink-100 overflow-hidden ">
                            <div className="relative flex overflow-hidden">
                                <img src={item.image} alt={item.title} className=" object-cover " />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center 
                                justify-center opacity-0 hover:opacity-70 transition-opacity overlay">

                                    <div className="flex flex-col justify-center items-cwnter absolute bottom-0 gap-4 pb-8 text-white ">
                                        <h3 className='font-bold title text-xl tracking-tighter uppercase'>{item.title}</h3>
                                        <p className='font-semibold text-lg text-gray-300 category text-center capitalize'>{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}