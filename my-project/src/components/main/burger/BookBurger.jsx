import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import { MdDateRange } from "react-icons/md";
import DateInput from "../sushi/DateInput";
import TimeSelect from "../sushi/TimeSelect";
import PeopleSelect from "../sushi/PeopleSelect";
import bg from '../../../assets/burger-page/booking/bg.png'

export default function BookBurger() {
    const reactdatepickerwrapper = {
        with: '100%'
    }

    const dateInputStyle = {
        border: '1px solid #4a5565',
        fontSize: '16px',
        outline: 'none',
        with: '100%',
        transition: 'all 0.3s',
        color: '#ffffff',
    };

    return (
        <div className="bg-cover bg-fixed z-1 relative before:absolute before:-z-10 before:content-[''] before:opacity-80 before:bg-gray-950 before:top-0 before:left-0 before:w-full before:h-full " style={{ backgroundImage: `url(${bg})` }}>
            <div className="px-27 gap-5 w-full max-w-full xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-start items-start pt-20 pb-10 ">
                        <p className="text-white font-bold uppercase z-10">Reservation </p>
                        <h1 className="text-white md:text-5xl z-10 max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">BOOK A TABLE</h1>
                        <p className="lg:w-2/4 sm:w-3/4 text-lg z-10 max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem] text-white mt-2">Resy is another popular restaurant reservations. can explore restaurants, menus, and make reservations through their website.</p>
                    </div>
                </FadeInDown>
                <FadeInUp>
                    <div className="flex flex-col justify-center relative z-20 gap-1 lg:w-2/4 w-full pb-30 ">
                        <input type="text" className=" border z-20 border-gray-600 font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg bg-white/5 mb-7 transition-all duration-300 ease-out placeholder-white" placeholder="Enter your name" />
                        <input type="text" className="border z-20 border-gray-600 font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg bg-white/5 mb-7 transition-all duration-300 ease-out placeholder-white" placeholder="Enter your Email " />
                        <div className="relative flex lg:flex-row flex-col justify-start items-start gap-2 lg:gap-6 z-20 ">
                            <div className="flex lg:w-2/4 w-full mb-7 border border-gray-600 rounded-xl bg-white/5"><PeopleSelect /></div>
                            <div className="relative flex lg:w-2/4 w-full mb-7 text-white bg-white/5 rounded-xl border  border-gray-600">
                                <DateInput inputStyle={dateInputStyle} />
                                <span className="absolute right-5 top-6 text-white text-xl"><MdDateRange /></span>
                            </div>
                        </div>
                        <div className="relative flex lg:flex-row flex-col justify-start items-start gap-2 lg:gap-6 z-20">
                            <div className="flex lg:w-2/4 w-full rounded-2xl mb-7 bg-white/5"><TimeSelect /></div>
                            <input type="text" className=" border lg:w-2/4 w-full z-20 border-gray-600 font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg bg-white/5 mb-7 transition-all duration-300 ease-out placeholder-white" placeholder="Enter your Phone" />

                        </div>
                        <div className="bg-green-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-bg duration-200 cursor-pointer flex justify-center 
                                   items-center text-white rounded-xl font-bold text-xl xl:p-4 xl:px-15 p-3 px-10 max-[515px]:px-5 max-[420px]:px-2 capitalize border border-green-400">
                            <a href={'#'}>Book a table</a>

                        </div>

                    </div>
                </FadeInUp>

            </div>

        </div>
    )
}