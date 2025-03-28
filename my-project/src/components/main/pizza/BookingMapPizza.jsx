import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import { MdDateRange } from "react-icons/md";
import DateInput from "../sushi/DateInput";
import TimeSelectPizza from "./TimeSelectPizza";
import PeopleSelect from "../sushi/PeopleSelect";



export default function BookingMapPizza() {

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
        <div className="grid grid-cols-2 max-[1200px]:grid-cols-1">
            <div className="flex">
                <iframe
                    src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    class="w-full h-full min-h-[600px] border-0"
                    allowfullscreen>
                </iframe>
            </div>
            <FadeInUp>
                <div className="flex flex-col justify-center relative z-20 gap-2 w-full  px-24 max-[690px]:px-18 max-[650px]:px-15
                max-[600px]:px-6 max-[530px]:px-10 max-[440px]:px-5 py-30 tracking-tighter pb-30 bg-red-700">
                    <p className="text-white font-bold uppercase z-10">Table booking</p>
                    <h1 className="text-white md:text-5xl z-10 max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[405px]:font-bold font-extrabold uppercase">BOOK A TABLE</h1>
                    <p className=" text-lg z-10 max-[1200px]:w-[550px] max-[700px]:w-full max-[765px]:text-lg max-[565px]:text-[1rem] text-white font-semibold my-6">Happy Sunday Premium Pizza is a delightful blend of grilled chicken Italian sausage.</p>
                    <div className="relative flex max-[992px]:flex-col flex-row justify-start items-start max-[992px]:gap-1 gap-6 z-20 max-[1200px]:w-[600px] max-[800px]:w-full ">
                        <input type="text" className=" border lg:w-2/4 w-full z-20 border-white font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg mb-7 transition-all duration-300 ease-out placeholder-white" placeholder="Full name" />
                        <input type="text" className="border lg:w-2/4 w-full z-20 border-white font-semibold hover:outline-0 focus-visible:outline-0 text-white p-5 rounded-xl opacity-90 text-lg mb-7 transition-all duration-300 ease-out placeholder-white" placeholder="Email Address" />
                    </div>
                    <div className="relative flex max-[992px]:flex-col flex-row justify-start items-start max-[992px]:gap-1 gap-6 z-20 max-[1200px]:w-[600px] max-[800px]:w-full">
                        <div className="flex lg:w-2/4 w-full mb-7 border border-white rounded-xl"><PeopleSelect /></div>
                        <div className="flex lg:w-2/4 w-full mb-7 border-white border rounded-xl"><TimeSelectPizza /></div>
                    </div>
                    <div className=" min-w-50 w-[42%] max-[1200px]:w-1/4 bg-white hover:bg-green-600 hover:text-white hover:border-red-600 transition-bg duration-200 cursor-pointer flex justify-center 
                                   items-center text-red-600 rounded-xl font-bold text-xl xl:p-4 xl:px-5 p-3 px-10 max-[515px]:px-5 max-[420px]:px-2 capitalize ">
                        <a href={'#'}>Book a table</a>

                    </div>

                </div>
            </FadeInUp>

        </div>
    )
}