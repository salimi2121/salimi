import icon1 from "../../assets/about-soshi/icon1.png"
import icon2 from "../../assets/about-soshi/icon2.png"
import img1 from "../../assets/about-soshi/about-1.png"
import a1 from "../../assets/about-soshi/a1.png"
import a2 from "../../assets/about-soshi/a2.png"


import Navbtn from "../header/Navbtn"


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
            <div className="container">
                <div className="flex xl:flex-row flex-col xl:gap-26 gap-8 xl:ml-0 sm:ml-36 max-[650px]:ml-10">
                    <div className="flex flex-col xl:w-2/4">
                        <div className="absolute xl:left-[33%] lg:left-[52%] md:left-[60%] sm:left-[80%] max-[650px]:right-[3px] top-44" style={{
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
                        <div className="absolute xl:left-[10%] xl:top-[83%] lg:left-[16%] lg:top-[50%] md:left-[17%] 
                        md:top-[47%] sm:left-[17%] sm:top-[40%] max-[650px]:top-[42%] max-[550px]:top-[37%] max-[500px]:top-[33%] " style={{
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

                        <img src={img1} alt="" className="xl:w-[586px] lg:w-[635px] max-[650px]:w-[500px]"  />
                    </div>
                    <div className="flex flex-col gap-2 xl:w-2/4 lg:w-3xl ">
                        <p className="text-red-700 font-semibold uppercase"> About Us </p>
                        <div className="flex flex-col gap-7">
                            <h1 className="xl:text-5xl sm:text-4xl font-extrabold uppercase leading-15">Where Quality Meet Excelent Service</h1>
                            <p className="text-gray-700 ">Discover the artistry of Sushi, a symphony of fresh flavors and textures. Our meticulously crafted bites showcase the perfect fusion of tradition...</p>
                            <p className="text-gray-700 w-5/6">Our Sushi offerings are a symphony of fresh, high-quality ingredients meticulously crafted into bite-sized...</p>
                        </div>
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
                        <div className="w-50 my-5 max-[590px]:w-2/4 max-[410px]:w-3/4">
                            <Navbtn title={title} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}