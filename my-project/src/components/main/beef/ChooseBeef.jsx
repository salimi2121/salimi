import BoxBeef from "./BoxBeef";
import Navbtn from "../../header/Navbtn"
import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import icon1 from '../../../assets/resturan-page/about-section/icon-1.svg'
import icon2 from '../../../assets/resturan-page/about-section/icon-2.svg'
import bg from '../../../assets/beef-page/choose-section/bg.png'
import ch1 from '../../../assets/beef-page/choose-section/ch1.png'



export default function ChooseBeef() {
    return (
        <div className="mx-auto py-10 xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
            <div className="flex max-[992px]:flex-col gap-7 max-[992px]:gap-40">
                <div className="flex basis-2/4 ">
                    <div className="relative flex items-center justify-center max-[1200px]:h-4/5 max-[1050px]:h-[73%] max-[992px]:h-full">
                        <div className="absolute top-0 left-0 flex items-center justify-center bg-cover w-[245px] h-[260px] max-[400px]:w-[220px] max-[400px]:h-[220px]" style={{backgroundImage : `url(${bg})`}}>
                            <h1 className=" max-w-full leading-9 text-center font-bold text-6xl z-0"> 
                                50% <span className="text-4xl tracking-tighter">Discount</span>
                                
                            </h1>

                        </div>
                        <img src={ch1} alt="" className="align-middle z-2 mt-10 max-[992px]:mt-35 max-[550px]:mt-40 " />
                        <div className="absolute left-[10%] max-[1024px]:left-0 max-[992px]:left-19 max-[550px]:left-9 
                        max-[500px]:left-0 max-[455px]:left-5 max-[400px]:left-10  bottom-4 max-[1200px]:bottom-9 max-[992px]:-bottom-17 
                        -z-1  text-9xl max-[1200px]:text-[7rem] max-[455px]:text-8xl max-[400px]:text-7xl uppercase " style={{ fontFamily: 'Barlow Condensed, sans-serif', WebkitTextFillColor: 'white' , WebkitTextStrokeWidth: '2px' ,WebkitTextStrokeColor: 'rgba(191, 17, 9, 0.2)', fontWeight: 700 }}>Delicious</div>
                    </div>

                </div>
                <div className="flex flex-col basis-2/4">
                    <FadeInDown>
                        <BoxBeef title="Why Choose US" />
                    </FadeInDown>
                    <div className="flex flex-col gap-5 mt-5">
                        <FadeInDown>
                            <h1 className="xl:text-[2.75rem] text-4xl max-[590px]:text-3xl xl:w-full max-[820px]:w-full font-extrabold uppercase leading-15 
                                tracking-tighter">Delicias about fresh flavorful dining</h1>
                        </FadeInDown>
                        <FadeInUp>
                            <p className="text-gray-700  leading-8 max-[820px]:w-[90%] max-[640px]:w-full">
                                We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared
                            </p>
                        </FadeInUp>

                    </div>
                    <FadeInUp>
                        <div className="grid grid-cols-2 max-[1200px]:grid-cols-1 max-[992px]:grid-cols-2 max-[730px]:grid-cols-1 mt-7 gap-7 xl:justify-start max-[590px]:gap-12 max-[1200px]:w-2/4 max-[1075px]:w-3/4 max-[992px]:w-full">

                            <div className="flex  gap-4 bg-gray-100 px-5 py-8 rounded-2xl">
                                <div className="flex rounded-full ">
                                    <img src={icon1} alt="" className="h-14 w-14" />
                                </div>
                                <div className="flex flex-col ">
                                    <h1 className="text-3xl font-bold">10+</h1>
                                    <h5 className="text-gray-700 tracking-tighter text-lg">Exclusive Biryani</h5>
                                </div>
                            </div>
                            <div className="flex gap-4  bg-gray-100 px-5 py-8 rounded-2xl">
                                <div className="flex rounded-full ">
                                    <img src={icon2} alt="" className="h-14 w-14" />
                                </div>
                                <div className="flex flex-col gap2">
                                    <h1 className="text-3xl font-bold">50+</h1>
                                    <h5 className="text-gray-700 tracking-tighter text-lg">Premium Kebab</h5>
                                </div>
                            </div>
                        </div>
                    </FadeInUp>

                    <div className="w-50 my-8 max-[590px]:w-2/4 max-[410px]:w-3/4">
                        <FadeInDown>
                            <Navbtn title="read more" />
                        </FadeInDown>

                    </div>
                </div>
            </div>
        </div>
    )
}