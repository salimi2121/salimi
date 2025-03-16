import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper
import { FaStar } from "react-icons/fa6";

const Carousel = ({ items }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // اضافه کردن ماژول‌ها به Swiper
            loop={true} // فعال کردن حرکت حلقه‌ای
            autoplay={{ delay: 2000 }} // حرکت خودکار هر 3 ثانیه
            pagination={{
                clickable: true,
                el: '.custom-pagination', // اضافه کردن کلاس سفارشی
            }}

            slidesPerView={3} // تعداد اسلایدهای نمایش داده شده در هر بار
            spaceBetween={30} // فاصله بین اسلایدها
            breakpoints={{
                // تنظیمات ریسپانسیو
                320: { slidesPerView: 1 }, // در صفحه‌های کوچک، 1 اسلاید نمایش داده شود
                768: { slidesPerView: 2 }, // در صفحه‌های متوسط، 2 اسلاید نمایش داده شود
                1024: { slidesPerView: 3 }, // در صفحه‌های بزرگ، 3 اسلاید نمایش داده شود
            }}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col gap-6 p-10 max-[480px]:px-3 border-transparent bg-white rounded-2xl max-[490px]:w-full">
                        <div className="flex gap-4">
                            <img src={item.image} alt={item.title} className="w-15 h-15 object-cover rounded" />
                            <div className="flex flex-col">
                                <h2 className="text-center text-lg font-semibold mt-2">{item.title}</h2>
                                <p className='text-gray-600 capitalize'>{item.time}</p>
                            </div>

                        </div>
                        <p className="font-semibold text-lg leading-8 text-gray-600">{item.body}</p>
                        <div className="flex text-xl text-amber-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className='text-gray-300'><FaStar /> </span>
                        </div>

                    </div>

                </SwiperSlide>
            ))}
            <div className="custom-pagination relative text-center mt-8"> </div>

        </Swiper>

    );

};

export default Carousel;