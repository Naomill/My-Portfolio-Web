import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const side = [
    { title: "Introduction", sectionId: "Intro-section" },
    { title: "About", sectionId: "About-section" },
    { title: "My Works", sectionId: "Works-section" },
];

const Sidebar = () => {

    const handleClick = (sectionId) => {
        // console.log(sectionId);
    };

    return (
        <div className="flex flex-col gap-4 font-bold">
            {
                side.map((e, i) => (
                    <div 
                        key={`side-${e}-${i}`}
                        // onClick={() => handleClick(e.sectionId)}
                    > 
                        <FontAwesomeIcon icon={faChevronRight} className="mr-2 w-4 h-4 text-primaryPurple"/>
                        {e.title}
                    </div>
            ))}
        </div>
    );
};

export default Sidebar;
