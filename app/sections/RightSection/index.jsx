import ContainerComponent from "@/app/components/ContainerComponent";
import About from "../About";
import Intro from "../Intro";
import { data } from "@/app/contents/works";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
    return (    
        <div className="grid gap-y-16 lg:gap-y-40 px-5">
            <Intro 
                sectionTitle="Introduction"
                onInitial={onInitial} />

            <About 
                sectionTitle="About me"
                onInitial={onInitial} />

            <ContainerComponent
                onInitial={onInitial}
                sectionTitle="My works"
                data={data}
            />
            <Footer />
        </div>
    );
};

export default RightSection;
