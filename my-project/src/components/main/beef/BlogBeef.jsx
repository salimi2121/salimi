import FadeInUp from "../../FadeInUp";
import FadeInDown from "../../FadeInDown";
import b1 from "../../../assets/beef-page/blog-section/b1.jpg"
import b2 from "../../../assets/beef-page/blog-section/b2.jpg"
import b3 from "../../../assets/beef-page/blog-section/b3.jpg"

import BoxBeef from "./BoxBeef";

import { FaRegUser } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";


export default function BlogBeef() {
    const blogfoods = [
        {
            id: 1,
            title: 'Dish with vegetables and roasted Steak meat',
            body: 'Crispy stovetop red potatoes, seasoned to perfection, golden and delicious.',
            href: '',
            img: b1,
            client: ' David',
        },
        {
            id: 2,
            title: 'Handi Beef biriyani with tomato & Special salads ',
            body: 'Make Jimmy soft-boiled eggs at home with tender whites and creamy yolks.',
            href: '',
            img: b2,
            client: ' David',
        }, {
            id: 3,
            title: 'Kebabs with a side of cucumber salad best food',
            body: 'Warm, traditional soft pretzels served with rich, sweet beer cheese dip.',
            href: '',
            img: b3,
            client: ' David',
        },
    ]
    return (
        <div className="mx-auto xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 pt-36 pb-20">
            <div className="flex flex-col gap-15">
                <FadeInDown>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <BoxBeef title="Our Latest Blog" />
                        <h1 className="font-extrabold xl:text-5xl sm:text-4xl text-3xl tracking-tighter text-center uppercase">Latest Blog Posts</h1>
                    </div>
                </FadeInDown>
                <FadeInUp>
                    <div className="grid grid-cols-3 max-[1181px]:grid-cols-2 max-[768px]:grid-cols-1 gap-5 justify-center items-center ">
                        {blogfoods.map((food) => (
                            <div className="flex flex-col justify-center items-center gap-8 rounded-2xl border border-gray-200">
                                <img src={food.img} alt={food.title} className='w-full min-h-[244px] rounded-t-xl' />
                                <div className="flex flex-col gap-3 px-8 pb-8" >
                                    <div className="flex items-center justify-between w-full text-gray-600">
                                        <div className='flex gap-2 items-center justify-center'><FaRegUser />
                                            <a href="" className=''> By {food.client}
                                            </a>
                                        </div>
                                        <div className="flex gap-2 items-center justify-center">
                                            <FaRegComment /><a href='' className='capitalize'>comment (2)</a>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-6'>
                                        <a href='' className='uppercase font-bold text-xl tracking-tighter hover:text-red-700'>{food.title}</a>
                                        <p className=' text-gray-600  text-md tracking-tighter leading-8' >{food.body}</p>
                                    </div>
                                    <div className="text-red-700 font-semibold tracking-tighter mt-2 text-lg capitalize">
                                        <a href={food.href || '#'} className='flex gap-4 items-start justify-start hover:text-green-600 '>learn more  </a>

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