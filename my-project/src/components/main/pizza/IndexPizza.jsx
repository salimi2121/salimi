import bghero from '../../../assets/pizza-page/hero-section/bg.png'
import HeaderPizza from '../../header/HeaderPizza'
import MenuPizza from './MenuPizza'
import BannerPizza from './BanerPizza'
import HeroSectionPizza from './HeroSectionPizza'
import MovingbarPizza from './MovingbarPizza'
import ScrollToTopButton from '../sushi/ScrollToTopButton'
import Footer from '../../footer/Footer'
import OffSectionPizza from './OffSectionPizza'
import ChoosePizza from './ChoosePizza'
import { PizzaProvider } from '../../../PizzaContext'
import BookingMapPizza from './BookingMapPizza'
import ChefPizza from './ChefPizza'
import VideoPizza from './VideoPizza'
import TestimonialPizza from './TestimonialPizza'
import GalleryPizza from './GalleryPizza'
import InstaGalleryPizza from './InstaGalleryPizza'

export default function IndexPizza() {
    return (
        <div>
            {/* herro section */}
            <div className="relative overflow-hidden h-[920px] max-[1200px]:h-[644px] max-[992px]:h-[607px]" >
                <div className="absolute top-0 -z-1 bg-white overflow-hidden xl:h-[920px] max-[1200px]:h-[645px] max-[992px]:h-[900px]  " >
                    <img src={bghero} alt="" className="min-h-[988px] max-[1020px]:min-h-[650px] max-[992px]:min-h-[750px] w-full 
                            object-cover align-middle max-w-full " />
                </div>
                <div className="relative mx-auto flex justify-center max-w-full ">
                    <HeroSectionPizza />
                    <div className="absolute left-0 right-0">
                        <HeaderPizza />
                    </div>
                </div>
            </div>
            <MovingbarPizza />
            <BannerPizza />
            <MenuPizza />
            <OffSectionPizza />
            <PizzaProvider>
                <ChoosePizza />
            </PizzaProvider>
            <BookingMapPizza />
            <ChefPizza />
            <VideoPizza />
            <TestimonialPizza />
            <GalleryPizza />
            <InstaGalleryPizza />

            <ScrollToTopButton />
            <Footer />
        </div>
    )
}
