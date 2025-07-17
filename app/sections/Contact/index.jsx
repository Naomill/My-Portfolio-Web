import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "saraleeyeesaeng@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        });
    };

    return (
        <div className="flex items-end gap-6">
            <a href="https://github.com/Naomill" target="_blank">
                <FontAwesomeIcon className="hover:scale-125 hover:text-primaryPurple transition-all w-8 h-8" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/saralee-yeesaeng-58680421a/" target="_blank">
                <FontAwesomeIcon className="hover:scale-125 hover:text-primaryPurple transition-all w-8 h-8" icon={faLinkedin} />
            </a>
            <div className="relative inline-block">
                <button onClick={handleCopy}>
                    <FontAwesomeIcon
                        className="hover:scale-125 hover:text-primaryPurple transition-all w-8 h-8"
                        icon={faEnvelope}
                    />
                </button>
                {copied && (
                    <span className="absolute top-1/2 left-full -translate-y-1/2 ml-4 text-sm text-primaryPurple bg-slate-800 px-2 py-2 rounded">
                        Copied!
                    </span>
                )}
            </div>
        </div>
    )
}

export default Contact;