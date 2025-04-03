import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import ch1 from '../../../assets/resturan-page/chef-section/ch1.jpg'
import ch2 from '../../../assets/resturan-page/chef-section/ch2.jpg'
import ch3 from '../../../assets/resturan-page/chef-section/ch3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";



export default function ChefResSection() {
    const chefs = [
        {
            id: 1,
            category: 'chef',
            position: 'CEO',
            firstname: 'David ',
            lastname: 'Liam',
            image: ch1,
            href: ''
        }, {
            id: 2,
            category: 'chef',
            position: ' Excutive Chef ',
            firstname: 'Alex',
            lastname: 'Mika',
            image: ch2,
            href: ''
        }, {
            id: 3,
            category: 'chef',
            position: ' Excutive Chef ',
            firstname: 'John ',
            lastname: 'Smith',
            image: ch3,
            href: ''
        },
    ]

    return (
        <div className="container mx-auto px-0 max-[1150px]:px-4 max-[1115px]:px-7 max-[1090px]:px-12 max-[1060px]:px-15 max-[1024px]:px-0 max-[900px]:px-2 
             max-[880px]:px-4 max-[850px]:px-10 max-[810px]:px-15 max-[768px]:px-4 max-[670px]:px-0 max-[660px]:px-8 max-[645px]:px-12 max-[600px]:px-6 
             max-[500px]:px-6 py-30">
            <div className="flex flex-col gap-15">
                <FadeInDown>
                    <div className="flex flex-col gap-5 justify-center items-center ">
                        <div className="flex gap-3">
                            <div>
                                <svg fill="#ffb200" height="25px" width="25px" version="1.1" id="Capa_1"
                                    viewBox="0 0 511 511" xml:space="preserve"><g id="SVGRepo_bgCarrier"
                                        stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M503.5,368h-16.633c-1.866-59.024-25.72-114.244-67.672-156.195c-39.752-39.752-91.416-63.261-146.942-67.206l4.021-24.124 c1.018-6.106-0.694-12.318-4.696-17.042C267.577,98.709,261.731,96,255.46,96c-6.191,0-12.037,2.709-16.039,7.433 c-4.002,4.724-5.713,10.936-4.696,17.042l4.021,24.123c-55.526,3.945-107.19,27.454-146.942,67.206 C49.853,253.756,26,308.976,24.133,368H7.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h12.25l12.15,16.2 c7.42,9.894,19.233,15.8,31.6,15.8h384c12.367,0,24.18-5.906,31.6-15.8l12.15-16.2h12.25c4.142,0,7.5-3.358,7.5-7.5 S507.642,368,503.5,368z M253.854,144l-4.332-25.99c-0.399-2.395,0.671-4.086,1.345-4.881c0.673-0.795,2.166-2.129,4.673-2.129 c2.427,0,3.92,1.334,4.593,2.129c0.674,0.795,1.744,2.486,1.345,4.881L257.146,144H253.854z M102.411,222.411 C143.303,181.52,197.671,159,255.5,159s112.197,22.52,153.089,63.411c39.118,39.118,61.408,90.573,63.269,145.589H39.142 C41.003,312.984,63.293,261.53,102.411,222.411z M447.5,400h-384c-7.67,0-14.998-3.664-19.6-9.8l-5.4-7.2h434l-5.4,7.2 C462.498,396.336,455.17,400,447.5,400z"></path> <path d="M338.674,194.114c-3.767-1.729-8.217-0.078-9.946,3.685c-1.729,3.764-0.079,8.217,3.685,9.946 c23.566,10.823,44.25,26.211,61.48,45.738c1.482,1.68,3.549,2.538,5.626,2.538c1.763,0,3.533-0.618,4.959-1.876 c3.106-2.74,3.402-7.48,0.661-10.586C386.518,222.452,364.155,205.816,338.674,194.114z"></path> <path d="M305.355,182.282c-5.458-1.404-11.048-2.59-16.615-3.524c-4.083-0.688-7.953,2.07-8.638,6.155 c-0.686,4.085,2.07,7.952,6.155,8.638c5.146,0.864,10.314,1.96,15.36,3.258c0.626,0.161,1.255,0.238,1.874,0.238 c3.34,0,6.387-2.249,7.258-5.633C311.782,187.403,309.367,183.314,305.355,182.282z"></path> </g> </g></svg>
                            </div>
                            <p className="text-[#ffb200] font-semibold uppercase"> Our Special Chefs </p>
                        </div>
                        <h1 className="xl:text-[3.5rem] max-[1280px]:text-[3rem] max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl 
                        max-[565px]:px-4 md:w-4/6 max-[405px]:font-bold text-center font-extrabold tracking-tighter 
                        uppercase">Introducing Our Culinary Masters</h1>
                    </div>
                </FadeInDown>
                <FadeInUp>
                    <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6 justify-center items-center px-24 max-[1310px]:px-28 max-[1280px]:px-0 ">
                        {chefs.map((chef , index) => (
                            <div key={index}
                            className={`relative flex items-center justify-center  ${
                                chefs.length % 2 !== 0 && index === chefs.length - 1 
                                ? "max-[1100px]:col-span-2 max-[1100px]:justify-self-center max-[1100px]:w-1/2 max-[768px]:col-span-1 max-[768px]:w-full" 
                                : ""
                            }`} >
                                <img src={chef.image} alt={chef.firstname} className="flex-shrink-0" />
                                <div className="absolute bottom-4 flex flex-col justify-center transition-all duration-200 ease-in group-hover:bg-red-700 tracking-tighter items-center bg-white w-4/5 max-[768px]:w-3/5 max-[630px]:w-[70%] max-[560px]:w-[80%] p-6">
                                    <h1 className="font-bold text-2xl capitalize group-hover:text-white">{chef.firstname} {chef.lastname}</h1>
                                    <p className="text-lg  text-gray-700 group-hover:text-red-300">{chef.position}</p>
                                </div>
                                <div className="absolute top-8 left-8 group-hover:flex flex-col  gap-2 hidden ">
                                    <FadeInUp>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-red-700 hover:text-white transition-all duration-200 ease-in"><FaFacebookF /></div>

                                    </FadeInUp>
                                    <FadeInUp>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-red-700 hover:text-white transition-all duration-200 ease-in"><IoLogoTwitter /></div>
                                    </FadeInUp>
                                    <FadeInUp>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-red-700 hover:text-white transition-all duration-200 ease-in"><GrInstagram /></div>

                                    </FadeInUp>
                                    <FadeInUp>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-700 cursor-pointer bg-white text-red-700 hover:text-white transition-all duration-200 ease-in"><IoLogoYoutube /></div>

                                    </FadeInUp>

                                </div>
                            </div>

                        ))

                        }
                    </div>
                </FadeInUp>
            </div>

        </div>
    )
}