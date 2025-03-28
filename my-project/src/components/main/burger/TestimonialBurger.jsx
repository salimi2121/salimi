import FadeInDown from "../../FadeInDown";
import t1 from '../../../assets/burger-page/offer-section/testimonial/t1.jpg'
import t2 from '../../../assets/burger-page/offer-section/testimonial/a2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper
import { FaStar } from "react-icons/fa6";


export default function TestimonialBurger() {
    const items = [
        {
            id: 1,
            category: '',
            time: 'A week ago',
            name: 'Jane Cooper',
            body: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations each image.",
            image: t1,
            href: ''
        },
        {
            id: 2,
            category: '',
            time: 'A week ago',
            name: 'Jane Cooper',
            body: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations each image.",
            image: t2,
            href: ''
        },{
            id: 3,
            category: '',
            time: 'A week ago',
            name: 'Jane Cooper',
            body: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations each image.",
            image: t1,
            href: ''
        },
    ]

    return (
        <div className=" bg-pink-50 pb-12 px-27 gap-5 w-full max-w-full xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">

            <div className="flex flex-col gap-4 justify-center items-center py-24 ">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <p className="text-red-700 font-bold uppercase "> Testimonial </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Our Customer Say</h1>
                        <p className="lg:w-3/4 sm:w-full text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem]
                                    text-gray-800 text-center mt-2">Highlight specific aspects of the product or service that are relevant to your target audience. Focus on features or customers are likely to find compelling.</p>
                    </div>
                </FadeInDown>

            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // اضافه کردن ماژول‌ها به Swiper
                loop={true} // فعال کردن حرکت حلقه‌ای
                autoplay={{ delay: 2000 }} // حرکت خودکار هر 3 ثانیه
                pagination={{
                    clickable: true,
                    el: '.custom-pagination', // اضافه کردن کلاس سفارشی
                }}

                slidesPerView={2} // تعداد اسلایدهای نمایش داده شده در هر بار
                spaceBetween={30} // فاصله بین اسلایدها
                breakpoints={{
                    // تنظیمات ریسپانسیو
                    320: { slidesPerView: 1 }, // در صفحه‌های کوچک، 1 اسلاید نمایش داده شود
                    868: { slidesPerView: 2 }, // در صفحه‌های متوسط، 2 اسلاید نمایش داده شود
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col gap-6 p-10 max-[480px]:px-3 border-transparent bg-white rounded-2xl max-[490px]:w-full
                        transition-all duration-500 ease-in">
                            <div className="flex gap-4 ">
                                <img src={item.image} alt={item.title} className="w-15 h-15 object-cover rounded" />
                                <div className="flex flex-col">
                                    <h2 className="text-center text-lg font-bold tracking-tighter mt-2">{item.name}</h2>
                                    <p className='text-gray-600'>{item.time}</p>
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
            <div >

            </div>
        </div>
    )
}