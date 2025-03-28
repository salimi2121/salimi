


export default function Navbtn(props) {
    return (
        
        <div className="bg-red-700 hover:bg-green-600 transition-bg duration-200 ease-in cursor-pointer flex justify-center 
        items-center text-white rounded-xl font-bold text-xl xl:p-4 xl:px-9 py-4 px-10 capitalize">
            <a href={props.href || '#'}>
                {props.title}
            </a>

        </div>
    )
}