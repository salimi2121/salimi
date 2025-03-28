import delivery from "../../../assets/burger-page/delivery-section/img.png"
import bgorder from "../../../assets/burger-page/delivery-section/bg.jpg"
import Navbtn from "../../header/Navbtn"
import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import FadeInRight from "../../FadeInRight"


export default function DeliveryBurger() {
    return (
        <div>
            <div className="flex xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4" style={{ backgroundImage: `url(${bgorder})` }}>
                <div className=" mx-auto flex max-[992px]:flex-col max-[1200px]:justify-start 
                justify-center items-center gap-3 py-10">
                    <div className=" flex flex-col basis-1/2 text-white">
                        <FadeInDown>
                            <div className="flex flex-col gap-2 my-4 max-[700px]:mb-2">
                                <span className="font-bold tetx-lg uppercase">Fast delivery!</span>
                                <h2 className="text-[52px] max-[1200px]:text-4xl max-[700px]:text-[33px] tracking-tighter font-bold 
                                        uppercase leading-15 max-[475px]:leading-10">Speedy Delivery for Your Burger!</h2>
                            </div>
                        </FadeInDown>
                        <FadeInUp>
                            <p className=" max-[940px]:w-full">Get your burger lightning-fast! Swift delivery ensures your favorite flavors reach you promptly for ultimate satisfaction.</p>
                        </FadeInUp>
                        {/* <!--=== Order Button ===--> */}
                        <FadeInUp>
                            <div className="flex mt-9">
                                <Navbtn title="order now" />
                            </div>
                        </FadeInUp>
                    </div>
                    <div className="flex justify-center basis-1/2">
                        <FadeInRight>
                            <img src={delivery} alt="" className="" />
                        </FadeInRight>
                    </div>

                </div>
            </div>
        </div>
    )
}