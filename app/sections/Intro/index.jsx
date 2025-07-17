import { data } from "@/app/contents/intro";
import { useEffect } from "react";

const Intro = ({
    onInitial,
    sectionTitle = "",
}) => {
    const SECTION_ID = `${sectionTitle.replace(/\s+/g, '')}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])
    return (
        <div className="space-y-4 px-2 scroll-m-14" id={SECTION_ID}>
            <div className="flex justify-end text-primaryPurple font-bold">{data.title}</div>
            <div className="text-white text-xl font-bold">{data.subheader}</div>
            <div className="text-5xl font-bold leading-relaxed bg-gradient-to-l from-[#A690FC] to-[#461B97] bg-clip-text text-transparent">
                {data.header}
            </div>

            <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.discription }}></div>
        </div>
    );
};

export default Intro;
