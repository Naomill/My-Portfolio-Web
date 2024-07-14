import { data } from "@/app/contents/skill&about";
import Skills from "../Skills";
import Profile from "../Profile";

const About = () =>{
    return (
        <div className="space-y-4 px-2" id="About-section">
            <div className="flex justify-end font-bold text-primaryPurple">{data.title}</div>
            <div className="text-white mb-4">{data.subtitle1}</div>
            <Skills />
            <Profile />
        </div>
    )
}
export default About;