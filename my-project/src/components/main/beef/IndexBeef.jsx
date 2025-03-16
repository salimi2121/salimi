import bghirro from "../../../assets/beef-page/hiro-section/bg.png"
import Footer from "../../footer/Footer";
import ScrollToTopButton from "../sushi/ScrollToTopButton";
import HiroSectionbeef from "./HiroSectionbeef";
import HeaderBeef from "./HeaderBeef";
import OfferBeefSection from "./OfferBeefSection";
import GallerySection from "./GallerySection";
import { DataProvider } from '../../../BeefContext';
import ChooseBeef from "./ChooseBeef";
import BannerBeef from "./BannerBeef";
import MenuBeefSection from "./MenuBeefSection";
import ChefsBeef from "./ChefsBeef";
import SteakBeefSection from "./SteakBeefSection";
import BookingBeef from "./BookingBeef";
import TestimonialBeef from "./TestimonialBeef";
import BlogBeef from "./BlogBeef";
import LastSection from "./LastSection";


export default function IndexBeef() {
    return (
        <div>
            {/* hirro section */}
            <div className="relative overflow-hidden " >

                <div className="absolute top-0 -z-1 bg-white overflow-hidden xl:h-[829px]  h-full " >
                    <img src={bghirro} alt="" className="min-h-[750px] max-[1024px]:min-h-[650px] max-[992px]:min-h-[500px] w-full object-cover align-middle max-w-full " />
                </div>
                <div className="relative mx-auto flex justify-center max-w-full ">
                    <HiroSectionbeef />
                    <div className="absolute left-0 right-0">
                        <HeaderBeef />
                    </div>
                </div>
            </div>
            <OfferBeefSection />
            <DataProvider>
                <GallerySection />
            </DataProvider>
            <ChooseBeef />
            <BannerBeef />
            <DataProvider>
                <MenuBeefSection />
            </DataProvider>
            <ChefsBeef />
            <DataProvider>
                <SteakBeefSection />
            </DataProvider>
            <BookingBeef />
            <TestimonialBeef />
            <BlogBeef />
            <LastSection />

            <ScrollToTopButton />
            <Footer />
        </div>

    )
}