import img1 from "../../assets/herro2.png"

export default function Hirrosection() {
    return (
        <div className="container flex flex-col gap-6 lg:justify-start justify-center  xl:text-left text-center mt-40 xl:mt-60 mb-5 w-full xl:pl-20 text-white capitalize">
            <div className="image-one scene hidden xl:flex"
                style={{
                    transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'none'
                }}>
                <span data-depth=".3"
                    style={{
                        transform: 'translate3d(-0.7px, -19.8px, 0px)',
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        display: 'block'
                    }}>
                    <img src={img1} alt="" />
                </span>
            </div>
            <h5 className="text-amber-400 text-xl font-bold uppercase ">hot for every friday</h5>
            <h1 className="xl:text-[86px] lg:text-6xl md:text-5xl text-5xl xl:w-2/4 max-[650px]:w-5/6 max-[650px]:mx-auto leading-24 font-bold">sushi flavors redefined</h1>
            <p className="lg:text-xl text-lg xl:w-[55%] lg:w-[70%] md:w-3/4 w-5/6 max-[650px]:w-5/6 mx-auto xl:mx-0 leading-7 font-semibold py-6">Cluckin' Good Chicken Delight: A savory haven for chicken lovers offering
                meticulously crafted dishes bursting with flavor.</p>
            <div className="flex justify-center items-center xl:mx-0 mx-auto bg-red-600 rounded-xl p-5 py-4 font-bold text-xl w-52">order now</div>


        </div>
    )
}