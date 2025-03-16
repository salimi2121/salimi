import Submenu from "./Submenu"

export default function Navmenu({ subMenus }) {

    return (
        <nav className=" py-4 ">
            <div className="container mx-auto justify-between xl:flex hidden">
                <div className="flex xl:space-x-3 lg:space-x-0 ">
                    {subMenus.map((submenu, index) => (
                        <Submenu key={index} title={submenu.title} options={submenu.options} />
                    ))}
                    <button>
                        <a className="flex cursor-pointer text-lg font-semibold hover:text-red-700 transition-text duration-300">
                            <span>Contact</span>
                        </a>
                    </button>

                </div>

            </div>
        </nav>



    )
}