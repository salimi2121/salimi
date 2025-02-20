import Header from "../header/Header";
import Hirrosection from "./Hirrosection";
import bgherro from "../../assets/home-one_img-one.jpg"

export default function Sections() {
    return (
        <div className="bg-cover bg-no-repeat bg-center pt-5 xl:h-[820px] lg:h-[650px] " style={{ backgroundImage: `url(${bgherro})` }}>
            <div className="relative mx-auto flex justify-center  ">
                <Hirrosection />
                <div className="absolute flex justify-center w-full max-w-full">
                    <Header />
                </div>
            </div>
        </div>

    )
}