import g1 from '../../../assets/pizza-page/gallery-section/g1.jpg'
import g2 from '../../../assets/pizza-page/gallery-section/g2.jpg'
import g3 from '../../../assets/pizza-page/gallery-section/g3.jpg'
import bg from '../../../assets/pizza-page/gallery-section/bg.jpg'
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper
import FadeInDown from "../../FadeInDown";



export default function GalleryPizza() {
    const items = [
        {
            id: 1,
            category: '',
            title: '',
            image: g1,
            href: ''
        },
        {
            id: 2,
            category: '',
            title: '',
            image: g2,
            href: ''
        },
        {
            id: 3,
            category: '',
            title: '',
            image: g3,
            href: ''
        },
        {
            id: 4,
            category: '',
            title: '',
            image: g1,
            href: ''
        },
        {
            id: 5,
            category: '',
            title: '',
            image: g2,
            href: ''
        },
        {
            id: 6,
            category: '',
            title: '',
            image: g3,
            href: ''
        },
    ]
    return (
        <div className=" flex flex-col py-32 px-27 gap-13 w-full max-w-full xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex max-[992px]:flex-col max-[992px]:gap-7 justify-between ">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-start items-start ">
                        <p className="text-red-700 font-bold uppercase tracking-tighter"> Explore Gallery </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[405px]:font-bold text-center font-extrabold uppercase">Our Gallery</h1>
                        <p className="lg:w-2/3 sm:w-full text-lg tracking-normal font-semibold  max-[765px]:text-lg max-[565px]:text-[1rem]
                                    text-gray-600 mt-2">Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.</p>
                    </div>
                </FadeInDown>
                <a href="">
                    <div className="flex flex-col gap-2 justify-center items-center bg-red-700 rounded-full w-28 h-28">
                        <p className="capitalize text-lg text-white font-semibold ">view all</p>
                        <div className="text-xl text-white"><FaArrowRight /></div>
                    </div>
                </a>

            </div>
            <div className="flex">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // اضافه کردن ماژول‌ها به Swiper
                    loop={true} // فعال کردن حرکت حلقه‌ای
                    autoplay={{ delay: 3000 }} // حرکت خودکار هر 3 ثانیه

                    slidesPerView={2} // تعداد اسلایدهای نمایش داده شده در هر بار
                    spaceBetween={30} // فاصله بین اسلایدها
                    breakpoints={{
                        // تنظیمات ریسپانسیو
                        320: { slidesPerView: 1 },
                        500: { slidesPerView: 2 }, // در صفحه‌های کوچک، 1 اسلاید نمایش داده شود
                        992: { slidesPerView: 3 }, // در صفحه‌های متوسط، 2 اسلاید نمایش داده شود
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col  bg-white w-full
                        transition-all duration-1000 ease-in-out ">
                                <div className="flex gap-4 ">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                                </div>
                            </div>

                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>

        </div>
    )
}