import FadeInDown from "../../FadeInDown";
import { useData } from "../../../ClientContext";
import Carousel from "../../Carousel";




export default function Testimonial() {

    const { clients } = useData(); // Retrieve clients from ClientContext 

    return (
        <div className=" bg-pink-100 pb-12 xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[740px]:px-10 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4">

            <div className="flex flex-col gap-4 justify-center items-center py-24 ">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <p className="text-red-700 font-bold uppercase "> Testimonial </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Client Reviews</h1>
                        <p className="lg:w-2/4 sm:w-3/4 text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem]
                                    text-gray-800 text-center mt-2">Indulge in an array of meticulously crafted sushi rolls, artfully blending fresh ingredients for a delightful taste experience.</p>
                    </div>
                </FadeInDown>
                
            </div>
            
            <div >
                <Carousel items={clients} />
            </div>
        </div>
    )
}