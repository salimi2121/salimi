import Navbtn from "../../header/Navbtn"
import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import ab1 from '../../../assets/resturan-page/about-section/ab1.png'
import icon1 from '../../../assets/resturan-page/about-section/icon-1.svg'
import icon2 from '../../../assets/resturan-page/about-section/icon-2.svg'


export default function AboutsectionRes() {
    return (
        <div className="relative overflow-hidden pb-20 z-1 ">
            <div className="flex max-[1280px]:flex-col px-27 gap-5 max-[820px]:px-19 max-[740px]:px-10 max-[640px]:px-5" >
                <div className="flex justify-center items-center max-[1280px]:mx-auto max-[1280px]:max-w-[650px] max-[1280px]:max-h-[650px]  max-w-[546px] max-h-[490px] ">
                    <img src={ab1} alt="" />
                </div>
                <div className="flex flex-col gap-2 justify-center max-[1280px]:mx-auto max-[1280px]:w-4/6 w-2/4 max-[1200px]:w-5/6 max-[1024px]:w-full ">
                    <FadeInDown>
                        <div className="flex gap-3">
                            <div>
                                <svg fill="#ffb200" height="25px" width="25px" version="1.1" id="Capa_1"
                                viewBox="0 0 511 511" xml:space="preserve"><g id="SVGRepo_bgCarrier" 
                                stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M503.5,368h-16.633c-1.866-59.024-25.72-114.244-67.672-156.195c-39.752-39.752-91.416-63.261-146.942-67.206l4.021-24.124 c1.018-6.106-0.694-12.318-4.696-17.042C267.577,98.709,261.731,96,255.46,96c-6.191,0-12.037,2.709-16.039,7.433 c-4.002,4.724-5.713,10.936-4.696,17.042l4.021,24.123c-55.526,3.945-107.19,27.454-146.942,67.206 C49.853,253.756,26,308.976,24.133,368H7.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h12.25l12.15,16.2 c7.42,9.894,19.233,15.8,31.6,15.8h384c12.367,0,24.18-5.906,31.6-15.8l12.15-16.2h12.25c4.142,0,7.5-3.358,7.5-7.5 S507.642,368,503.5,368z M253.854,144l-4.332-25.99c-0.399-2.395,0.671-4.086,1.345-4.881c0.673-0.795,2.166-2.129,4.673-2.129 c2.427,0,3.92,1.334,4.593,2.129c0.674,0.795,1.744,2.486,1.345,4.881L257.146,144H253.854z M102.411,222.411 C143.303,181.52,197.671,159,255.5,159s112.197,22.52,153.089,63.411c39.118,39.118,61.408,90.573,63.269,145.589H39.142 C41.003,312.984,63.293,261.53,102.411,222.411z M447.5,400h-384c-7.67,0-14.998-3.664-19.6-9.8l-5.4-7.2h434l-5.4,7.2 C462.498,396.336,455.17,400,447.5,400z"></path> <path d="M338.674,194.114c-3.767-1.729-8.217-0.078-9.946,3.685c-1.729,3.764-0.079,8.217,3.685,9.946 c23.566,10.823,44.25,26.211,61.48,45.738c1.482,1.68,3.549,2.538,5.626,2.538c1.763,0,3.533-0.618,4.959-1.876 c3.106-2.74,3.402-7.48,0.661-10.586C386.518,222.452,364.155,205.816,338.674,194.114z"></path> <path d="M305.355,182.282c-5.458-1.404-11.048-2.59-16.615-3.524c-4.083-0.688-7.953,2.07-8.638,6.155 c-0.686,4.085,2.07,7.952,6.155,8.638c5.146,0.864,10.314,1.96,15.36,3.258c0.626,0.161,1.255,0.238,1.874,0.238 c3.34,0,6.387-2.249,7.258-5.633C311.782,187.403,309.367,183.314,305.355,182.282z"></path> </g> </g></svg>
                            </div>
                            <p className="text-[#ffb200] font-semibold uppercase"> About Us </p>
                        </div>
                    </FadeInDown>
                    <div className="flex flex-col gap-5">
                        <FadeInDown>
                            <h1 className="xl:text-5xl text-4xl max-[590px]:text-3xl xl:w-full max-[820px]:w-full font-extrabold uppercase leading-15 
                                tracking-tighter">Delicia's about fresh flavorful dining</h1>
                        </FadeInDown>
                        <FadeInUp>
                            <p className="text-gray-700  leading-8 max-[1280px]:w-5/6 max-[820px]:w-[90%] max-[640px]:w-full">We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared to deliver a memorable dining experience you'll love.</p>
                        </FadeInUp>

                    </div>
                    <FadeInUp>
                        <div className="grid grid-cols-2 max-[640px]:grid-cols-1 mt-7 gap-7 xl:justify-start max-[590px]:gap-12 max-[1280px]:w-[90%] max-[640px]:w-full">

                            <div className="flex  gap-4 bg-gray-100 px-5 py-8 rounded-2xl">
                                <div className="flex rounded-full ">
                                    <img src={icon1} alt="" className="h-14 w-14" />
                                </div>
                                <div className="flex flex-col ">
                                    <h1 className="text-3xl font-bold">1500+</h1>
                                    <h5 className="text-gray-600 tracking-tighter text-xl">Total Food Item</h5>
                                </div>
                            </div>
                            <div className="flex gap-4  bg-gray-100 px-5 py-8 rounded-2xl">
                                <div className="flex rounded-full ">
                                    <img src={icon2} alt="" className="h-14 w-14" />
                                </div>
                                <div className="flex flex-col gap2">
                                    <h1 className="text-3xl font-bold">500+</h1>
                                    <h5 className="text-gray-600 tracking-tighter text-xl">Branch office</h5>
                                </div>
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
    )
}
