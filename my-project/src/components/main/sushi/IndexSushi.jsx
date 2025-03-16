import Header from "../../header/Header";
import Hirrosection from "./Hirrosection";
import bgherro from "../../../assets/home-one_img-one.jpg"
import Aboutsection from "./Aboutsection";
import Menusection from "./Menusection";
import Ordersection from "./Ordersection";
import Lastsushi from "./Lastsushi";
import Videososhi from "./Videosushi";
import Packagesushi from "./Packagesushi";
import Testimonial from "./Testimonial";
import Booking from "./Booking";
import { ClientProvider } from "../../../ClientContext";
import Blogsushi from "./Blogsushi";
import Gallerysushi from "./Gallerysushi";
import Footer from "../../footer/Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function IndexSushi() {
    return (
        <div>
            {/* hirro section */}
            <div className="bg-cover bg-no-repeat bg-center overflow-hidden pt-5 xl:h-[820px] lg:h-[650px] " style={{ backgroundImage: `url(${bgherro})` }}>
                <div className="relative mx-auto flex justify-center max-w-full ">
                    <Hirrosection />
                    <div className="absolute left-0 right-0">
                        <Header />
                    </div>
                </div>
            </div>
            {/* about section */}
            <Aboutsection />
            {/* menu section */}
            {/* <DataFetchingComponent /> */}
            <Menusection />
            <Ordersection />
            <Lastsushi />
            <Videososhi />
            <Packagesushi />
            <ClientProvider>
                <Testimonial />
            </ClientProvider>
            <Booking />
            <Blogsushi />
            <Gallerysushi />
            <ScrollToTopButton />
            <Footer />
        </div>



    )
}