import Logo from "../header/Logo";
import flogo from "../../assets/logo-white.png";
import shap2 from "../../assets/footer/shape-2.png";
import shap3 from "../../assets/footer/shape-3.png";
import shap4 from "../../assets/footer/shape-4.png";
import shap5 from "../../assets/footer/shape-5.png";
import shap6 from "../../assets/footer/shape-6.png";
import shap7 from "../../assets/footer/shape-7.png";
import shap8 from "../../assets/footer/shape-8.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import FadeInUp from "../FadeInUp";


export default function Footer() {
    return (
        <div className=" mx-auto bg-[#121619] relative">
            <div className="absolute lg:block hidden top-28 transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".3" className="block transform translate-[0.9px_-3.1px] preserve-3d backface-hidden">
                    <img src={shap2} alt="shape" />
                </span>
            </div>

            <div className="absolute lg:block hidden bottom-0 transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".4" className="block transform translate-[1.4px_-7.3px] preserve-3d backface-hidden">
                    <img src={shap3} alt="shape" />
                </span>
            </div>

            <div className="absolute lg:block hidden left-[30%] bottom-18 transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".5" className="block transform translate-[1.2px_-5.3px] preserve-3d backface-hidden">
                    <img src={shap4} alt="shape" />
                </span>
            </div>
            <div className="absolute lg:block hidden right-[47%] bottom-9 transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".6" className="block transform translate-[0.6px_-1.5px] preserve-3d backface-hidden">
                    <img src={shap5} alt="shape" />
                </span>
            </div>

            <div className="absolute lg:block hidden bottom-4 right-[30%] footer-shape f-shape_five scene transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".7" className="block transform translate-[1.1px_-1.4px] preserve-3d backface-hidden">
                    <img src={shap6} alt="shape" />
                </span>
            </div>
            <div className="absolute lg:block hidden -bottom-1 right-0 footer-shape f-shape_six scene transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".8" className="block transform translate-[2px_-2.3px] preserve-3d backface-hidden">
                    <img src={shap7} alt="shape" />
                </span>
            </div>
            <div className="absolute lg:block hidden bottom-40 right-0 footer-shape f-shape_seven scene transform preserve-3d backface-hidden pointer-events-none">
                <span data-depth=".9" className="block transform translate-[1.1px_-3.6px] preserve-3d backface-hidden">
                    <img src={shap8} alt="shape" />
                </span>
            </div>
            <div className="w-full flex flex-col py-24 xl:px-30 max-[1280px]:px-30 max-[1200px]:px-14 max-[980px]:px-17 max-[900px]:px-18 max-[720px]:px-10 max-[550px]:px-7 max-[440px]:px-3 ">
                <div className="lg:flex sm:grid sm:grid-cols-2 gap-9  max-[640px]:grid max-[640px]:grid-cols-1  text-gray-300 tracking-tighter">

                    <div className="flex flex-col gap-6 lg:w-1/4 sm:w-2/4">
                        <Logo imageUrl={flogo} />
                        <FadeInUp>
                            <p className="pr-4 leading-8 tracking-normal">
                                Discover culinary delights recipes and inspiration in our delightful food haven..
                            </p>
                        </FadeInUp>

                        <div className="flex gap-3">
                            <FadeInUp>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:bg-red-700 cursor-pointer"><FaFacebookF /></div>

                            </FadeInUp>
                            <FadeInUp>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:bg-red-700 cursor-pointer"><IoLogoTwitter /></div>
                            </FadeInUp>
                            <FadeInUp>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:bg-red-700 cursor-pointer"><GrInstagram /></div>

                            </FadeInUp>
                            <FadeInUp>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 hover:bg-red-700 cursor-pointer"><IoLogoYoutube /></div>

                            </FadeInUp>
                        </div>
                    </div>
                    <div className="lg:w-1/4 sm:w-2/4">
                        <FadeInUp>
                            <h1 className="text-xl font-bold uppercase text-white  mb-5">Contact Us</h1>
                            <p className="xl:pr-5 lg:pr-8 mb-5">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            <p className=" mb-5">+88-344-667-999</p>
                            <p className=" mb-5">order@foodix.com</p>
                        </FadeInUp>
                    </div>
                    <div className=" lg:pr-12 md:pr-2">
                        <FadeInUp>
                            <h1 className="text-xl font-bold uppercase text-white mb-5">Quick Link</h1>
                            <p className="mb-5">Home</p>
                            <p className="mb-5">About Us</p>
                            <p className="mb-5">Services</p>
                            <p className="mb-5">Our Menu</p>
                            <p className="mb-5">Gallery</p>
                        </FadeInUp>
                    </div>
                    <div className="">
                        <FadeInUp>
                            <h1 className="text-xl font-bold uppercase text-white mb-5">Opining time</h1>
                            <p className="mb-5">Monday: 10.00am - 05.00pm </p>
                            <p className="mb-5">Tuesday: 10.20am - 05.30pm </p>
                            <p className="mb-5">Wednesday: 10.30am - 05.50pm </p>
                            <p className="mb-5">Thursday: 11.00am - 07.10pm </p>
                            <p className="mb-5">Friday : Closed</p>
                        </FadeInUp>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center w-full border-t-1 border-gray-800 py-6 text-gray-300">
                <p className=""> © 2024 All rights reserved design by Pixelfit </p>
            </div>
        </div>
    )
}