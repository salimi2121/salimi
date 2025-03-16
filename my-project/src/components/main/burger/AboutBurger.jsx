import Navbtn from "../../header/Navbtn"
import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import icon1 from '../../../assets/burger-page/about-section/icon11.svg'
import icon2 from '../../../assets/burger-page/about-section/icon1.svg'
import a1 from '../../../assets/burger-page/about-section/a1.jpg'
import a2 from '../../../assets/burger-page/about-section/a2.jpg'
import a3 from '../../../assets/burger-page/about-section/a3.jpg'



export default function AboutBurger() {
    return (
        <div className="relative overflow-hidden py-30 z-1 bg-pink-50 ">
            <div className="flex max-[1024px]:flex-col px-27 gap-5 w-full max-w-full xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4
              justify-between items-center z-10 max-[1285px]:px-4" >
                <div className="flex flex-col gap-1 w-2/4  max-[1024px]:w-full ">
                    <FadeInDown>
                        <p className="text-red-700 font-semibold uppercase"> About Us </p>
                    </FadeInDown>
                    <div className="flex flex-col gap-5">
                        <FadeInDown>
                            <h1 className="xl:text-[2.82rem] text-4xl max-[590px]:text-3xl w-full font-extrabold uppercase leading-15 
                                tracking-tighter">Our new Town's House</h1>
                        </FadeInDown>
                        <FadeInUp>
                            <p className="text-gray-700 text-lg font-semibold leading-8 ">Delighting locals with our unparalleled burgers, each bite embodies our dedication to excellence embodies our dedication to excellence..</p>
                        </FadeInUp>

                    </div>
                    <FadeInUp>
                        <div className="flex md:justify-start sm:justify-between mt-5 gap-30 max-[590px]:flex-col max-[590px]:gap-12">

                            <div className="flex flex-col gap-3">
                                <div className="flex rounded-full bg-green-600 p-4 h-16 w-16 ">
                                    <img src={icon1} alt="" />
                                </div>
                                <h4 className="text-lg font-semibold w-3/4">
                                    Fresh Perspective on Ideal Eating.
                                </h4>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex rounded-full bg-green-600 p-4 h-16 w-16 ">
                                    <img src={icon2} alt="" />
                                </div>
                                <h4 className="text-lg font-semibold w-3/4">
                                    Premium Natural Ingredients.
                                </h4>
                            </div>
                        </div>
                    </FadeInUp>

                    <div className="w-50 my-5 max-[590px]:w-2/4 max-[410px]:w-3/4">
                        <FadeInDown>
                            <Navbtn title="read more" />
                        </FadeInDown>

                    </div>
                </div>

                <div className="grid grid-cols-2  max-[1024px]:grid-cols-1 gap-6 w-2/4 max-[1024px]:w-full">
                    <div className="grid grid-cols-1 gap-7">
                        <img src={a1} alt="" className="rounded-xl  max-[1024px]:w-full" />
                        <img src={a2} alt="" className="rounded-xl max-[1024px]:w-full"/>
                    </div>
                    <div className="flex ">
                        <img src={a3} alt="" className="rounded-xl max-[1024px]:w-full"/>
                    </div>
                </div>

            </div>

        </div>
    )
}
