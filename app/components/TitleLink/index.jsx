import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHighlight, title, link }) => {
    if (!link) {
        return (
            <div className={`font-bold ${isHighlight ? "text-primaryPurple" : "text-white"}`}>
                {title}
            </div>
        );
    }
    return (
        <div className={`font-bold ${isHighlight ? "text-primaryPurple" : "text-white"}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
                <FontAwesomeIcon className={`ml-1 text-sm -rotate-45 transition-all duration-300 ease-in-out ${isHighlight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    );
}
export default TitleLink;
