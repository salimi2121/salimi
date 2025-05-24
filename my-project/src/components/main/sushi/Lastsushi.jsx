import imgmenu2 from "../../../assets/section-menu2/figure-1.jpg"
import { useData } from '../../../DataContext';
import FadeInDown from "../../FadeInDown";
import FadeInRight from "../../FadeInRight";
import FadeInUp from "../../FadeInUp";


export default function Lastsushi() {
    const { foods } = useData();
    const filteredSushi = foods.filter(food => food.category === 'sushi');
    // انتخاب ۵ آیتم آخر  
    const lastSushiItems = filteredSushi.slice(-4);

    return (
        <div>
            <FadeInDown>
                <div className="flex flex-col gap-4 justify-center items-center bg-white py-24 ">
                    <p className="text-red-700 font-bold uppercase "> Our Lasted menu </p>
                    <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Today best offer</h1>
                    <p className="lg:w-2/4 sm:w-3/4 text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">Indulge in an array of meticulously crafted sushi rolls, artfully blending
                        fresh ingredients for a delightful taste experience.</p>
                </div>
            </FadeInDown>

            <div className=" flex gap-7 justify-start mx-28 max-[1300px]:mx-20 max-[1200px]:mx-15 max-[900px]:mx-10 max-[600px]:mx-2 max-[380px]:mx-0 max-[380px]:px-5 max-[1100px]:flex max-[1100px]:flex-col pb-20">
                <div className="flex flex-col gap-6 basis-1/2">
                    {lastSushiItems.length > 0 ? (
                        lastSushiItems.map(sushi => (  // تکرار برای ۵ آیتم آخر  
                            <FadeInUp>
                                <div key={sushi.id} className="relative flex flex-col gap-2 mb-4 pb-7  bg-white border-dashed border-b ">
                                    <div className='flex flex-col gap-4'>
                                        <div className="flex justify-between">
                                            <h1 className='capitalize font-bold text-xl'>{sushi.title}</h1>
                                            <p className='text-red-700 text-xl font-bold'>{sushi.price}</p>
                                        </div>
                                        <p className='text-gray-600 pr-3 w-31rem max-[1100px]:w-[31rem]  max-[540px]:w-[27rem] max-[440px]:w-[22rem] max-[375px]:w-[19rem] max-[345px]:w-[18rem]'>{sushi.body}</p>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))
                    ) : (
                        <p>No sushi items available.</p>
                    )}
                </div>
                <FadeInRight>
                    <div className="flex justify-center items-center basis-1/2 max-[1100px]:w-full mx-auto rounded-xl">
                        <img src={imgmenu2} alt="" className="rounded-2xl w-full h-full" />
                    </div>
                </FadeInRight>

            </div>
        </div>

    )
}