import ContainerComponent from "@/app/components/ContainerComponent";
import About from "../About";
import Intro from "../Intro";
import { data } from "@/app/contents/works";
import Footer from "../Footer";

const RightSection = () => {
    return (    
        <div className="grid gap-y-40 px-5">
            <Intro />
            <About />
            <ContainerComponent
                sectionTitle="My Works"
                data={data}
            />
            <Footer />
        </div>
    );
};

export default RightSection;
