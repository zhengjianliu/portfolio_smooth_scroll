import React, { useState, useEffect } from 'react';
import Page from './Page';
import About from '../pages/About';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Blogs from '../pages/Blogs';
import Footer from '../pages/Footer';

const VerticalScroll = () => {
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
    <div className={`main-scroll-container${isScrolling ? ' scrolling' : ''}`}>
      <div className="scroll-container" id="scroll-container">
        <Page snapped={snapped === 0} Child={Landing}/>
        <Page snapped={snapped === 1} Child={About}/>
        <Page snapped={snapped === 2} Child={Projects}/>
        <Page snapped={snapped === 3} Child={Blogs}/>
        <Page snapped={snapped === 4} Child={Footer}/>
      </div>
    </div>
  );
};

export default VerticalScroll;
