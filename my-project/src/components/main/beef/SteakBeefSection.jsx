import FadeInDown from "../../FadeInDown"
import FadeInUp from "../../FadeInUp"
import BoxBeef from "./BoxBeef"
import { useData } from '../../../BeefContext';
import bg8 from '../../../assets/beef-page/steak-section/bg8.jpg'
import BasketIcon from "./BasketIcon";

export default function SteakBeefSection() {
    const { foods } = useData();
    if (!foods || foods.length === 0) {
        return <div>No foods available.</div>;
    }

    const filteredsteak = foods.filter(food => food.section === 'steak');
    return (
        <div className="mx-auto  xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 pt-10 pb-20">
            <div className="flex flex-col gap-15">
                <FadeInDown>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <BoxBeef title="Steak House" />
                        <h1 className="font-extrabold xl:text-5xl sm:text-4xl text-3xl tracking-tighter text-center uppercase">Savor the Finest Steaks </h1>
                    </div>
                </FadeInDown>

                <FadeInUp>
                    <div className="grid grid-cols-4 max-[992px]:grid-cols-2 max-[500px]:grid-cols-1 gap-6 ">
                        {filteredsteak.map((steak) => (
                            <div className="relative flex flex-col gap-5 justify-center items-center px-8 max-[1100px]:px-4 py-10 bg-cover bg-center bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${bg8})` }}>
                                <div className="absolute right-5 top-5">
                                    <BasketIcon />
                                </div>
                                <img src={steak.image} alt={steak.title} className="w-44 h-44" />
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <h1 className="font-bold text-2xl max-[1160px]:text-xl max-[500]:text-2xl tracking-tighter">{steak.title}</h1>
                                    <p className="font-bold text-2xl text-white">{steak.price}</p>
                                </div>

                            </div>
                        ))

                        }
                    </div>
                </FadeInUp>
            </div>
        </div>
    )
}