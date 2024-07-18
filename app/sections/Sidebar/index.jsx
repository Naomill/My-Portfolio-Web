'use client';

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const sides = [
    { title: "Introduction", sectionId: "Intro-section" },
    { title: "About", sectionId: "About-section" },
    { title: "My Works", sectionId: "MyWorks-section" },
];

const Sidebar = ({ sideBarItems, currentSection }) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        // console.log(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Element with ID ${sectionId} not found.`);
        }
    };

    const handleMouseEnter = (title) => {
        setIsMouseEnter((prev) => ({ ...prev, [title]: true }));
    };

    const handleMouseLeave = (title) => {
        setIsMouseEnter((prev) => ({ ...prev, [title]: false }));
    };

    return (
        <div className="hidden lg:flex flex-col font-bold">
            {sideBarItems.map((e, i) => (
                <div 
                    key={`side-${e.title}-${i}`}
                    onClick={() => handleClick(e.sectionId)}
                    onMouseEnter={() => handleMouseEnter(e.title)}
                    onMouseLeave={() => handleMouseLeave(e.title)}
                    className="cursor-pointer flex py-2"
                >
                    <div>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className={`w-4 h-4 new-arrow ${
                                currentSection === e.sectionId 
                                    ? "text-primaryPurple" 
                                    : isMouseEnter[e.title] 
                                        ? "" 
                                        : "hidden"
                            }`}
                        />
                    </div>

                    <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-3" : ""} duration-300 ease-out`}>{e.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
