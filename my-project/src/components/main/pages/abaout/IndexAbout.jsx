import bghirro from "../../../../assets/bg-h.jpg"
import Footer from "../../../footer/Footer";
import ScrollToTopButton from "../../sushi/ScrollToTopButton";
import HeaderPages from "../../../header/HeaderPages";
import About1 from "./About1";
import About2 from "./About2";
import TestimonialAbout from "./TestimonialAbout";


export default function IndexAbout(){
     return (
            <div>
                {/* hirro section */}
                <div className="relative overflow-hidden " >
    
                    <div className="absolute top-0 -z-1 bg-white overflow-hidden xl:h-[829px]  h-full " >
                        <img src={bghirro} alt="" className="min-h-[750px] max-[1024px]:min-h-[650px] max-[992px]:min-h-[500px] w-full object-cover align-middle max-w-full " />
                    </div>
                    <div className="relative mx-auto flex justify-center max-w-full ">
                        <div className="pt-60 pb-30 capitalize text-white flex flex-col gap-6 justify-center items-center">
                            <h1 className="text-6xl font-bold ">About Us</h1>
                            <div className="flex gap-3 justify-center items-center">
                                <p className="text-md font-semibold">Home</p>
                                <p className="text-md font-semibold"> - </p>
                                <p className="text-md font-semibold">About Us</p>
                            </div>
                        </div>
    
                        <div className="absolute left-0 right-0">
                            <HeaderPages />
                        </div>
                    </div>
                </div>
                <About1 />
                <About2 />
                <TestimonialAbout />
    
                <ScrollToTopButton />
                <Footer />
            </div>
    
        )
}