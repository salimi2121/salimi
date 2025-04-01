import Navbtn from "../../../header/Navbtn"
import CheckBox from "./CheckBox"

export default function Chekout2() {
    return (
        <div className="mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4 py-20 ">
            <div className="flex max-[1280px]:flex-col  justify-between">
                <div className="flex flex-col gap-4 w-4/6 max-[1280px]:w-full max-[1330]:mr-3">
                    <h1 className="font-bold text-2xl tracking-tighter">Billing Details</h1>
                    <div className="flex max-[992px]:flex-col gap-6 w-full">
                        <div className="flex flex-col w-2/4 max-[992px]:w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">First Name*</label>
                            <input type="text" className=" border w-full border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700  text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="First Name" />
                        </div>
                        <div className="flex flex-col w-2/4 max-[992px]:w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">Last Name*</label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">Company Name</label>
                            <input type="text" className=" border w-full border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Your Company Name" />
                        </div>

                    </div> <div className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">Address*</label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Street Address" />
                        </div>

                    </div> <div className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800"></label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Apzrtment,suite,unit ect.(optional)" />
                        </div>

                    </div> <div className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800"></label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Town / City" />
                        </div>

                    </div>
                    <div className="flex max-[992px]:flex-col gap-6 w-full">
                        <div className="flex flex-col w-2/4 max-[992px]:w-full gap-4 ">
                            <label htmlFor="" className="font-semibold text-gray-800">Country*</label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700  text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="United Kingdom (UK)" />
                        </div>
                        <div className="flex flex-col w-2/4 max-[992px]:w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">Postcode / Zip*</label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Postcode / Zip*" />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">Contact Info*</label>
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Email Address" />
                        </div>

                    </div> <div className="flex w-full">
                        <div className="flex flex-col w-full">
                            <input type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Your Phone" />
                        </div>

                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col w-full gap-4">
                            <label htmlFor="" className="font-semibold text-gray-800">Order Notes (optional)</label>
                            <textarea type="text" className=" border  border-gray-400 font-semibold hover:outline-0 focus-visible:outline-0 focus:border-red-700 text-gray-800 bg-white p-5 pl-7 rounded-xl  text-lg  mb-4 transition-all duration-300 ease-out placeholder" placeholder="Notes about your order, e.g. special notes for delivery." />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl tracking-tighter">Your order</h1>
                        <div className="flex flex-col gap-2 max-h-90 bg-[#f7f1e1] p-10 rounded-xl">
                            <div className="flex flex-col capitalize">
                                <div className="flex justify-between border-b text-gray-700 font-semibold border-gray-200 py-3">
                                    <p className="">cart subtotal</p>
                                    <p className="">$270</p>
                                </div>
                                <div className="flex justify-between border-b text-gray-700 font-semibold border-gray-200 py-3">
                                    <p className="">shopping fee</p>
                                    <p className="">$50</p>
                                </div>
                                <div className="flex justify-between font-semibold py-4">
                                    <p className="">order total</p>
                                    <p className="">$320</p>
                                </div>
                            </div>
                            <a href="" className="font-semibold">Have A Coupon ?</a>
                            <div className="max-[1280px]:w-70 max-[360px]:w-67 mt-6">
                                <Navbtn title='proceed to chekout' />

                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#f7f1e1]">
                        <h1 className="text-xl font-bold tracking-tighter">Payment Method</h1>
                        <div className="flex flex-col border border-gray-300 p-4">
                            <CheckBox />
                        </div>
                        <p className="text-md leading-8 w-74 max-[1280px]:w-200 max-[1200px]:w-full text-gray-700">
                        We will utilize your personal data to process your order, enhance your experience on our website, and for other purposes outlined in our privacy policy.
                        </p>
                        <div className="w-50">
                            <Navbtn title='place order' />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}