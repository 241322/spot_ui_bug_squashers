import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            // Simulate automated response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "Thanks for your message! Our team will respond shortly.",
                    sender: 'support'
                }]);
            }, 1000);
            setNewMessage('');
        }
    };

    return (
        <div className="live-chat">
            {!isOpen ? (
                <Button 
                    className="chat-button"
                    onClick={() => setIsOpen(true)}
                    variant="primary"
                >
                    Chat with Us
                </Button>
            ) : (
                <Card className="chat-window">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <span>Live Support</span>
                        <Button 
                            variant="link" 
                            className="p-0" 
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </Button>
                    </Card.Header>
                    <Card.Body className="chat-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </Card.Body>
                    <Card.Footer>
                        <Form onSubmit={handleSubmit}>
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                />
                                <Button type="submit" variant="primary" className="ms-2">
                                    Send
                                </Button>
                            </div>
                        </Form>
                    </Card.Footer>
                </Card>
            )}
        </div>
    );
};

export default LiveChat;
