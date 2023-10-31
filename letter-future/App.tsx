import React, { useState } from 'react';
import {addLetterToFirestore} from './BackEnd/Database/Database.tsx';
import './App.css';

function App() {
    const [content, setContent] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addLetterToFirestore(content, deliveryDate, recipientEmail);
            console.log("Letter saved successfully");
        } catch (error) {
            console.error("Error saving letter: ", error);
        }
    };
    

    return (
        <div className="App">
            <header className="App-header">
                <h1>Future Letter</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="content">Letter Content:</label>
                        <textarea
                            id="content"
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
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default App;
