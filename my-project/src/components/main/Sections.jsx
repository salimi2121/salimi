import Header from "../header/Header";
import Hirrosection from "./Hirrosection";
import bgherro from "../../assets/home-one_img-one.jpg"

export default function Sections() {
    return (
        <div className="bg-cover" style={{ backgroundImage: `url(${bgherro})` }}>
            <div className="relative mx-auto flex justify-center pb-16">
                <Hirrosection />
                <div className="absolute  flex justify-center  w-full">
                    <Header />
                </div>
            </div>
        </div>

    )
}