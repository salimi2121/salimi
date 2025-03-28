import FadeInUp from "../../FadeInUp";
import FadeInDown from "../../FadeInDown";
import b1 from '../../../assets/burger-page/offer-section/of1.png'
import b2 from '../../../assets/burger-page/offer-section/of2.png'
import b3 from '../../../assets/burger-page/offer-section/off3.png'

import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

export default function BlogBurger() {
    const blogfoods = [
        {
            id: 1,
            title: 'Curry Chickpea Delight Burger',
            body: 'Savory chickpea patty with aromatic curry, a delightful burger option.',
            href: '',
            img: b1,
            
        },
        {
            id: 2,
            title: 'Classic Americana Burger ',
            body: 'Traditional flavors, grilled perfection; iconic taste of American nostalgia.',
            href: '',
            img: b2,
         
        }, {
            id: 3,
            title: 'Triple Cheese Pleasure Burger',
            body: 'Three cheeses in a savory, indulgent burger delightfully pleasing.',
            href: '',
            img: b3,
           
        },
    ]
    return (
        <div className="mx-auto xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4  pb-20">
            <div className="flex flex-col gap-5">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center tracking-tighter bg-white pt-24 pb-14">
                        <p className="text-red-700 font-bold uppercase ">   Our Blog   </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Latest News & Article</h1>
                        <p className="lg:w-3/5 sm:w-3/4 text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">
                            Explore diverse topics and stay informed with our engaging blog. Discover news, insights, and trends, offering valuable perspectives </p>
                    </div>
                </FadeInDown>
                <FadeInUp>
                    <div className="grid grid-cols-3 max-[1181px]:grid-cols-2 max-[768px]:grid-cols-1 gap-5 justify-center items-center ">
                        {blogfoods.map((food) => (
                            <div className="flex flex-col justify-center items-center gap-3 rounded-2xl ">
                                <div className="bg-gray-100 rounded-2xl px-8 py-3 w-full">
                                    <img src={food.img} alt={food.title} className='min-h-[255px] max-h-[255px] max-w-full text-center mx-auto' />
                                </div>
                                <div className="flex flex-col gap-4 pb-8" >
                                    <div className="flex items-center justify-start gap-3 w-full text-lg font-semibold text-gray-700">
                                        <div className='flex gap-2 items-center justify-center capitalize'>
                                            <a href="" className=''> creativity </a>
                                            <div className=" text-[7px] text-red-700 pt-2 "> <FaCircle /> </div>
                                        
                                        </div>
                                        <div className="flex gap-2 items-center justify-center">
                                            <a href='' className='capitalize'> May 24, 2024</a>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <a href='' className='uppercase font-bold text-xl tracking-tighter hover:text-red-700'>{food.title}</a>
                                        <p className=' text-gray-600 font-semibold  text-lg tracking-tighter leading-7' >{food.body}</p>
                                    </div>
                                    <div className="text-red-700 font-semibold tracking-tighter mt-2 text-lg capitalize">
                                        <a href={food.href || '#'} className='flex gap-2 items-start justify-start hover:text-green-600 group  transition-all duration-300 ease-in'>learn more <div className="group-hover:ml-1  transition-all duration-300 ease-in pt-1"><FaArrowRight /></div>  </a>

                                    </div>
                                </div>

                            </div>
                        ))

                        }

                    </div>
                </FadeInUp>
            </div>
        </div>
    )
}