


export default function BanerBtnPizza(props) {
    return (
        
        <div className="bg-white hover:bg-red-700 hover:text-white transition-bg duration-200 ease-in cursor-pointer flex justify-center 
        items-center text-red-700 rounded-xl font-bold text-xl xl:p-4 xl:px-9 py-4 px-10 max-[400px]:px-7 capitalize">
            <a href={props.href || '#'}>
                {props.title}
            </a>

        </div>
    )
}