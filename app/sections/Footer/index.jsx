import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="flex justify-end mb-16">
            <a href="https://brittanychiang.com/" target="_blank">
                <span className="group inline-flex items-center space-x-1">
                    <span>Design inspiration from Brittany Chiang</span>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-sm -rotate-45 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
                    />
                </span>
            </a>
        </div>
    );
};
export default Footer;
