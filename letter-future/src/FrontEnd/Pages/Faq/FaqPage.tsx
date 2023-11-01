import React from 'react';
import './Faq.css';
import { useNavigate } from 'react-router-dom';

const FaqPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="faq-container">
            <div className="faq-header">
                <button onClick={handleGoBack} className="back-button">← Back</button>
            </div>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-item">
                <h2>How does Future Letter work?</h2>
                <p>Simply write your letter, set a future delivery date, and we ensure that it's delivered on the date you specify.</p>
            </div>
            <div className="faq-item">
                <h2>Is my letter confidential?</h2>
                <p>Your privacy is paramount. Your letters are encrypted and stored securely until the delivery date.</p>
            </div>
        </div>
    );
}

export default FaqPage;
