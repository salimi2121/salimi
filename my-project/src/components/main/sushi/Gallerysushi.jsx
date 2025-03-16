import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // اصلاح این خط
import '../../../../node_modules/swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper
import gs1 from "../../../assets/gallery-sushi/gs1.png"
import gs2 from "../../../assets/gallery-sushi/gs2.jpg"
import gs3 from "../../../assets/gallery-sushi/gs3.jpg"
import gs4 from "../../../assets/gallery-sushi/gs4.jpg"
import gs5 from "../../../assets/gallery-sushi/gs5.jpg"
import { GrInstagram } from "react-icons/gr";


export default function Gallerysushi() {
    const items = [
        {
            id: 1,
            title: '',
            image: gs1,
            href: ''
        },
        {
            id: 2,
            title: '',
            image: gs2,
            href: ''
        }, {
            id: 3,
            title: '',
            image: gs3,
            href: ''
        }, {
            id: 4,
            title: '',
            image: gs4,
            href: ''
        }, {
            id: 5,
            title: '',
            image: gs5,
            href: ''
        }, {
            id: 6,
            title: '',
            image: gs3,
            href: ''
        }
    ]

    return (
        <div className='py-2 bg-pink-100 overflow-hidden'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // اضافه کردن ماژول‌ها به Swiper
                loop={true} // فعال کردن حرکت حلقه‌ای
                autoplay={{ delay: 3000 }} // حرکت خودکار هر 3 ثانیه                  
                slidesPerView={5} // تعداد اسلایدهای نمایش داده شده در هر بار
                spaceBetween={1} // فاصله بین اسلایدها
                breakpoints={{
                    // تنظیمات ریسپانسیو
                    320: { slidesPerView: 2 }, // در صفحه‌های کوچک، 1 اسلاید نمایش داده شود
                    768: { slidesPerView: 3 }, // در صفحه‌های متوسط، 2 اسلاید نمایش داده شود
                    1024: { slidesPerView: 5 }, // در صفحه‌های بزرگ، 3 اسلاید نمایش داده شود
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col p-4 border-transparent bg-pink-100 overflow-hidden">
                            <div className="relative flex overflow-hidden">
                                <img src={item.image} alt={item.title} className=" object-cover rounded-2xl" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-70 transition-opacity">
                                    <GrInstagram className="text-white w-7 h-7 text-4xl cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}