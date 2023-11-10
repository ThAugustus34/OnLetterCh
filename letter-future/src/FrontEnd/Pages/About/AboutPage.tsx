import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="about-container">
            <div className="faq-header">
                <button onClick={handleGoBack} className="back-button">← Back</button>
            </div>
            <h1>About Letter to the Future</h1>
            <p>Welcome to <span className="highlight">Letter to the Future</span>. This innovative zkApp enables users to send encrypted messages into the future, leveraging the Mina Protocol blockchain for security and efficiency. The application's unique value lies in its ability to create personal and secure time capsules on the blockchain, where messages remain private and unaltered until their specified reveal date.</p>
            <h2>Key Features:</h2>
            <p><b>Encrypted Future Messaging:</b> Compose and schedule messages to be revealed at a future date, with encryption ensuring confidentiality.</p>
            <p><b>Blockchain-Backed Security:</b> Utilizing the Mina Protocol, the app guarantees the immutability and privacy of messages.</p>
            <p><b>User-Friendly Interface:</b> A seamless experience is provided by a React.js-based frontend, making it easy for users to interact with the app.</p>
            <h2>Technical Architecture:</h2>
            <p><b>Frontend:</b> React.js is chosen for its component-based architecture, enabling the development of an interactive and responsive UI. It employs client-side rendering for rapid user interactions and effective state management.</p>
            <p><b>Backend:</b> Node.js serves as the core runtime environment for backend operations. Express.js is used to create robust API endpoints.</p>
            <p><b>Blockchain Layer:</b> Mina Protocol's succinct blockchain structure leverages zero-knowledge proofs for data privacy and integrity. zkApps in o1js are crucial for data privacy and the validity of stored messages.</p>
            <p><b>Data Storage:</b> Firebase manages user data and message content, providing real-time data syncing, scalability, and integration capabilities.</p>
            <p><b>Security and Communication:</b> Encryption ensures that messages can only be decrypted by the intended recipient at the future date. RESTful APIs and Web3.js facilitate frontend-backend communication and interaction with the blockchain.</p>
            <p><b>Deployment and Maintenance:</b> The frontend is deployed over a CDN, and backend components are containerized with Docker for performance and scalability. CI/CD pipelines automate testing and deployment processes.</p>
            <p>This cohesive overview illustrates that "Letter to the Future" is not just conceptually appealing but also robustly architected, combining blockchain technology with user-centric design and strong security practices.</p>
        </div>
    );
}

export default About;
