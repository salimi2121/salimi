import { PizzaProvider } from "../../../PizzaContext"
import FadeInDown from "../../FadeInDown"
import MenuItemPizza from "./MenuItemPizza"


export default function MenuPizza() {
    return (
        <div>
            <div className="flex flex-col gap-15 justify-center items-center pb-25 ">
                <FadeInDown>
                    <div className="flex flex-col gap-4 justify-center items-center ">
                        <p className="text-red-700 font-bold uppercase animate-drop "> Choose your flavor </p>
                        <h1 className="md:text-5xl max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl max-[565px]:px-4 max-[405px]:font-bold text-center font-extrabold uppercase">Our Special pizza</h1>
                        <p className="lg:w-3/5 sm:w-3/4 text-xl max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] text-gray-800 text-center mt-2">
                        Indulge in the extraordinary with Our Special Pizza. A tantalizing blend of succulent toppings, premium cheeses, and a secret sauce, crafted to perfection.   
                        </p>
                    </div>
                </FadeInDown>
                <PizzaProvider>
                <MenuItemPizza />
                </PizzaProvider>
                
            </div>
        </div>
    )
}