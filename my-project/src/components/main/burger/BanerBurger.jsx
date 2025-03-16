import bg from '../../../assets/burger-page/baner-section/bg2.jpg'
import bn1 from '../../../assets/burger-page/baner-section/bn1.png'
import bn2 from '../../../assets/burger-page/baner-section/bn2.png'
import Navbtn from '../../header/Navbtn'


export default function BannerBurger() {
    return (
        <div className="relative overflow-hidden py-30 z-1 bg-pink-50 ">
            <div className="flex gap-5 w-full max-w-full xl:px-20
                    max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-8 max-[530px]:px-7 max-[440px]:px-4 justify-between items-center z-10 max-[1285px]:px-4" >
                <div className="flex max-[1200px]:flex-col gap-5 max-[1200px]:w-full">
                    <div className="relative flex flex-col -z-12 gap-7 max-[410px]:gap-3 bg-cover bg-no-repeat bg-center overflow-hidden basis-2/4 max-[1200px]:w-full px-10 py-20 max-[550px]:py-5 text-white" style={{ backgroundImage: `URL(${bg})` }}>
                        <h1 className="font-bold text-5xl uppercase max-[1140px]:text-4xl max-[992px]:text-5xl max-[530px]:text-4xl max-[415px]:text-3xl">Cheese Burger</h1>
                        <p className="w-3/4 max-[1200px]:w-2/4 max-[720px]:w-3/4 max-[622px]:w-4/5 max-[600px]:w-5/6 max-[575px]:w-full  text-md">Grilled beef, melted cheese, bun—classic American 
                        cheeseburger delightfully satisfies taste buds.</p>
                        <p className="text-yellow-500 font-bold text-3xl">$79.00</p>
                        <div className="flex z-1">
                            <Navbtn title="order now" />
                        </div>
                        <div className="absolute -z-0 overflow-hidden bottom-1 right-0 max-[1200px]:-right-[39%] max-[1170px]:-right-[37%] 
                        max-[1115px]:-right-[33%] max-[992px]:-right-[30%] max-[950px]:-right-[26%] max-[910px]:-right-[23%] 
                        max-[880px]:-right-[20%] max-[800px]:-right-0 w-full max-[800px]:w-[60%] max-[620px]:w-[70%] max-[480px]:w-80 max-[415px]:w-60">
                            <img src={bn1} alt="" className='' />

                        </div>
                    </div>
                    <div className="relative flex flex-col -z-12 gap-7 max-[410px]:gap-3 bg-cover bg-no-repeat bg-center overflow-hidden basis-2/4 px-10 py-20 max-[550px]:py-5 text-white" style={{ backgroundImage: `URL(${bg})` }}>
                        <h1 className="font-bold text-5xl uppercase max-[1140px]:text-4xl max-[992px]:text-5xl max-[530px]:text-4xl max-[415px]:text-3xl">Bliss Burger</h1>
                        <p className="w-3/4 max-[1200px]:w-2/4 max-[677px]:w-3/4  max-[600px]:w-4/5   max-[568px]:w-full text-md">A mouthwatering blend of juicy beef, melted 
                        cheese, and savory perfection.</p>
                        <p className="text-yellow-500 font-bold text-3xl">$79.00</p>
                        <div className="flex z-1 ">
                            <Navbtn title="order now" />
                        </div>
                        <div className="absolute -z-0 overflow-hidden bottom-1 max-[1200px]:right-0 max-[800px]:w-[60%] max-[620px]:w-[70%] max-[415px]:w-60">
                            <img src={bn2} alt="" className='' />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}