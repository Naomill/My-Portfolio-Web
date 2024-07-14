import Contact from "../Contact";
import Header from "../Header";
import Sidebar from "../Sidebar";

const LeftSection = () =>{
    return (
        <div className="px-5">
            <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_14%] lg:h-[85vh]">
                <Header />
                <Sidebar />
                <Contact />
            </div>
         </div>
    )
}

export default LeftSection;