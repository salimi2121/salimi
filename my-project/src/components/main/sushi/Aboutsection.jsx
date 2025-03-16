import icon1 from "../../../assets/about-soshi/icon1.png"
import icon2 from "../../../assets/about-soshi/icon2.png"
import img1 from "../../../assets/about-soshi/about-1.png"
import a1 from "../../../assets/about-soshi/a1.png"
import a2 from "../../../assets/about-soshi/a2.png"
import Navbtn from "../../header/Navbtn"
import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"


export default function Aboutsection() {
    let title = "read more";
    let href = "";
    return (
        <div className="relative overflow-hidden pb-20 pt-28 z-1 ">

            <div
                className="absolute -z-1 xl:left-[-35%] xl:top-[10%] lg:left-[-29%] lg:top-[-18%] md:left-[-39%] md:top-[-18%] sm:left-[-53%] sm:top-[-18%] max-[650px]:left-[-50%] max-[650px]:top-[-25%] scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".3"
                    style={{
                        transform: 'translate3d(2.7px,-19.1px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <span className="inline-block w-[630px] h-[630px] border-[102px] border-amber-400 rounded-[50%] "></span>
                </span>
            </div>

            <div
                className="hidden lg:block absolute -z-1 xl:right-[-36%] xl:top-[30%] lg:bottom-[-18%] lg:right-[-28%] scene"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span
                    data-depth=".4"
                    style={{
                        transform: 'translate3d(3.6px, -25.4px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <span className="inline-block w-[630px] h-[630px] border-[102px] border-amber-400 rounded-[50%]"></span>
                </span>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-row max-[1200px]:flex-col gap-26 max-[1200px]:gap-8 ml-0 
                max-[1140px]:ml-3 max-[1110px]:ml-10 max-[1075px]:ml-14 max-[1040px]:ml-18 max-[1024px]:ml-0 max-[890px]:ml-6 
                 max-[835px]:ml-11 max-[795px]:ml-16 max-[768px]:ml-1 max-[690px]:ml-7 max-[650px]:ml-10">
                    <div className="flex flex-col w-2/4 max-[1200px]:w-4/6 max-[640px]:w-full ">
                        <div className="absolute xl:left-[33%] max-[1280px]:left-[37%] max-[1280px]:top-[20%] 
                        max-[1200px]:left-[49%] max-[1200px]:top-[14%]  max-[650px]:top-[10%] max-[630px]:left-[60%] max-[590px]:left-[67%] max-[550px]:top-[10%] max-[500px]:top-[10%] top-44" style={{
                            transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            pointerEvents: 'none'
                        }}>
                            <span data-depth="" style={{
                                transform: 'translate3d(1.2px, -1.4px, 0px)',
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden',
                                display: 'block'
                            }}>
                                <img src={a1} alt="" />
                            </span>
                        </div>
                        <div className="absolute xl:left-[10%] xl:top-[77%] max-[1280px]:left-[17%] max-[1280px]:top-[49%] 
                        max-[1200px]:left-[23%] max-[1024px]:top-[44%] max-[768px]:top-[39%] max-[650px]:top-[37%] max-[630px]:top-[42%]
                        max-[590px]:top-[38%] max-[550px]:top-[39%] max-[500px]:top-[34%] max-[480px]:top-[33%] " style={{
                                transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden',
                                pointerEvents: 'none'
                            }}>
                            <span data-depth="" style={{
                                transform: 'translate3d(1.2px, -1.4px, 0px)',
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden',
                                display: 'block'
                            }}>
                                <img src={a2} alt="" />
                            </span>
                        </div>
                        <img src={img1} alt="" className="max-[1285px]:w-[986px] max-[650px]:w-[500px]" />
                    </div>
                    <div className="flex flex-col gap-2 w-2/4 max-[1200px]:w-5/6 max-[1024px]:w-full ">
                        <FadeInDown>
                            <p className="text-red-700 font-semibold uppercase"> About Us </p>
                        </FadeInDown>
                        <div className="flex flex-col gap-7">
                            <FadeInDown>
                                <h1 className="xl:text-5xl text-4xl max-[590px]:text-3xl font-extrabold uppercase leading-15 
                                tracking-tighter">Where Quality Meet Excelent Service</h1>
                            </FadeInDown>
                            <FadeInUp>
                                <p className="text-gray-700 w-5/6 leading-8 ">Discover the artistry of Sushi, a symphony of fresh flavors and textures. Our meticulously crafted bites showcase the perfect fusion of tradition...</p>
                            </FadeInUp>
                            <FadeInDown>
                                <p className="text-gray-700 w-5/6 leading-8">Our Sushi offerings are a symphony of fresh, high-quality ingredients meticulously crafted into bite-sized...</p>

                            </FadeInDown>
                        </div>
                        <FadeInUp>
                            <div className="flex mt-7 xl:justify-start sm:justify-between max-[590px]:flex-col max-[590px]:gap-12">

                                <div className="flex flex-col gap-5">
                                    <div className="flex rounded-full bg-blue-100 p-4 h-16 w-16 ">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <h4 className="text-xl font-semibold w-3/4">
                                        Fresh Perspective on Ideal Eating.
                                    </h4>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex rounded-full bg-blue-100 p-4 h-16 w-16 ">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <h4 className="text-xl font-semibold w-3/4">
                                        Premium Natural Ingredients.
                                    </h4>
                                </div>
                            </div>
                        </FadeInUp>

                        <div className="w-50 my-5 max-[590px]:w-2/4 max-[410px]:w-3/4">
                            <FadeInDown>
                                <Navbtn title="order now" />
                            </FadeInDown>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}