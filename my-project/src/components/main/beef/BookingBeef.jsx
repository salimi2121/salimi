import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import bg9 from '../../../assets/beef-page/booking/bg9.jpg'
import DateInput from "../../main/sushi/DateInput";
import PeopleSelect from "../../main/sushi/PeopleSelect";
import { MdDateRange } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function BookingBeef() {
    const dateInputStyle = {
        border: '1px solid #4a5565',
        fontSize: '16px',
        outline: 'none',
        with: '100%',
        transition: 'all 0.3s',
        color: '#ffffff',
    };
    return (
        <div className="relative  overflow-hidden py-30 z-1 px-33 max-[1280px]:px-0 max-[1160px]:px-18 max-[1024px]:px-0 max-[890px]:px-18 
        max-[740px]:px-8 max-[710px]:px-11 max-[600px]:px-6 max-[530px]:px-8 max-[440px]:px-5 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg9})` }} >
            <div className="absolute top-0 left-0 w-full h-full -z-1 "style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}></div>
            <div className="container mx-auto">
                <div className="flex gap-7 max-[1024px]:flex-col text-white">
                    <div className="w-2/4 max-[1024px]:w-full ">
                        <FadeInDown>
                            <div className="flex flex-col max-[1024px]:justify-start max-[1024px]:items-start gap-1 my-7 max-[700px]:mb-2">
                                <div className="flex justify-center items-center gap-3 text-black bg-[#fcb109] w-fit py-2 px-4 rounded-lg">
                                    <div>
                                        <svg fill="#000" height="18px" width="18px" version="1.1" id="Capa_1"
                                            viewBox="0 0 511 511" xml:space="preserve"><g id="SVGRepo_bgCarrier"
                                                stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M503.5,368h-16.633c-1.866-59.024-25.72-114.244-67.672-156.195c-39.752-39.752-91.416-63.261-146.942-67.206l4.021-24.124 c1.018-6.106-0.694-12.318-4.696-17.042C267.577,98.709,261.731,96,255.46,96c-6.191,0-12.037,2.709-16.039,7.433 c-4.002,4.724-5.713,10.936-4.696,17.042l4.021,24.123c-55.526,3.945-107.19,27.454-146.942,67.206 C49.853,253.756,26,308.976,24.133,368H7.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h12.25l12.15,16.2 c7.42,9.894,19.233,15.8,31.6,15.8h384c12.367,0,24.18-5.906,31.6-15.8l12.15-16.2h12.25c4.142,0,7.5-3.358,7.5-7.5 S507.642,368,503.5,368z M253.854,144l-4.332-25.99c-0.399-2.395,0.671-4.086,1.345-4.881c0.673-0.795,2.166-2.129,4.673-2.129 c2.427,0,3.92,1.334,4.593,2.129c0.674,0.795,1.744,2.486,1.345,4.881L257.146,144H253.854z M102.411,222.411 C143.303,181.52,197.671,159,255.5,159s112.197,22.52,153.089,63.411c39.118,39.118,61.408,90.573,63.269,145.589H39.142 C41.003,312.984,63.293,261.53,102.411,222.411z M447.5,400h-384c-7.67,0-14.998-3.664-19.6-9.8l-5.4-7.2h434l-5.4,7.2 C462.498,396.336,455.17,400,447.5,400z"></path> <path d="M338.674,194.114c-3.767-1.729-8.217-0.078-9.946,3.685c-1.729,3.764-0.079,8.217,3.685,9.946 c23.566,10.823,44.25,26.211,61.48,45.738c1.482,1.68,3.549,2.538,5.626,2.538c1.763,0,3.533-0.618,4.959-1.876 c3.106-2.74,3.402-7.48,0.661-10.586C386.518,222.452,364.155,205.816,338.674,194.114z"></path> <path d="M305.355,182.282c-5.458-1.404-11.048-2.59-16.615-3.524c-4.083-0.688-7.953,2.07-8.638,6.155 c-0.686,4.085,2.07,7.952,6.155,8.638c5.146,0.864,10.314,1.96,15.36,3.258c0.626,0.161,1.255,0.238,1.874,0.238 c3.34,0,6.387-2.249,7.258-5.633C311.782,187.403,309.367,183.314,305.355,182.282z"></path> </g> </g></svg>
                                    </div>
                                    <p className=" font-semibold uppercase">  Reservation </p>
                                </div>
                                <h2 className="text-[2.7rem] max-[1200px]:text-3xl max-[700px]:text-2xl font-extrabold 
                                        uppercase leading-17 max-[475px]:leading-10">
                                    Need reservation? booking your table now
                                </h2>
                                <div className="flex flex-col mt-10">
                                    <p className="text-[#ffb200] font-semibold capitalize"> Order online </p>
                                    <a href={'#'} className="bg-red-700 mt-3 hover:bg-green-600 hover:text-white
                                  transition-all duration-300 ease-out cursor-pointer flex justify-center 
                                   items-center text-white rounded-xl font-bold text-xl w-3/6  xl:p-4 
                                   xl:px-15 p-3 px-10 max-[1024px]:w-full max-[515px]:px-5 max-[420px]:px-2 capitalize ">
                                        <span className="text-white rotate-y-180 mr-2"><BsTelephone /> </span>
                                        +555-657-887
                                    </a>
                                </div>
                            </div>
                        </FadeInDown>

                    </div>
                    <div className="w-2/4 max-[1024px]:w-full ">
                        <FadeInUp>

                            <div className="flex justify-center items-center py-12 px-7 bg-[#14a83a] rounded-2xl">
                                <div className="flex flex-col max-[1024px]:w-full gap-7">
                                    <h1 className="font-extrabold text-xl text-center uppercase">Create An Booking Table</h1>
                                    <div className="grid grid-cols-2 max-[1024px]:grid-cols-1 gap-6">
                                        <input type="text" className=" border z-20 border-[#37b557] font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg bg-[#20ac44] transition-all duration-300 ease-out placeholder-white" placeholder="Enter your name" />
                                        <input type="text" className=" border z-20 border-[#37b557] font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg bg-[#20ac44] transition-all duration-300 ease-out placeholder-white" placeholder="Enter your Email " />
                                        <input type="text" className=" border z-20 border-[#37b557] font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg bg-[#20ac44] transition-all duration-300 ease-out placeholder-white" placeholder="Enter your Phone" />
                                        <span className="absolute top-[45%] right-[53%] max-[1024px]:top-[47%] max-[380px]:top-[49%] max-[1024px]:right-11 z-20 text-white rotate-y-180 mr-2"><BsTelephone /> </span>

                                        <div className="relative flex text-white bg-[#20ac44] border border-[#37b557] rounded-xl">
                                            <DateInput inputStyle={dateInputStyle} />
                                            <span className="absolute right-5 top-6 text-white text-xl"><MdDateRange /></span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-[#20ac44] border border-[#37b557] rounded-xl  "><PeopleSelect /></div>

                                    <div className="bg-yellow-500 hover:bg-red-600 hover:text-white transition-bg duration-200 cursor-pointer flex justify-center 
                                   items-center text-black rounded-xl font-bold text-xl mx-auto w-full xl:p-4 xl:px-15 p-3 px-10 max-[515px]:px-5 max-[420px]:px-2 capitalize ">
                                        <a href={'#'}>Book a table</a>
                                    </div>
                                </div>


                            </div>
                        </FadeInUp>
                    </div>

                </div>
            </div>

        </div>
    )
}