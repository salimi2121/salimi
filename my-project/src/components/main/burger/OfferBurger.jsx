import FadeInDown from "../../FadeInDown"
import off1 from '../../../assets/burger-page/offer-section/of1.png'
import off2 from '../../../assets/burger-page/offer-section/of2.png'
import off3 from '../../../assets/burger-page/offer-section/off3.png'
import off4 from '../../../assets/burger-page/offer-section/of2.png'
import bg2 from '../../../assets/burger-page/offer-section/bgoff.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // اصلاح این خط
import 'swiper/swiper-bundle.css'; // ایمپورت استایل‌های Swiper

export default function OfferBurger() {
    const offer = [
        {
            id: 1,
            category: '',
            type: '',
            title: 'Bacon Burger',
            body: 'Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.',
            image: off1,
            href: ''
        },
        {
            id: 2,
            category: '',
            type: '',
            title: 'Bacon Burger',
            body: 'Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.',
            image: off2,
            href: ''
        },{
            id: 3,
            category: '',
            type: '',
            title: 'Bacon Burger',
            body: 'Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.',
            image: off3,
            href: ''
        },{
            id: 4,
            category: '',
            type: '',
            title: 'Bacon Burger',
            body: 'Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.',
            image: off4,
            href: ''
        },
    ]
    return (
        <div className="">
            <div className="flex flex-col gap-15 justify-center items-center bg-pink-50 pt-34 pb-25 ">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <p className="text-red-700 font-bold uppercase animate-drop "> Special offer </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Burger deal today!</h1>
                        <p className="lg:w-3/5 sm:w-3/4 text-xl max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">
                            An irresistible offer awaits today with fantastic deals on a wide range of delicious, mouthwatering burgers for everyone's delight.                        </p>
                    </div>
                </FadeInDown>
                <div className=" w-full xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}

                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        780: {
                            slidesPerView: 2,
                        },
                        1050: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {offer.map((offer) => (
                        <SwiperSlide key={offer.id}>
                            <div className="relative group flex flex-col justify-center items-center gap-6 py-10 px-6 max-[480px]:px-3 bg-white hover:bg-green-600 select-none rounded-3xl 
                            max-[490px]:w-full transition-all duration-300 ease-in" >
                                <h2 className="text-center text-2xl group-hover:text-white font-bold mt-2">{offer.title}</h2>
                                <div className="absolute z-2 top-36 left-0 w-full h-60 bg-cover bg-center  bg-no-repeat" style={{ backgroundImage: `URL(${bg2})` }}></div>
                                <div className="flex items-center justify-center gap-4 z-10 ">
                                    <img src={offer.image} alt={offer.title} className="min-h-[285px] max-h-[285px] max-w-full text-center mx-auto" />
                                </div>
                                <p className="text-md leading-6 text-gray-700 group-hover:text-white font-semibold text-center">{offer.body}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            </div>       
        </div>
    )
} 