import h1 from '../../../assets/beef-page/hiro-section/h1.png'
import h2 from '../../../assets/beef-page/hiro-section/h2.png'
import h3 from '../../../assets/beef-page/hiro-section/h3.png'

import Parallax from '../../Parallax'
import FadeInDown from '../../FadeInDown'
import FadeInUp from '../../FadeInUp'



export default function HiroSectionbeef() {
    const images1 = [h2 ];  

    return (
        <div className="container mx-auto">
            <div className="flex flex-col pt-10 max-[1024px]:pt-19 max-[768px]:pt-30 pb-56">
                <FadeInDown>
                <h1 className='text-[300px] max-[1120px]:text-[280px] max-[1070px]:text-[260px] 
                max-[1024px]:text-[14rem] max-[992px]:text-[9rem] max-[768px]:text-8xl h-[380px] max-[1024px]:h-[270px] max-[992px]:h-[200px] max-[768px]:h-[150px] text-white w-full max-[1120px]:px-5 max-[1090px]:px-9 
                max-[1024px]:px-0  text-center font-bold tracking-tighter'>Let’s Eat</h1>
                </FadeInDown>
                <FadeInUp>
                <div className="relative z-1 text-center">
                    <img src={h1} alt="" className='w-[44%] max-[1280px]:w-[55%] max-[1024px]:w-[74%] max-[992px]:w-[62%] max-[768px]:w-[57%] max-[480px]:w-[70%] mx-auto rounded-full border-[15px] border-white'/>
                    <div className="absolute -bottom-44 max-[1024px]:-bottom-65 max-[992px]:bottom-80 max-[768px]:bottom-48 max-[585px]:bottom-40 max-[545px]:bottom-30 max-[455px]:bottom-40 max-[440px]:bottom-30  left-[17%] max-[1280px]:left-[7%] 
                    max-[1024px]:-left-30 max-[992px]:-left-5 max-[820px]:left-6 max-[600px]:left-10 max-[480px]:left-0 max-[440px]:-left-3 max-[410px]:-left-7 w-4/6 max-[1280px]:w-[85%] max-[1024px]:w-[970px]
                        max-[992px]:w-[800px] max-[820px]:w-[700px] max-[768px]:w-[550px] max-[600px]:w-[500px] max-[545px]:w-[430px] max-[480px]:w-[28rem] max-[992px]:h-[200px] -z-1">
                        <img src={h2} alt="" />
                        {/* <Parallax images={images1} /> */}
                    </div>
                </div>
                </FadeInUp>
                
            </div>

        </div>
    )
}