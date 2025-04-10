import React, { useState } from "react";
import "../Styles/HomeStyle.css";
import pharmacuticalProducts from "../assets/pharmacuticalProducts.png";
import { useNavigate } from "react-router-dom";

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

const LandingPage = () => {
const navigate = useNavigate();

const handleGetStarted = () => {
    navigate("/prescription");
};

return (
    <div className="landing-page">
    <header className="header">
        <h1>Pharmacy</h1>
    </header>

    <section className="hero">
        <img src={pharmacuticalProducts} alt="Pharmaceutical Products" className="hero-image" />
        <h2>Your Health, Our Priority</h2>
        <p>
        Welcome to Pharmacy, your trusted partner in wellness and medication. We offer
        reliable healthcare services and pharmaceutical products tailored to your needs.
        </p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
    </section>

    <section className="landing-accordion-section">
        <Accordion title="Why Choose Us?">
        <p>
            At Pharmacy, we’re committed to providing high-quality, accessible healthcare products and services.
            Our experienced team ensures that your health needs are met with care and precision.
        </p>
        <p>
            Whether you're picking up a prescription or browsing wellness essentials, our goal is to support
            your journey toward better health.
        </p>
        </Accordion>

        <Accordion title="Quick & Reliable Service">
        <p>
            Skip the queues with our digital prescription submission. Place your order online and collect it when it's convenient for you.
        </p>
        <p>
            We priorities speed, accuracy, and customer care — ensuring you get what you need, when you need it.
        </p>
        </Accordion>
    </section>

    <footer className="footer">
        <p>&copy; 2025 Pharmacy. All rights reserved.</p>
    </footer>
    </div>
);
};

export default LandingPage;