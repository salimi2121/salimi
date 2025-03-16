import { FaStar } from "react-icons/fa6";
import FadeInDown from "../../FadeInDown";
import t1 from "../../../assets/beef-page/testiminial/t1.jpg"
import t2 from "../../../assets/beef-page/testiminial/t2.jpg"
import t3 from "../../../assets/beef-page/testiminial/t3.jpg"
import t4 from "../../../assets/beef-page/testiminial/t4.jpg"
import BoxBeef from "./BoxBeef";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // اصلاح این خط
import 'swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper


export default function TestimonialBeef() {
    const chefs = [
        {
            id: 1,
            category: 'chef',
            position: 'CEO',
            firstname: 'mr.David ',
            lastname: 'Liam',
            body: 'From the moment we walked in, we were impressed by the warm & inviting atmosphere.',
            image: t1,
            href: ''
        }, {
            id: 2,
            category: 'chef',
            position: 'Founder',
            firstname: 'miss Alex',
            lastname: 'Mika',
            body: 'From the moment we walked in, we were impressed by the warm & inviting atmosphere.',
            image: t2,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'Founder',
            firstname: 'sir.John ',
            lastname: 'Smith',
            body: 'From the moment we walked in, we were impressed by the warm & inviting atmosphere.',
            image: t3,
            href: ''
        }, {
            id: 4,
            category: 'chef',
            position: 'CEO',
            firstname: 'Jessika ',
            lastname: 'Joya',
            body: 'From the moment we walked in, we were impressed by the warm & inviting atmosphere.',
            image: t4,
            href: ''
        },
    ]

    return (
        <div className="mx-auto xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 py-20">

            <div className="flex flex-col gap-15">
                <FadeInDown>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <BoxBeef title="Testimonials" />
                        <h1 className="font-extrabold xl:text-5xl sm:text-4xl text-3xl tracking-tighter text-center uppercase">Our Customer Review</h1>
                    </div>
                </FadeInDown>
                <div className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination', // اضافه کردن کلاس سفارشی

                        }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {chefs.map((chef) => (
                            <SwiperSlide key={chef.id}>
                                <div className="flex flex-col justify-center items-center gap-5 p-8 select-none bg-pink-50 rounded-xl">
                                <img src={chef.image} alt={chef.title} className="rounded-full w-16 h-16" />
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-lg font-bold capitalize text-black">{chef.firstname} {chef.lastname}</h1>
                                    <p className="text-gray-700">{chef.position}</p>
                                </div>
                                <p className="text-center text-lg tracking-tighter">{chef.body}</p>
                                <div className="flex text-lg gap-1 text-amber-500">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
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