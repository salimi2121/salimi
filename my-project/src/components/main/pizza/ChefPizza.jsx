import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import ch1 from '../../../assets/pizza-page/chef-section/ch1.jpg'
import ch2 from '../../../assets/pizza-page/chef-section/ch2.jpg'
import ch3 from '../../../assets/pizza-page/chef-section/ch3.jpg'
import ch4 from '../../../assets/pizza-page/chef-section/ch4.jpg'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";


export default function ChefPizza() {
    const chefs = [
        {
            id: 1,
            category: 'chef',
            position: 'Special Chef',
            firstname: 'David ',
            lastname: 'Liam',
            image: ch1,
            href: ''
        }, {
            id: 2,
            category: 'chef',
            position: ' Special Chef ',
            firstname: 'Alex',
            lastname: 'Mika',
            image: ch2,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'Special Chef',
            firstname: 'John ',
            lastname: 'Smith',
            image: ch3,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'Special Chef',
            firstname: 'Alex ',
            lastname: 'Mika',
            image: ch4,
            href: ''
        },
    ]

    return (
        <div className="mx-auto px-30 max-[1280px]:px-20 max-[1160px]:px-18 max-[1100px]:px-19 max-[1040px]:px-18 max-[1024px]:px-18 max-[992px]:px-40 max-[950px]:px-30 max-[909px]:px-26 
        max-[880px]:px-20 max-[768px]:px-32 max-[710px]:px-26 max-[690px]:px-19 max-[600px]:px-7 max-[440px]:px-5 py-30">
            <div className="flex flex-col gap-15">
                <FadeInDown>
                    <div className="flex flex-col gap-3 justify-center items-center ">
                        <div className="flex gap-3">
                            <p className="text-red-600 font-semibold uppercase">Meet Our Chef </p>
                        </div>
                        <h1 className="xl:text-[3.5rem] max-[1280px]:text-[3rem] max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl 
                        max-[565px]:px-4 md:w-4/6 max-[405px]:font-bold text-center font-extrabold tracking-tighter 
                        uppercase">Our Special Chef</h1>
                        <p className="font-semibold text-lg lg:w-3/5 text-center text-gray-700">Savor gourmet perfection with Our Special Chef's creations, where passion and expertise unite for an extraordinary culinary.</p>
                    </div>
                </FadeInDown>
                <FadeInUp>
                    <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6 justify-center items-center max-[1280px]:px-0 ">
                        {chefs.map((chef) => (
                            <div className="relative group flex flex-col items-center justify-center ">
                                <div className="relative overflow-hidden w-full">
                                    <img src={chef.image} alt={chef.firstname} className="w-full flex-shrink-0" />
                                    <div className="absolute -bottom-35 left-0 group-hover:bottom-0 transition-all ease-in-out duration-700 flex flex-col  gap-2 ">
                                        <div className="p-2 bg-red-700 flex flex-col gap-3">
                                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent cursor-pointer text-white transition-all duration-200 ease-in border-[1px] border-[rgba(255,255,255,0.1)]"><FaFacebookF /></div>
                                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent cursor-pointer text-white transition-all duration-200 ease-in border-[1px] border-[rgba(255,255,255,0.1)]"><IoLogoTwitter /></div>
                                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent cursor-pointer text-white transition-all duration-200 ease-in border-[1px] border-[rgba(255,255,255,0.1)]"><GrInstagram /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex flex-col justify-start transition-all duration-200 ease-in tracking-tighter items-start bg-white w-full pt-6">
                                    <h1 className="font-bold text-2xl capitalize ">{chef.firstname} {chef.lastname}</h1>
                                    <p className="text-lg  text-gray-700">{chef.position}</p>
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