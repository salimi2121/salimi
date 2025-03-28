import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // اصلاح این خط
import '../../../../node_modules/swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper
import gs1 from "../../../assets/burger-page/gallery/g1.jpg"
import gs2 from "../../../assets/burger-page/gallery/g2.jpg"
import gs3 from "../../../assets/burger-page/gallery/g3.jpg"
import gs4 from "../../../assets/burger-page/gallery/g4.jpg"
import gs5 from "../../../assets/burger-page/gallery/g5.jpg"
import { GrInstagram } from "react-icons/gr";
import FadeInDown from '../../FadeInDown';


export default function GalleryBurger() {
    const items = [
        {
            id: 1,
            title: 'gallery',
            image: gs1,
            href: ''
        },
        {
            id: 2,
            title: 'gallery',
            image: gs2,
            href: ''
        }, {
            id: 3,
            title: 'gallery',
            image: gs3,
            href: ''
        }, {
            id: 4,
            title: 'gallery',
            image: gs4,
            href: ''
        }, {
            id: 5,
            title: 'gallery',
            image: gs5,
            href: ''
        }, {
            id: 6,
            title: 'gallery',
            image: gs3,
            href: ''
        }
    ]

    return (
        <div className=' overflow-hidden'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // اضافه کردن ماژول‌ها به Swiper
                loop={true} // فعال کردن حرکت حلقه‌ای
                autoplay={{ delay: 3000 }} // حرکت خودکار هر 3 ثانیه                  
                slidesPerView={5} // تعداد اسلایدهای نمایش داده شده در هر بار
                spaceBetween={0} // فاصله بین اسلایدها
                breakpoints={{
                    // تنظیمات ریسپانسیو
                    320: { slidesPerView: 2 }, // در صفحه‌های کوچک، 1 اسلاید نمایش داده شود
                    450: { slidesPerView: 3 },
                    600: { slidesPerView: 4 },
                    850: { slidesPerView: 5 }, // در صفحه‌های متوسط، 2 اسلاید نمایش داده شود
                    1024: { slidesPerView: 6 }, // در صفحه‌های بزرگ، 3 اسلاید نمایش داده شود
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col  border-transparent overflow-hidden">
                            <div className="relative flex overflow-hidden">
                                <img src={item.image} alt={item.title} className=" object-cover " />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start group  
                                justify-center opacity-0 hover:opacity-70 transition-all duration-300 ease-in">
                                    <GrInstagram className="text-white w-7 h-7 text-4xl cursor-pointer transition-all 
                                    duration-300 ease-in group-hover:mt-23" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}