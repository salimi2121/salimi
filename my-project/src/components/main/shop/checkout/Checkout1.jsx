import Navbtn from "../../../header/Navbtn";
import { useState } from 'react';


export default function Chekout1() {

    const [isVisible, setIsVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4 pt-30">
            <div className="flex flex-col bg-[#f7f1e1] py-4 px-7 rounded-md">
                <div className="flex gap-1 items-center  tracking-tighter">
                    <h1 className="font-bold text-md">Returning customer?</h1>
                    <div onClick={toggleVisibility} className="text-sm cursor-pointer">Click here</div>
                </div>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isVisible ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
                    <div className="flex flex-col gap-3 mt-4">
                        <p className="text-xl text-gray-700">Please login your accont</p>
                        <div className="flex max-[992px]:flex-col gap-6">
                            <input type="text" className=" border w-2/4 max-[992px]:w-full border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0  text-gray-600 bg-white p-5 rounded-xl  text-lg  mb-7 transition-all duration-300 ease-out placeholder" placeholder="Your Email Address" />
                            <input type="text" className="border w-2/4 max-[992px]:w-full border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0  text-gray-600 bg-white p-5 rounded-xl  text-lg  mb-7 transition-all duration-300 ease-out placeholder" placeholder="Your Password " />
                        </div>
                    </div>
                    <div className="flex max-[380px]:flex-col max-[380px]:gap-5 max-[380px]:items-start items-center gap-2 mb-6">
                        <Navbtn title='login' />
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                                className="hidden"
                            />
                            <div className={`w-5 h-5 ml-4 max-[380px]:ml-0 rounded-md flex items-center justify-center transition-all duration-200 
          ${isChecked ? 'bg-blue-600 border-blue-300 border-4' : ' border-blue-300 border-4'}`}
                            >
                                {isChecked && (
                                    <span className="text-white text-xs">✓</span>
                                )}
                            </div>
                            <span className="ml-2 select-none">Remember me</span>
                        </label>


                    </div>
                    <a href="" className='text-gray-700 font-semibold'>lost your password?</a>

                </div>
            </div>
        </div >
    )
}