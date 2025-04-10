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
    <div className="about-us-page">
        <header className="about-header">
        <h1>About Us</h1>
        </header>

        <section className="about-accordion-section">
        <Accordion title="Dedicated to Your Wellbeing">
            <p>
            Med Sure is more than just a store — we’re a team of passionate healthcare professionals
            dedicated to improving the lives of our community through accessible, reliable, and
            compassionate service.
            </p>
        </Accordion>

        <Accordion title="Our Mission">
            <p>
            To provide a seamless and supportive experience for every customer, from the moment they walk in
            or visit online, ensuring clarity, comfort, and confidence in every step of their healthcare journey.
            </p>
        </Accordion>

        <Accordion title="What We Stand For">
            <ul>
            <li><strong>Care:</strong> Personalised attention in every interaction.</li>
            <li><strong>Trust:</strong> Transparent practices and expert guidance.</li>
            <li><strong>Community:</strong> Supporting local health through outreach and education.</li>
            </ul>
        </Accordion>

        <Accordion title="Meet Our Team">
            <p>
            Behind every counter and consultation is a skilled pharmacist or healthcare assistant committed to your well-being.
            Our team blends experience, empathy, and a passion for community service.
            </p>
        </Accordion>

        <Accordion title="Our Approach">
            <p>
            We believe that access to healthcare should be simple, affordable, and compassionate. That’s why
            we’ve designed our processes to put people first — with digital convenience and personal service.
            </p>
        </Accordion>

        <Accordion title="Our Commitment to You">
            <p>
            Whether you need chronic medication management, over-the-counter guidance, or simply a smile when
            you walk in — our commitment is to deliver the highest level of care.
            </p>
        </Accordion>
        </section>

        <footer className="about-footer">
        <p>&copy; 2025 Med Sure. All rights reserved.</p>
        </footer>
    </div>
    );
};

export default AboutUs;