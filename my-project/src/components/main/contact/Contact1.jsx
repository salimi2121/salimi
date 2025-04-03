
import c1 from '../../../assets/content/c1.png'
import { MdOutlineLocationOn } from "react-icons/md";
import { FiMail } from "react-icons/fi";

export default function Contact1() {
    return (
        <div className="">
 <div className="mx-auto  xl:px-30
    max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
    max-[530px]:px-7 max-[440px]:px-4 bg-pink-50">
            <div className="flex max-[1200px]:w-full gap-15 max-[1280px]:gap-0 pt-20 max-[1200px]:pb-30">
                <div className="flex flex-col gap-3 justify-start items-start max-[1200px]:w-full max-w-[50%] max-[1200px]:max-w-full">
                    <p className="text-red-700 font-bold uppercase ">Get in touch</p>
                    <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[405px]:font-bold tracking-tighter leading-15 font-bold uppercase">have questions? get in touch!</h1>
                    <form className='flex flex-col gap-4 mt-8 w-full '>
                        <div className="flex max-[992px]:flex-col gap-4">
                            <input
                                className="w-2/4 max-[992px]:w-full border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                                type="text"
                                placeholder="Your Name"
                            />
                            <input
                                className="w-2/4 max-[992px]:w-full border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                                type="text"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="flex max-[992px]:flex-col gap-4">
                            <input
                                className="w-2/4 max-[992px]:w-full border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                                type="text"
                                placeholder="Your Subject"
                            />
                            <input
                                className="w-2/4 max-[992px]:w-full border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                                type="text"
                                placeholder="Your Service"
                            />
                        </div>

                        <textarea
                            className="border  border-gray-400 hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder"
                            rows="4"
                            placeholder="Write message"
                        />
                        <button
                            type="submit"
                            className="mt-2 w-50 font-bold text-xl bg-red-700 uppercase text-white py-4 rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
                        >
                            Submit Now
                        </button>
                    </form>

                </div>
                <div className="max-[1200px]:hidden">
                <img src={c1} alt="" /></div>
            </div>
           
        </div>
        <div className="mx-auto  xl:px-30
    max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
    max-[530px]:px-7 max-[440px]:px-4">
        <div className="grid grid-cols-3 max-[1140px]:grid-cols-2 max-[815px]:grid-cols-1 gap-5 bg-white py-35">
                <div className="flex flex-col gap-4 justify-center items-center bg-white py-10 px-16 rounded-xl capitalize shadow-contact">
                    <div className="flex justify-center items-center p-6 bg-pink-50 text-4xl text-red-700 rounded-full">
                    <MdOutlineLocationOn />
                    </div>
                    <h1 className="font-bold text-xl">address</h1>
                    <p className="text-gray-700 text-md font-semibold">4140 Parker Rd. Allentown, </p>
                    <p className="text-gray-700 text-md font-semibold">New Mexico 31134</p>

                </div>
                <div className="flex flex-col justify-center items-center gap-4 bg-white py-10 px-16 rounded-xl capitalize shadow-contact">
                    <div className="flex justify-center items-center p-6 bg-pink-50 text-4xl text-red-700 rounded-full">
                <FiMail />
                    </div>
                    <h1 className="font-bold text-xl">email</h1>
                  <a href="" className="">
                  <p className="text-gray-700 text-md font-semibold hover:text-red-700">foodixsupport@gmail.com</p>

                  </a>
                  <a href="" className="">
                  <p className="text-gray-700 text-md font-semibold hover:text-red-700">foodixinfo@gmail.com</p>

                  </a>

</div>
                <div className="flex flex-col justify-center items-center gap-4 max-[1140px]:col-span-2 max-[1140px]:justify-self-center max-[1140px]:w-1/2 max-[815px]:col-span-1 max-[815px]:w-full bg-white py-10 px-16 rounded-xl capitalize shadow-contact">
                <div className="flex justify-center items-center p-6 bg-pink-50 text-4xl text-red-700 rounded-full">
                    <MdOutlineLocationOn />
                    </div>
                    <h1 className="font-bold text-xl">phone</h1>
                    <p className="text-gray-700 text-md font-semibold hover:text-red-700 cursor-pointer">+555-123 456 7890</p>
                    <p className="text-gray-700 text-md font-semibold hover:text-red-700 cursor-pointer">+555-123 776 8875</p>

                </div>
            </div>
        </div>
        <div className="w-full">
        <iframe height="600" width="100%" src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>

        </div>
        </div>
       
    )
}