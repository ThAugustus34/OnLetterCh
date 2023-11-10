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
            <div className="faq-item">
                <h2>What is the Mina Protocol?</h2>
                <p>The Mina Protocol is a minimal blockchain designed to reduce computational requirements and enable efficient, decentralized apps (zkApps).</p>
            </div>
            <div className="faq-item">
                <h2>Can I edit my letter after sending it?</h2>
                <p>Once a letter is scheduled, it cannot be edited. This ensures the integrity and authenticity of the message.</p>
            </div>
            <div className="faq-item">
                <h2>How are the delivery dates enforced?</h2>
                <p>Delivery dates are enforced through smart contracts on the Mina Protocol, ensuring your letter is revealed only at the specified time.</p>
            </div>
            <div className="faq-item">
                <h2>Are there any fees for using this service?</h2>
                <p>There may be minimal transaction fees associated with the blockchain operations, but the service itself is designed to be cost-effective.</p>
            </div>
            <div className="faq-item">
                <h2>What happens if the recipient's email changes?</h2>
                <p>We recommend updating the recipient's email if it changes. However, the letter is stored on the blockchain and can be accessed with the correct credentials.</p>
            </div>
            <div className="faq-item">
                <h2>How secure is the encryption used?</h2>
                <p>We use advanced encryption standards to ensure your letter's confidentiality and security until its designated reveal time.</p>
            </div>
        </div>
    );
}

export default FaqPage;
