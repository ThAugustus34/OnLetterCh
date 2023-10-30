import React, { useState } from 'react';
import './App.css';

function App() {
    const [content, setContent] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                {/* Placeholders for other potential components */}
                <section className="other-sections">
                    {/* Placeholder for displaying the list of saved letters */}
                    <div className="saved-letters">
                        <h2>Saved Letters</h2>
                        {/* Render the list of saved letters here */}
                    </div>
                    {/* Other features/components can be added here */}
                </section>
            </header>
        </div>
    );
}

export default App;
