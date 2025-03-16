import MenuItem from "./MenuItem";
import FadeInDown from "../../FadeInDown"

export default function Menusection() {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-center items-center bg-pink-50 py-24 ">
                <FadeInDown>
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-red-700 font-bold uppercase animate-drop "> Our special menu </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Savor Our Sushi Selection</h1>
                        <p className="lg:w-2/4 sm:w-3/4 text-xl max-[565px]:px-4 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">Indulge in an array of meticulously crafted sushi rolls, artfully blending
                            fresh ingredients for a delightful taste experience.</p>

                    </div>
                </FadeInDown>
                <MenuItem />

            </div>
        </div>
    )
}