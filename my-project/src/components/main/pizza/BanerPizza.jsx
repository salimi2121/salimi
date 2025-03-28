import bg1 from '../../../assets/pizza-page/banner-section/bg1.jpg'

import bg2 from '../../../assets/pizza-page/banner-section/bg2.jpg'
import bg3 from '../../../assets/pizza-page/banner-section/bg3.jpg'

import img1 from '../../../assets/pizza-page/banner-section/bn1.png'
import img2 from '../../../assets/pizza-page/banner-section/bn2.png'
import img3 from '../../../assets/pizza-page/banner-section/bn3.png'

import BanerBtnPizza from './BanerBtnPizza'


export default function BannerPizza() {
    return (
        <div className="mx-auto xl:px-30
                    max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
                    max-[530px]:px-7 max-[440px]:px-4 pt-20 pb-40">
            <div className="flex flex-col gap-8">
                <div className="relative flex flex-col z-1 gap-1 bg-cover bg-no-repeat bg-center overflow-hidden w-full p-10 rounded-xl text-white" style={{ backgroundImage: `URL(${bg1})` }}>
                    <p className="text-red-700 font-bold text-lg uppercase">Premium Berger</p>

                    <h1 className="font-bold text-3xl uppercase max-[1140px]:text-4xl max-[992px]:text-5xl max-[768px]:text-3xl max-[415px]:text-2xl">Italian burger</h1>
                    <p className="w-90 max-[460px]:w-80 max-[400px]:w-full text-md mt-3 mb-2 leading-8">Experience Italy on a bun with our Italian burger—juicy, seasoned beef patty, melted mozzarella.</p>
                    <div className="flex cursor-pointer mt-7 mb-3">
                        <BanerBtnPizza title="make a booking" />
                    </div>
                    <div className="absolute -z-11 overflow-hidden bottom-[0] right-0 max-[992px]:w-90 max-[768px]:hidden">
                        <img src={img1} alt="" className='' />

                    </div>
                </div>
                <div className="flex max-[1200px]:flex-col gap-6">
                    <div className="relative flex flex-col z-1 gap-1 bg-cover bg-no-repeat bg-center overflow-hidden basis-2/4 p-12 rounded-xl text-white" style={{ backgroundImage: `URL(${bg2})` }}>
                        <p className="text-white font-bold text-lg uppercase">Premium skewers</p>
                        <h1 className="font-bold text-3xl uppercase max-[1140px]:text-4xl max-[992px]:text-5xl max-[768px]:text-3xl max-[415px]:text-2xl">chicken skewers</h1>
                        <p className="w-80 max-[1200px]:w-90 max-[460px]:w-80 max-[400px]:w-full text-md mt-3 mb-2 leading-8">Savor the tantalizing taste of our expertly grilled chicken skewers, marinated.</p>
                        <div className="flex cursor-pointer mt-4">
                            <BanerBtnPizza title="make a booking" />
                        </div>
                        <div className="absolute -z-11 overflow-hidden bottom-0 right-0 max-[992px]:-right-28 max-[992px]:w-80 max-[768px]:hidden">
                            <img src={img2} alt="" className='' />

                        </div>
                    </div>
                    <div className="relative flex flex-col z-1 gap-1 bg-cover bg-no-repeat bg-center overflow-hidden basis-2/4 p-10 rounded-xl text-white" style={{ backgroundImage: `URL(${bg3})` }}>
                        <p className="text-white font-bold text-lg uppercase">Premium Wrap</p>
                        <h1 className="font-bold text-3xl uppercase max-[1140px]:text-4xl  max-[992px]:text-5xl max-[768px]:text-3xl max-[415px]:text-2xl" >chicken Wrap</h1>
                        <p className="w-80 max-[1200px]:w-90 max-[460px]:w-80 max-[400px]:w-full text-md mt-3 mb-2 leading-8 ">Indulge in our savory chicken wrap, a delightful blend of tender grilled chicken.</p>
                        <div className="flex cursor-pointer mt-4">
                            <BanerBtnPizza title="make a booking" />
                        </div>
                        <div className="absolute -z-11 overflow-hidden bottom-0 right-0 max-[992px]:-right-24.5 max-[992px]:w-80 max-[768px]:hidden ">
                            <img src={img3} alt="" className='' />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}