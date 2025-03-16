import bg1 from '../../../assets/beef-page/banner-section/bg1.jpg'
import bg2 from '../../../assets/beef-page/banner-section/bg2.jpg'

import img1 from '../../../assets/beef-page/banner-section/img1.png'
import img2 from '../../../assets/beef-page/banner-section/img2.png'

import Navbtn from '../../header/Navbtn'

export default function BannerBeef() {
    return (
        <div className="mx-auto xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 pt-20 pb-40">
            <div className="flex max-[992px]:flex-col gap-5 ">
                <div className="relative flex flex-col -z-12 gap-8 bg-cover bg-no-repeat bg-center overflow-hidden basis-2/4 p-10 rounded-2xl text-white" style={{ backgroundImage: `URL(${bg1})` }}>
                    <h1 className="font-bold text-5xl capitalize max-[1140px]:text-4xl max-[992px]:text-5xl max-[530px]:text-4xl max-[415px]:text-3xl">Grilled beef steak</h1>
                    <p className="w-3/4 max-[1200px]:w-full max-[992px]:w-3/4 max-[768px]:w-full text-xl max-[415px]:text-lg">Juicy grilled beef steak, seasoned to perfection, tender with smoky flavors.</p>
                    <p className="text-yellow-500 font-bold text-3xl">$79.00</p>
                    <div className="flex ">
                        <Navbtn title="order now" />
                    </div>
                    <div className="absolute -z-11 overflow-hidden -bottom-[12%] -right-[12%] max-[1200px]:w-60 max-[992px]:w-80 max-[768px]:w-60 max-[480px]:w-50 max-[415px]:w-40">
                        <img src={img1} alt="" className='' />

                    </div>
                </div>
                <div className="relative flex flex-col -z-12 gap-8 bg-cover bg-no-repeat bg-center overflow-hidden basis-2/4 p-10 rounded-2xl text-white" style={{ backgroundImage: `URL(${bg2})` }}>
                    <h1 className="font-bold text-5xl capitalize max-[1140px]:text-4xl  max-[992px]:text-5xl max-[530px]:text-4xl max-[415px]:text-3xl" >Dum Beef biryani</h1>
                    <p className="w-3/4 max-[1200px]:w-full max-[992px]:w-3/4 text-xl max-[415px]:text-lg max-[768px]:w-full">Aromatic rice with tender beef, rich spices, and deep, savory flavors.</p>
                    <p className="text-yellow-500 font-bold text-3xl">$89.00</p>
                    <div className="flex ">
                        <Navbtn title="order now" />
                    </div>
                    <div className="absolute -z-11 overflow-hidden -bottom-[12%] -right-[12%] max-[1200px]:w-60 max-[992px]:w-80 max-[768px]:w-60 max-[480px]:w-50 max-[415px]:w-40">
                        <img src={img2} alt="" className='' />

                    </div>
                </div>
            </div>
        </div>
    )
}