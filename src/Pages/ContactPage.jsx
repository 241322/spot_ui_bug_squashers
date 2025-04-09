import "../Styles/ContactStyle.css";
import { Form, Button, Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveChat from '../Components/LiveChat';

export default function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="contact-container">
            <h1>Here's How To Get In Touch With Us</h1>
            
            <div className="contact-section">
                <div className="contact-layout">
                    <ul className="exaggerated-list">
                        <li>
                            <span className="list-number">01</span>
                            <span className="list-context">
                            <h2>Contact Us</h2> <p>Fill out the contact form</p></span>
                        </li>
                        <li>
                            <span className="list-number">02</span>
                            <span className="list-context"></span>
                            <div className="contact-section">
                <h2>Phone Support</h2>
                <p>For urgent inquiries, call our customer support team at<br/> 081 410 7793</p>
            </div>
                        </li>
                        <li>
                            <span className="list-number">03</span>
                            <span className="list-context"></span>
                            <div className="contact-section">
                                
                <h2>Come See Us In Person</h2>
                <Card className="business-hours">
                    <Card.Body>
                        <h3>Address</h3>
                        <p>123 Pharmacy Street<br/>Medical District<br/>City, State 12345</p>
                        
                        <h3>Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 8:00 PM<br/>
                           Saturday: 10:00 AM - 6:00 PM<br/>
                           Sunday: Closed</p>
                    </Card.Body>
                </Card>
            </div>
                        </li>
                    </ul>
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Inquiry Type</Form.Label>
                            <Form.Select>
                                <option>General Inquiry</option>
                                <option>Prescription Status</option>
                                <option>Delivery Issue</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        

            <div className="contact-section">
                <h2>Frequently Asked Questions</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How long does delivery take?</Accordion.Header>
                        <Accordion.Body>
                            Standard delivery takes 2-3 business days. Express delivery is available for urgent prescriptions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can I send a repeat prescription?</Accordion.Header>
                        <Accordion.Body>
                            Yes, you can submit repeat prescriptions through our online portal or by calling our pharmacy directly.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                        <Accordion.Body>
                            We accept all major credit cards, debit cards, and insurance plans. Contact us for specific insurance coverage details.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <LiveChat />
        </div>
    );
}