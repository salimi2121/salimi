import FadeInDown from "../../../FadeInDown"
import h1 from '../../../../assets/pages/history/h1.jpg'
import h2 from '../../../../assets/pages/history/h2.jpg'
import h3 from '../../../../assets/pages/history/h3.jpg'


export default function History1() {
    return (
        <div className="">
            <div className="flex pt-30 mx-auto  xl:px-30
         max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
         max-[530px]:px-7 max-[440px]:px-4">
                <div className="flex max-[992px]:flex-col gap-6 max-[992px]:gap-17 pb-30 border-b border-gray-200">
                    <div className="flex basis-1/2">
                        <FadeInDown>
                            <div className="flex flex-col gap-7  justify-start items-start ">
                                <div className="">
                                    <p className="text-red-700 font-semibold uppercase">Our History </p>
                                    <h1 className="text-start xl:text-[3.5rem] max-[1280px]:text-[3rem] max-[992px]:text-[2.4rem] max-[800px]:text-4xl max-[565px]:text-3xl 
                        w-[600px] max-[992px]:w-[500px] max-[800px]:w-[400px] max-[405px]:w-[300px] max-[405px]:font-bold font-extrabold tracking-tighter 
                        uppercase leading-15">key milestones and dates</h1>

                                </div>
                                <p className="font-semibold text-lg lg:w-full text-start text-gray-700">The Main Chef is a culinary virtuoso and the creative force behind the kitchen's gastronomic artistry. With a profound passion for food.</p>
                                <p className="font-semibold text-lg lg:w-full text-start text-gray-700">Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services.</p>
                                <div className="flex max-[768px]:flex-col gap-4 w-full">
                                    <img src={h1} alt="" className="w-full" />
                                    <img src={h2} alt="" className="w-full" />
                                </div>
                            </div>
                        </FadeInDown>

                    </div>
                    <div className="flex basis-1/2">
                        <img src={h3} alt="" className="w-full" />
                    </div>


                </div>

            </div>
        </div>
    )
}