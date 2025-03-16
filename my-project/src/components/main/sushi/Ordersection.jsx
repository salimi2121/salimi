import delivery from "../../../assets/image-box-soshi/delivary-1.png"
import icon3 from "../../../assets/image-box-soshi/icon-3.svg"
import icon4 from "../../../assets/image-box-soshi/icon-4.svg"
import bgorder from "../../../assets/image-box-soshi/order-bg1.jpg"
import Navbtn from "../../header/Navbtn"
import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import FadeInRight from "../../FadeInRight"


export default function Ordersection() {
    return (
        <div>
            <div className="flex " style={{ backgroundImage: `url(${bgorder})` }}>
                <div className="container mx-auto flex max-[1200px]:flex-col max-[1200px]:w-4/6 max-[820px]:w-5/6 max-[800px]:w-full max-[1200px]:mx-32 max-[800px]:mx-20 max-[600px]:mx-5 max-[1200px]:justify-start justify-center items-center gap-3 xl:px-25 py-25">
                    <div className=" flex flex-col gap-7 basis-1/2 text-white">
                        <FadeInDown>
                            <div className="flex flex-col gap-2 my-7 max-[700px]:mb-2">
                                <span className="font-semibold tetx-lg uppercase">Fast delivery!</span>

                                <h2 className="text-[42px] max-[1200px]:text-3xl max-[700px]:text-2xl font-extrabold 
                                        uppercase leading-17 max-[475px]:leading-10">Fast Sushi Delivery Guaranteed</h2>
                            </div>
                        </FadeInDown>

                        <FadeInUp>
                            <p className="max-[1200px]:w-5/6 max-[940px]:w-full">We promise prompt delivery of our delicious sushi, ensuring it arrives swiftly, fresh, and guaranteed to delight your taste buds.</p>

                        </FadeInUp>
                        <div className="flex md:flex-row flex-col gap-8 max-[1200px]:gap-32 max-[940px]:gap-24 max-[895px]:gap-15 max-[770px]:w-2/4 max-[510px]:w-3/4 max-[350px]:w-full">
                            <div className="">
                                <FadeInDown>
                                    <div className="flex flex-col gap-5" >
                                        <div className="icon">
                                            <img src={icon3} alt="icon" />
                                        </div>
                                        <div className="">
                                            <h5 className="text-lg">Arrives within 30 minutes or less, guaranteed!</h5>
                                        </div>
                                    </div>
                                </FadeInDown>

                            </div>
                            <div className="">
                                {/* <!--=== Iconic Box ===--> */}
                                <FadeInDown>
                                    <div className="flex flex-col gap-5">
                                        <div className="icon">
                                            <img src={icon4} alt="icon" />
                                        </div>
                                        <div className="">
                                            <h5 className="text-lg">Enjoy free shipping on orders over 85%.</h5>
                                        </div>
                                    </div>
                                </FadeInDown>
                            </div>
                        </div>
                        {/* <!--=== Order Button ===--> */}
                        <FadeInUp>
                            <div className="flex">
                                <Navbtn title="order now" />
                            </div>
                        </FadeInUp>
                    </div>
                    <FadeInRight>
                        <div className="flex justify-center basis-1/2">
                            <img src={delivery} alt="" className="" />
                        </div>
                    </FadeInRight>
                </div>
            </div>
        </div>
    )
}