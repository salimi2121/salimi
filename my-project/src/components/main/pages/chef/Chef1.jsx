import t1 from '../../../../assets/pages/chef/t1.jpg'
import t2 from '../../../../assets/pages/chef/t2.jpg'
import t3 from '../../../../assets/pages/chef/t3.jpg'
import t4 from '../../../../assets/pages/chef/t4.jpg'
import t5 from '../../../../assets/pages/chef/t5.jpg'
import t6 from '../../../../assets/pages/chef/t6.jpg'

import FadeInDown from '../../../FadeInDown'
import FadeInUp from '../../../FadeInUp'
import FadeInRight from '../../../FadeInRight'

import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";


export default function Chef1() {
    const chefs = [
        {
            id: 1,
            category: 'chef',
            position: 'Executive chef',
            firstname: 'john',
            lastname: 'carry',
            image: t1,
            href: ''
        }, {
            id: 2,
            category: 'chef',
            position: 'Junior Chef',
            firstname: 'Alexa',
            lastname: 'lora',
            image: t2,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'Main Chef',
            firstname: 'sir.John ',
            lastname: 'Smith',
            image: t3,
            href: ''
        }
        , {
            id: 3,
            category: 'chef',
            position: 'junior chef',
            firstname: 'david',
            lastname: 'liam',
            image: t4,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'junior chef',
            firstname: 'olivia',
            lastname: 'ava',
            image: t5,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: 'junior chef',
            firstname: 'John ',
            lastname: 'jonson',
            image: t6,
            href: ''
        }
    ]


    return (
        <div className="">
            <div className="flex flex-col gap-16 py-16 mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4">
                <div className="flex flex-col gap-17">
                    <FadeInDown>
                        <div className="flex flex-col gap-5 justify-center items-center">
                            <h1 className="font-extrabold xl:text-[40px] sm:text-4xl text-3xl tracking-tighter text-center uppercase">Meet our special chef</h1>
                            <p className="text-gray-500 text-lg font-semibold text-center w-3/5">Introducing our esteemed culinary virtuoso, a maestro of flavors crafting exquisite dishes with passion, precision, and a touch of magic</p>
                        </div>
                    </FadeInDown>

                    <FadeInUp>
                        <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6 justify-center items-center ">
                            {chefs.map((chef , index) => (
                                <div  key={index}
                                className={`flex flex-col items-center justify-center w-full ${
                                    chefs.length % 2 !== 0 && index === chefs.length - 1 
                                    ? "max-[1100px]:col-span-2 max-[1100px]:justify-self-center max-[1100px]:w-1/2 max-[768px]:col-span-1 max-[768px]:w-full" 
                                    : ""
                                }`}>
                                    <div className="relative w-full flex justify-center items-center" >
                                        <img src={chef.image} alt={chef.firstname} className="flex-shrink-0 w-full" />
                                        
                                    </div>
                                    <div className="flex flex-col justify-center transition-all duration-200 ease-in 
                                tracking-tighter items-center bg-red-700 w-full p-6">
                                        <h1 className="font-bold text-xl text-white capitalize ">{chef.firstname} {chef.lastname}</h1>
                                        <p className="text-lg  text-white ">{chef.position}</p>
                                        <div className="flex gap-2 mt-4">
                                        <FadeInRight>
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-transparent text-white border border-[rgba(255,255,255,0.1)] hover:text-red-700 hover:bg-white transition-all duration-200 ease-in"><FaFacebookF /></div>

                                        </FadeInRight>
                                        <FadeInRight>
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-transparent text-white border border-[rgba(255,255,255,0.1)] hover:text-red-700 hover:bg-white transition-all duration-200 ease-in"><IoLogoTwitter /></div>
                                        </FadeInRight>
                                        <FadeInRight>
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-transparent text-white border border-[rgba(255,255,255,0.1)] hover:text-red-700 hover:bg-white transition-all duration-200 ease-in"><GrInstagram /></div>

                                        </FadeInRight>
                                        <FadeInRight>
                                            <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-transparent text-white border border-[rgba(255,255,255,0.1)] hover:text-red-700 hover:bg-white transition-all duration-200 ease-in"><IoLogoYoutube /></div>

                                        </FadeInRight>

                                    </div>
                                    </div>
                                   
                                </div>

                            ))

                            }
                        </div>
                    </FadeInUp>
                </div>

            </div>

        </div>
    )
}