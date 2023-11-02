// MainContent.tsx
import React, { useState } from 'react';
import '../../../App.css';
const MainContent: React.FC = () => {
    const [content, setContent] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className='MainContent'> 
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <h1 className="main-header">Letter Content</h1>
                    <textarea
                        id="content"
                        className="centered-textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Your letter content..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryDate">Delivery Date:</label>
                    <input
                        type="date"
                        id="deliveryDate"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recipientEmail">Recipient Email:</label>
                    <input
                        type="email"
                        id="recipientEmail"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        required
                        placeholder="Recipient's email address..."
                    />
                </div>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MainContent;