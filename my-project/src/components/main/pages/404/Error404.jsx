import bg9 from '../../../../assets/pages/404/bg.jpg'
import Navbtn from '../../../header/Navbtn'


export default function Error404() {
    return (
        <div className="">
            <div className="flex flex-col gap-16 py-30 mx-auto  xl:px-30
               max-[1280px]:px-20 max-[1200px]:px-17 max-[992px]:px-38 max-[950px]:px-30 max-[910px]:px-24 max-[880px]:px-19 max-[768px]:px-30 max-[710px]:px-24 max-[690px]:px-17 max-[650px]:px-14 max-[600px]:px-5
               max-[530px]:px-7 max-[440px]:px-4">
                <div className="relative flex flex-col w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg9})` }}>
                    <div className="absolute top-0 left-0 w-full h-full z-1 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}></div>

                    <div className="flex flex-col gap-4 justify-center z-2 py-30 items-center ">
                        <p className="text-red-700 font-bold uppercase text-7xl"> 404</p>
                        <h1 className="md:text-[65px] max-[800px]:text-4xl max-[565px]:text-3xl max-[500px]:text-2xl 
                        max-[565px]:px-4 max-[405px]:font-bold text-center font-bold tracking-tighter capitalize text-white">Oops! Page Not Found</h1>
                        <p className="lg:w-3/5 sm:w-3/4 text-md font-semibold max-[640px]:px-9 max-[765px]:text-lg max-[565px]:text-[1rem] my-4 text-gray-100 text-center ">It looks like you've encountered a "Page Not Found" error, also known as a 404 error.
                            This typically happens when the web server cannot locate
                        </p>
                        <Navbtn title='go to home' />
                    </div>

                </div>
            </div>
        </div>
    )
}