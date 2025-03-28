


export default function NavbtnPizza(props) {
    return (
        
        <div className="bg-white hover:bg-green-600 hover:text-white transition-bg duration-200 ease-in cursor-pointer flex justify-center 
        items-center text-green-600 rounded-xl font-bold text-xl xl:p-4 xl:px-9 py-4 px-10 capitalize">
            <a href={props.href || '#'}>
                {props.title}
            </a>

        </div>
    )
}