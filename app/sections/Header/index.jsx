import { data } from "@/app/contents/header";
const Header = () =>{
    return (
        <div className='flex flex-col gap-5 first-letter:mb-5'>
            <img src="/logo.svg" alt="Saralee, Works" className="w-56 h-30"/>
            <div className="text-sm w-5/6">{data.description}</div>
        </div>
    )
}

export default Header;