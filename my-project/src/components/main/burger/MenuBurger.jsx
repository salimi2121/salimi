import { BurgerProvider } from "../../../BurgerContext"
import { DataProvider } from "../../../DataContext"
import FadeInDown from "../../FadeInDown"
import MenuItemBurger from "./MenuItemBurger"

export default function MenuBurger() {
    return (
        <div>
            <div className="flex flex-col gap-15 justify-center items-center bg-pink-50 pt-4 pb-25 ">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <p className="text-red-700 font-bold uppercase animate-drop "> Our menu </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Choose Menu</h1>
                        <p className="lg:w-3/5 sm:w-3/4 text-xl max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">
                        Savor the exceptional with our NEW Steak! Discover succulence redefined a tantalizing blend of flavors that promises a culinary...   
                        </p>
                    </div>
                </FadeInDown>
                <BurgerProvider>
                <MenuItemBurger />
                </BurgerProvider>
                
            </div>
        </div>
    )
}