import bghirro from "../../../assets/burger-page/hiro-section/bg1.jpg"
import Footer from "../../footer/Footer";
import ScrollToTopButton from "../sushi/ScrollToTopButton";
import HeaderBurger from "../../header/HeaderBurger";
import HerosectionBurger from "./HeroSectionBurger";
import AboutBurger from "./AboutBurger";
import BannerBurger from "./BanerBurger";
import MenuBurger from "./MenuBurger";


export default function IndexBurger() {
    return (
        <div>
            {/* herro section */}
            <div className="relative overflow-hidden h-[850px] " >

                <div className="absolute top-0 -z-1 bg-white overflow-hidden xl:h-[850px] max-[1200px]:h-[700px] max-[992px]:h-[900px]  " >
                    <img src={bghirro} alt="" className="min-h-[888px] max-[1020px]:min-h-[650px] max-[992px]:min-h-[750px] w-full 
                    object-cover align-middle max-w-full " />
                </div>
                <div className="relative mx-auto flex justify-center max-w-full ">
                    <HerosectionBurger />
                    <div className="absolute left-0 right-0">
                        <HeaderBurger />
                    </div>
                </div>
            </div>
            <AboutBurger />
            <BannerBurger />
            <MenuBurger />
            
            <ScrollToTopButton />
            <Footer />
        </div>

    )
}