import Contact from "../Contact";
import Header from "../Header";
import Sidebar from "../Sidebar";

const LeftSection = ({ sideBarItems, currentSection }) =>{
    return (
        <div className="px-5 mb-16 lg:mb-0">
            <div className="sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[2fr_2fr_14%] lg:h-[85vh]">
                <Header />
                <Sidebar sideBarItems ={sideBarItems} currentSection={currentSection}/>
                <Contact />
            </div>
         </div>
    )
}

export default LeftSection;