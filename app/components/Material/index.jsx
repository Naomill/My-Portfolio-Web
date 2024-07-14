import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ icon, link }) => {
    const isFontAwesomeIcon = typeof icon === 'object'; // Check if the icon is a FontAwesome icon object

    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110"
        >
            {isFontAwesomeIcon ? (
                <FontAwesomeIcon icon={icon} className="h-7 w-7" />
            ) : (
                <img src={icon} alt="Material icon" className="h-7 w-7" />
            )}
        </a>
    );
};

export default Material;
