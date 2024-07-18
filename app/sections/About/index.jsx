import { data } from "@/app/contents/skill&about";
import Skills from "../Skills";
import Profile from "../Profile";
import { useEffect } from "react";

const About = ({ 
    onInitial,
    sectionTitle ="",
 }) =>{

    const SECTION_ID = `${sectionTitle.replace(/\s+/g, '')}-section`;

    useEffect(() =>{
        onInitial(SECTION_ID);
    },[])

    return (
        <div className="space-y-4 px-2 scroll-m-14" id={SECTION_ID}>
            <div className="flex justify-end font-bold text-primaryPurple">{data.title}</div>
            <div className="text-white mb-4">{data.subtitle1}</div>
            <Skills />
            <Profile />
        </div>
    )
}
export default About;