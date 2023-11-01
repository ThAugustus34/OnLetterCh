import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>About Future Letter</h1>
            <p>Welcome to <span className="highlight">Future Letter</span>. Our platform provides a unique experience, allowing users to send letters to the future. A time capsule for your digital memories.</p>
            <img src="/path/to/your/image.jpg" alt="About illustration" className="about-image" />
        </div>
    );
}

export default About;
