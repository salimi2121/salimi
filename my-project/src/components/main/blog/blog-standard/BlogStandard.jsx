import b1 from '../../../../assets/pages/blog-standard/b1.jpg'
import b2 from '../../../../assets/pages/blog-standard/b2.jpg'
import b3 from '../../../../assets/pages/blog-standard/b3.jpg'
import p1 from '../../../../assets/pages/blog-standard/p1.jpg'
import p2 from '../../../../assets/pages/blog-standard/p2.jpg'
import p3 from '../../../../assets/pages/blog-standard/p3.jpg'
import p4 from '../../../../assets/pages/blog-standard/p4.jpg'

import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";


export default function BlogStandard() {
    const blogfoods = [
        {
            id: 1,
            title: 'Gourmet Griddl Masterpiece',
            body: "Plant-based dining is no longer a niche; it's a movement. Chefs are pushing the boundaries of creativity with plant-powered dishes that are not only delicious but also eco-friendly.",
            href: '',
            img: b1,
        },
        {
            id: 2,
            title: 'skyline epicurean delight',
            body: "Plant-based dining is no longer a niche; it's a movement. Chefs are pushing the boundaries of creativity with plant-powered dishes that are not only delicious but also eco-friendly.",
            href: '',
            img: b2,
        },
        {
            id: 3,
            title: 'Burger and Soft Drings',
            body: "Plant-based dining is no longer a niche; it's a movement. Chefs are pushing the boundaries of creativity with plant-powered dishes that are not only delicious but also eco-friendly.",
            href: '',
            img: b3,
        },
    ]
    const posts = [
        {
            id: 1,
            title: '',
            body: "Flavorful Fusion: Exploring the Art of culinary blending",
            date: 'May 10, 2024',
            href: '',
            img: p1,
        }, {
            id: 2,
            title: '',
            body: "Chef Spotlight: Behind the scenes of culinary mastery",
            date: 'May 10, 2024',
            href: '',
            img: p2,
        }, {
            id: 3,
            title: '',
            body: "post thumbTime-Honored recipes with a modern twist",
            date: 'May 14, 2024',
            href: '',
            img: p3,
        }, {
            id: 4,
            title: '',
            body: "Exploring authentic cuisine from around the world",
            date: 'May 20, 2024',
            href: '',
            img: p4,
        },
    ]
    return (
        <div className="mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4 ">
            <div className="flex max-[1280px]:flex-col gap-12 max-[1280px]:gap-0">
                {/* left section */}
                <div className="flex flex-col py-30 max-[1280px]:pb-0 max-w-[686px] max-[1280px]:max-w-full">
                    {blogfoods.map((food) => (
                        <div className="flex flex-col gap-6 border-b border-gray-300 py-14 ">
                            <h1 className="text-4xl max-[561px]:text-3xl max-[490px]:text-2xl max-[379px]:text-xl font-bold uppercase tracking-tighter">{food.title}</h1>
                            <div className="flex items-center justify-start gap-3 w-full text-lg max-[379px]:text-[16px] text-gray-600">
                                <div className='flex gap-2 items-center justify-center capitalize'>
                                    <a href="" className='font-semibold hover:text-red-700'> creativity </a>
                                    <div className=" text-[7px] text-red-700 pt-2 "> <FaCircle /> </div>

                                </div>
                                <div className="flex gap-2 items-center justify-center">
                                    <a href='' className='capitalize font-semibold hover:text-red-700'>  JUly 5 , 2024</a>
                                </div>
                            </div>
                            <div className="rounded-xl">
                                <img src={food.img} alt={food.title} className="max-[1280px]:w-full" />
                            </div>
                            <p className="text-gray-600 text-lg max-[379px]:text-[16px] font-semibold w-180 max-[1280px]:w-full">{food.body}</p>

                            <div className="text-red-700 font-semibold tracking-tighter text-lg capitalize">
                                <a href={food.href || '#'} className='flex gap-2 items-start justify-start hover:text-green-600 group  transition-all duration-300 ease-in'>learn more <div className="group-hover:ml-1  transition-all duration-300 ease-in pt-1"><FaArrowRight /></div>  </a>

                            </div>
                        </div>

                    ))
                    }


                </div>
                {/* right section */}
                <div className="flex flex-col gap-8 max-w-2/6 max-[1280px]:max-w-full py-30">
                    <div className="flex flex-col gap-4 p-7 rounded-2xl bg-[#f5f5f5]">
                        <h1 className='font-bold text-2xl tracking-tighter uppercase'>search</h1>
                        <input type="text" className='bg-white rounded-lg p-4 w-full' placeholder='Search here...' />
                    </div>
                    <div className="flex flex-col gap-6 bg-[#f5f5f5] rounded-2xl p-7">
                        <h1 className="text-2xl font-bold tracking-tighter uppercase">Recent Post</h1>
                        {posts.map((post) => (
                            <div className="flex gap-3">
                                <img src={post.img} alt="" />
                                <div className="flex flex-col justify-center gap-2">
                                    <p className="text-[15px] max-[1327px]:text-[14px] max-[1314px]:text-[13px] max-[1302px]:text-[12px] max-[1280px]:text-[16px] max-[397px]:text-[14px] font-semibold">{post.body}</p>
                                    <p className="text-gray-600 text-[15px] font-semibold">{post.date}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col  bg-[#f5f5f5] rounded-2xl p-7">
                        <h1 className="text-xl font-bold tracking-tighter uppercase">Categories</h1>
                        <a href="" className=' cursor-pointer'>
                            <div className="flex justify-between capitalize font-semibold hover:text-red-700 text-gray-700 py-3 border-b border-gray-300 text-lg">
                                <div className="flex gap-1 items-center">
                                    <IoIosArrowForward />
                                    <p className="pb-1">burger</p>
                                </div>
                                <p className="">(6)</p>
                            </div>
                        </a>
                        <a href="" className=' cursor-pointer'>
                            <div className="flex justify-between capitalize font-semibold hover:text-red-700 text-gray-700 py-3 border-b border-gray-300 text-lg">
                                <div className="flex gap-1 items-center">
                                    <IoIosArrowForward />
                                    <p className="pb-1">pizza</p>
                                </div>
                                <p className="">(4)</p>
                            </div></a>
                        <a href="" className=' cursor-pointer'>
                            <div className="flex justify-between capitalize font-semibold hover:text-red-700 text-gray-700 py-3 border-b border-gray-300 text-lg">
                                <div className="flex gap-1 items-center">
                                    <IoIosArrowForward />
                                    <p className="pb-1">sushi</p>
                                </div>
                                <p className="">(7)</p>
                            </div></a>

                        <a href="" className=' cursor-pointer'>

                            <div className="flex justify-between capitalize font-semibold hover:text-red-700 text-gray-700 py-3 border-b border-gray-300 text-lg">
                                <div className="flex gap-1 items-center">
                                    <IoIosArrowForward />
                                    <p className="pb-1">chicken</p>
                                </div>
                                <p className="">(8)</p>
                            </div>
                        </a>

                        <a href="" className=' cursor-pointer'>
                            <div className="flex justify-between capitalize font-semibold hover:text-red-700 text-gray-700 py-3 text-lg">
                                <div className="flex gap-1 items-center">
                                    <IoIosArrowForward />
                                    <p className="pb-1">mutton</p>
                                </div>
                                <p className="">(9)</p>
                            </div>
                        </a>


                    </div>
                    <div className="flex flex-col gap-2 text-[16px] bg-[#f5f5f5] tracking-tighter rounded-2xl p-7">
                        <h1 className="text-xl font-bold tracking-tighter uppercase mb-4">popular tags</h1>
                        <div className=" flex gap-2 flex-col max-[1280px]:flex-row max-[1000px]:flex-col">
                        <div className="flex gap-2 uppercase font-semibold text-gray-700 text-md">
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">beer</div>
                            </a>
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">burgers</div>
                            </a>
                        </div>
                        <div className="flex gap-2 uppercase font-semibold text-gray-700 text-md">
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">delicious</div>
                            </a>
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">fast food</div>
                            </a>
                        </div>
                        <div className="flex gap-2 uppercase font-semibold text-gray-700 text-md">
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">beef</div>
                            </a>
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">muton</div>
                            </a>
                            <a href="">
                                <div className="py-3 px-2 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">good meal</div>
                            </a>
                        </div>
                        <div className="flex gap-2 uppercase font-semibold text-gray-700 text-md">
                            <a href="">
                                <div className="py-3 px-5 bg-white rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ">pizza</div>
                            </a>
                        </div>
                        </div>
                       
                    </div>

                </div>


            </div>
        </div>
    )
}