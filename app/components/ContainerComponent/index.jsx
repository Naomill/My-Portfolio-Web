"use client";

import { useState } from "react";
import FormattedDate from "../FormattedDate";
import Image from "../Image";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContainerComponent = ({
    sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    const handleMouseEnter = (index) => {
        setIsMouseEnter((prev) => ({ ...prev, [index]: true }));
    };

    const handleMouseLeave = (index) => {
        setIsMouseEnter((prev) => ({ ...prev, [index]: false }));
    };

    return (
        <div id={SECTION_ID}>
            <div className="flex justify-end text-primaryPurple font-bold px-2">{sectionTitle}</div>
            {
                data.map(({
                    date = "",
                    title = "",
                    link = "",
                    materials = [],
                    description = [],
                    techSskills = [],
                    picture = ""
                }, index) => (
                    <div
                        key={`${SECTION_ID}-${index}`}
                        className={`grid grid-cols-[25%_75%] space-x-4 rounded-md transition-all ${isMouseEnter[index] ? "bg-bgHighlight" : ""} px-2 py-6`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="space-y-4">
                            <FormattedDate isHighlight={isMouseEnter[index]}>{date}</FormattedDate>
                            <Image picture={picture} title={title} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <TitleLink isHighlight={isMouseEnter[index]} title={title} link={link} />
                            {
                                materials.length > 0 &&
                                <div className="flex gap-4">
                                    {
                                        materials.map((e, i) => (
                                            <Material key={`materials-${i}`} icon={e.type} title="Figma" link={e.link} />
                                        ))
                                    }
                                </div>
                            }
                            {
                                description.map((e, i) => (
                                    <Description key={`description-${i}`} description={e} />
                                ))
                            }
                            {
                                techSskills.map((e, i) => (
                                    <Tech key={`techSkills-${i}`} isHighlight={isMouseEnter[index]} data={e} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default ContainerComponent;
