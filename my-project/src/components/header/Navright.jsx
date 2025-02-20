import Cartbtn from "./cartbtn";
import Navbtn from "./Navbtn";
import HamburgerMenu from "./Hambergermenu";



export default function Navright({ subMenus }) {
    let title = "book a table" ;
    let href = ""
    return (
        <div className="flex xl:gap-5 items-center xl:w-72 w-32 ">
            <div className="hidden xl:inline-block ">
                <Navbtn title = {title} href ={href}/>
            </div>
            <Cartbtn />
            <HamburgerMenu subMenus={subMenus} />
        </div>
    )
}