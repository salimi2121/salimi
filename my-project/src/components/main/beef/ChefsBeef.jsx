import BoxBeef from "./BoxBeef"
import ch1 from '../../../assets/beef-page/chefs-section/t1.jpg'
import ch2 from '../../../assets/beef-page/chefs-section/t2.jpg'
import ch3 from '../../../assets/beef-page/chefs-section/t3.jpg'
import ch4 from '../../../assets/beef-page/chefs-section/t4.jpg'
import FadeInUp from "../../FadeInUp"
import FadeInRight from "../../FadeInRight"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import FadeInDown from "../../FadeInDown"


export default function ChefsBeef() {
    const chefs = [
        {
            id: 1,
            category: 'chef',
            position: 'Main Chef',
            firstname: 'mr.David ',
            lastname: 'Liam',
            image: ch1,
            href: ''
        }, {
            id: 2,
            category: 'chef',
            position: 'Main Chef',
            firstname: 'miss Alex',
            lastname: 'Mika',
            image: ch2,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'Main Chef',
            firstname: 'sir.John ',
            lastname: 'Smith',
            image: ch3,
            href: ''
        }, {
            id: 4,
            category: 'chef',
            position: 'Assistant Chef',
            firstname: 'Jessika ',
            lastname: 'Joya',
            image: ch4,
            href: ''
        },
    ]

    return (
        <div className="mx-auto xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 pt-36 pb-20">
            <div className="flex flex-col gap-17">
                <FadeInDown>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <BoxBeef title="Meet Our Chefs" />
                        <h1 className="font-extrabold xl:text-5xl sm:text-4xl text-3xl tracking-tighter text-center uppercase">Our Culinary Masters</h1>
                    </div>
                </FadeInDown>

                <FadeInUp>
                    <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6 justify-center items-center ">
                        {chefs.map((chef) => (
                            <div className="relative group flex flex-col items-center justify-center ">
                                <div className="relative w-full flex justify-center items-center" >
                                    <img src={chef.image} alt={chef.firstname} className="flex-shrink-0 w-full" />
                                    <div className="absolute text-white top-0 left-0 w-full h-full items-end hidden group-hover:flex"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center transition-all duration-200 ease-in 
                                tracking-tighter items-center bg-white max-[768px]:w-3/5 max-[630px]:w-[70%] max-[560px]:w-[80%] p-6">
                                    <h1 className="font-bold text-2xl capitalize ">{chef.firstname} {chef.lastname}</h1>
                                    <p className="text-lg  text-gray-700 ">{chef.position}</p>
                                </div>
                                <div className="absolute top-8 right-8 group-hover:flex flex-col  gap-2 hidden ">
                                    <FadeInRight>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-black hover:text-white transition-all duration-200 ease-in"><FaFacebookF /></div>

                                    </FadeInRight>
                                    <FadeInRight>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-black hover:text-white transition-all duration-200 ease-in"><IoLogoTwitter /></div>
                                    </FadeInRight>
                                    <FadeInRight>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-black hover:text-white transition-all duration-200 ease-in"><GrInstagram /></div>

                                    </FadeInRight>
                                    <FadeInRight>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-black hover:text-white transition-all duration-200 ease-in"><IoLogoYoutube /></div>

                                    </FadeInRight>

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