// src/components/Carousel.js
import React, { useState } from 'react';

const Carousel = ({ slides, setActiveSlide }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
        setActiveSlide(currentSlide);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        setActiveSlide(currentSlide);
    };

    return (
        <div className="carousel-container">
            <button className="previous-button" onClick={goToPreviousSlide}>Previous</button>
            <img className="slide-image" src={slides[currentSlide].imageUrl} alt={slides[currentSlide].description} />
            <button className="next-button" onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default Carousel;
