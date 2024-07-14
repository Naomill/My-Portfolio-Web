import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () =>{
    return (
        <div className="flex items-end gap-6">
            <a href="https://github.com/Naomill" target="_blank">
                <FontAwesomeIcon className="hover:scale-125 hover:text-primaryPurple transition-all w-8 h-8" icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/saralee-yeesaeng-58680421a/" target="_blank">
                <FontAwesomeIcon className="hover:scale-125 hover:text-primaryPurple transition-all w-8 h-8" icon={faLinkedin} />
            </a>
        </div>
    )
}

export default Contact;