import React, { useState, useEffect } from 'react';
import backgroundVideo from '../video/Background.mp4'; // Ensure the correct path to your video

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Home of Education';
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [ 'text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(fullText.slice(0, index));
        if (index < fullText.length) {
          setIndex(index + 1);
        } else {
          setDeleting(true);
        }
      } else {
        setDisplayText(fullText.slice(0, index));
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setDeleting(false);
          setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
        }
      }
    }, deleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText, colors.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover  z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10  mt-44	margin-top: 11rem; flex items-center justify-center h-full">
        <h1 className={`text-4xl md:text-6xl font-bold bg-opacity-75 bg-800 p-4 rounded ${colors[colorIndex]}`}>
          {displayText}
        </h1>
      </div>
    </div>
  );
};

export default Home;
