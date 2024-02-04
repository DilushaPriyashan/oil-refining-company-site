import React, { useState, useEffect } from 'react';
import "./HomeContaint.css";

import image1 from '../../../images/home/oil.jpg';
import image2 from '../../../images/home/fac3.jpg';
import image3 from '../../../images/home/fac2.jpg';
import image4 from '../../../images/home/Poil.jpg';
import logoImage from '../../../images/home/logo.png';

const HomeContaint = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const images = [image1, image2, image3, image4];

  const fullText =
    'Your trusted partner in oil refining wholesale, driving efficiency and sustainability.';

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      setTypedText(fullText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > fullText.length) {
        clearInterval(textInterval);
      }
    }, 50);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(imageInterval);
  }, [images]);

  const containerStyle = {
    position: 'relative',
    height: '100vh',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${images[backgroundIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    position: 'relative',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '70%',
    right: 0,
    transform: 'translateY(-50%)',
    width: '50%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'black',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Arial, FontAwesome',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '90%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transform: 'translateX(-50%)',
  };

  const logoStyle = {
    position: 'absolute',
    top: 200,
    left: '50%',
    transform: 'translate(0%, 0%)',
    width: '500px',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundImageStyle}>
        <div style={textOverlayStyle}>
          <p>{typedText}</p>
        </div>
      </div>
      <div style={overlayStyle}>
        <img src={logoImage} alt="Logo" style={logoStyle} />
      </div>
    </div>
  );
};

export default HomeContaint;
