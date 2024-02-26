import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import NavBar  from  '../../Shared-Components/Navbar/Navbar'
import postData from "../../dataFiles/postData";
import './home.scss'
import Carousel from "../../Shared-Components/Posts-Carousel/Carousel";
const HomePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleLogin = (platform) => {
        // Implement login functionality
    };

    const handlePost = () => {
        // Assuming you have a function to post to Facebook
        const postToFacebook = (slide) => {
            // Logic to post the active slide to Facebook
            console.log('Posting slide to Facebook:', slide);
        };

        postToFacebook(postData[activeSlide]);
    };

    return (
        <div className="main-page">
            <nav className="navbar">
                <NavBar />
            </nav>
            <main className="main-content">
                <div className="logo-section">
                    <img src="facebook_logo.png" alt="Facebook" />
                    <img src="linkedin_logo.png" alt="LinkedIn" />
                    <img src="twitter_logo.png" alt="Twitter" />
                </div>
                <section className="carousel-section">
                    <Carousel slides={postData} setActiveSlide={setActiveSlide} />
                    <button className="post-button" onClick={handlePost}>Post</button>
                </section>

            </main>
        </div>
    );
};

export default HomePage;
