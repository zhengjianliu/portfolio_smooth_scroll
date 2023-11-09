import React, { useState, useEffect } from 'react';

const TikTokVerticalScroll = () => {
  const [snapped, setSnapped] = useState(0); // 0 indicates no snap
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollItemHeight = scrollContainer.clientHeight;
    const currentPosition = scrollContainer.scrollTop;
    const currentIndex = Math.round(currentPosition / scrollItemHeight);

    setSnapped(currentIndex);
  };

  const handleScrollStart = () => {
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    setIsScrolling(false);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.addEventListener('scrollstart', handleScrollStart);
    scrollContainer.addEventListener('scrollend', handleScrollEnd);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('scrollstart', handleScrollStart);
      scrollContainer.removeEventListener('scrollend', handleScrollEnd);
    };
  }, []);

  return (
    <div className={`tiktok-scroll-container${isScrolling ? ' scrolling' : ''}`}>
      <div className="scroll-container" id="scroll-container">
        <div className={`scroll-item ${snapped === 0 ? 'snapped' : ''}`}><h1>Item 1</h1></div>
        <div className={`scroll-item ${snapped === 1 ? 'snapped' : ''}`}><h1>Item 2</h1></div>
        <div className={`scroll-item ${snapped === 2 ? 'snapped' : ''}`}><h1>Item 3</h1></div>
        <div className={`scroll-item ${snapped === 3 ? 'snapped' : ''}`}><h1>Item 4</h1></div>
        {/* Add more scroll items as needed */}
      </div>
    </div>
  );
};

export default TikTokVerticalScroll;
