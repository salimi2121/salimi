import FadeInDown from "../../FadeInDown"
import bg9 from '../../../assets/pizza-page/off-section/or1.jpg'
import { BsTelephone } from "react-icons/bs";
import { FaRegHandPointUp } from "react-icons/fa";

export default function OffSectionPizza() {
    const dateInputStyle = {
        border: '1px solid #4a5565',
        fontSize: '16px',
        outline: 'none',
        with: '100%',
        transition: 'all 0.3s',
        color: '#ffffff',
    };
    return (
        <div className="relative  overflow-hidden py-30 z-1 px-33 max-[1280px]:px-0 max-[1160px]:px-18 max-[1024px]:px-0 max-[992px]:px-40 max-[950px]:px-30 max-[909px]:px-26 
        max-[880px]:px-20 max-[768px]:px-32 max-[710px]:px-26 max-[690px]:px-19 max-[600px]:px-7 max-[440px]:px-5 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg9})` }} >
            <div className="absolute top-0 left-0 w-full h-full -z-1 bg-gradient-to-r from-black to-transparent " style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.97) 30%, rgba(0, 0, 0, 0) 100%)' }}></div>
            <div className="container mx-auto">
                <div className="flex gap-7 max-[1024px]:flex-col text-white">
                    <div className="w-2/4 max-[1024px]:w-full ">
                        <FadeInDown>
                            <div className="flex flex-col max-[1024px]:justify-start max-[1024px]:items-start my-1 max-[700px]:mb-2">
                                <div className="flex justify-center items-center text-[#fcb109] w-fit rounded-lg">

                                    <p className=" font-semibold uppercase"> 50% OFF ALL PREMIUM PIZZAS</p>
                                </div>
                                <h2 className="text-[2.7rem] max-[1200px]:text-3xl max-[700px]:text-2xl font-extrabold 
                                        uppercase leading-17 max-[475px]:leading-10">
                                    HAPPY SUNDAY
                                </h2>
                                <p className="text-lg py-4">Happy Sunday Premium Pizza is a delightful blend of grilled chicken Italian sausage, bell peppers, onions, and gooey mozzarella.</p>
                                <div className="flex flex-col mt-16">
                                    <p className="text-[#ffb200] font-semibold capitalize"> Order online </p>
                                    <div className="flex max-[1105px]:flex-col max-[1105px]:max-w-80 gap-7">
                                        <a href={'#'} className="bg-red-700 mt-3 hover:bg-green-600 hover:text-white
                                  transition-all duration-300 ease-out cursor-pointer flex justify-center 
                                   items-center text-white rounded-xl font-bold text-xl basis-3/6  xl:p-4 
                                   xl:px-6 max-[1147px]:px-6  p-4 px-10 max-[1024px]:w-full max-[515px]:px-5 max-[420px]:px-2 capitalize ">
                                            <span className="text-white mr-2 "><BsTelephone /> </span>
                                            +555-657-887
                                        </a>
                                        <a href={'#'} className="bg-red-700 mt-3 hover:bg-green-600 hover:text-white
                                  transition-all duration-300 ease-out cursor-pointer flex justify-center 
                                   items-center text-white rounded-xl font-semibold text-xl basis-3/6  xl:p-4 
                                   xl:px-5 py-4 px-4 max-[1024px]:w-full max-[515px]:px-5 max-[420px]:px-2">
                                            <span className="text-white mr-2"><FaRegHandPointUp /> </span>
                                            Making a Booking
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </FadeInDown>

                    </div>

                </div>
            </div>

        </div>
    )
}