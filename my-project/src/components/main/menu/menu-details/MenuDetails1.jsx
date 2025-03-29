import m1 from '../../../../assets/pages/menu-details/section1.jpg'
import Navbtn from '../../../header/Navbtn'
import Counter from './counter'
import BtnDetails1 from './ِBtnDetails1'


export default function MenuDetails1() {
    return (
        <div className="mx-auto  xl:px-30
             max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
             max-[530px]:px-7 max-[440px]:px-4 flex max-[992px]:flex-col justify-center items-center gap-5 pt-30">
            <div className="flex rounded-2xl w-2/4 max-[992px]:w-full">
                <img src={m1} alt="" className='rounded-2xl min-h-[420px] min-w-[400px] max-[992px]:w-full' />
            </div>
            <div className="flex flex-col gap-7 tracking-tighter w-2/4 max-[992px]:w-full ">
                <h1 className="text-3xl max-[413px]:text-2xl font-bold">
                    Gourmet Griddl Masterpiece</h1>
                <p className="text-gray-700 text-2xl max-[413px]:text-xl">Plant-based dining is no longer a niche it's a movement. Chefs are pushing the boundaries of creativity.</p>
                <div className="flex gap-4 text-3xl mb-2 font-semibold">
                    <p className="text-red-600 ">$39.92</p>
                    <div className="flex">
                        <p className="text-gray-500 opacity-50 ">$</p>
                        <p className="text-gray-500 line-through opacity-40 ">45.25</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-[445px]:grid-cols-1 gap-14 mb-3 w-3/5 max-[1200px]:w-4/6 max-[1120px]:w-5/6 max-[992px]:w-3/6 max-[768px]:w-4/6 max-[525px]:w-5/6 max-[445px]:w-full ">
                    <div className="w-40"><Counter /></div>
                    <div className="w-50"><BtnDetails1 /></div>
                </div>
                <div className="w-47 max-[445px]:w-50">
                    <Navbtn title='add to cart' />

                </div>
            </div>
        </div>
    )
}