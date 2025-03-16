import BoxBeef from "./BoxBeef";
import of1 from '../../../assets/beef-page/offer-section/of1.jpg'
import of2 from '../../../assets/beef-page/offer-section/of2.jpg'
import of3 from '../../../assets/beef-page/offer-section/of3.jpg'
import Navbtn from "../../header/Navbtn";


export default function OfferBeefSection() {
    return (
        <div className=" mx-auto py-20 xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                <div className="flex flex-col gap-15">
                    <div className="flex flex-col gap-4">
                        <BoxBeef title="Food Items" />
                        <h1 className="font-extrabold text-4xl tracking-tighter max-w-70 uppercase">Our Delicious Offerings</h1>
                    </div>
                    <div className="flex">
                        <img src={of1} alt="" className="rounded-2xl w-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex">
                        <img src={of2} alt="" className="rounded-2xl w-full" />

                    </div>
                    <div className="flex flex-col items-center justify-between gap-6">
                        <div class="flex items-center justify-center text-white bg-red-700 mr-2 mt-6 w-17 h-17 rounded-full">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 16 16" height="2em" width="2em" >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 
                            4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-2xl font-bold">Get online order now</h1>
                            <p className="text-2xl font-bold text-red-700 ">0-800-345-8789</p>
                            <Navbtn title="order now" />
                        </div>
                    </div>
                </div>
                <div className="flex  ">
                    <img src={of3} alt="" className="rounded-2xl w-full h-full " />

                </div>
            </div>
        </div>
    )
}