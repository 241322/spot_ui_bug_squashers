import React, { useState } from "react";
import "../Styles/AboutUsStyle.css";

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="accordion">
        <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen && <div className="accordion-body">{children}</div>}
    </div>
    );
};

const AboutUs = () => {
    return (
        <div>
            {/* Content removed */}
        </div>
    );
};

export default AboutUs;