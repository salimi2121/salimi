import Header from "../../header/Header";
import HirrosectionRes from "./HirrosectionRes";
import bgherro from "../../../assets/resturan-page/hiro-section/bg1.png"
import Footer from "../../footer/Footer";
import AboutsectionRes from "./AboutsectionRes";
import Categoriessection from "./Categoriessection";
import ScrollToTopButton from "../sushi/ScrollToTopButton";
import OfferSection from "./OfferSection";
import ChoiceSection from "./ChoiceSection";
import BookingResSection from "./BookingResSection";
import MenuSectionRes from "./MenuSectionRes";
import GalleryRes from "./GalleryRes";
import ChefResSection from "./ChefResSection";
import TestimonialRes from "./TestimonialRes";
import BlogResSection from "./BlogResSection";

export default function IndexRestaurant() {
    return (
        <div> 
            {/* hirro section */}
            <div className="relative overflow-hidden " >
                
            <div className="absolute top-0 left-0  w-[5000%] -z-1 bg-cover bg-repeat-x bg-center bg-black 
            overflow-hidden pt-5 xl:h-[929px] h-full" style={{ backgroundImage: `url(${bgherro})` }}></div>
                <div className="relative mx-auto flex justify-center max-w-full ">
                    <HirrosectionRes />
                    <div className="absolute left-0 right-0">
                        <Header />
                    </div>
                </div>
            </div>
            <Categoriessection />
            <AboutsectionRes />
            <OfferSection />
            <ChoiceSection />
            <BookingResSection />
            <MenuSectionRes />
            <GalleryRes />
            <ChefResSection />
            <TestimonialRes />
            <BlogResSection />

            <ScrollToTopButton />
            <Footer />
        </div>



    )
}