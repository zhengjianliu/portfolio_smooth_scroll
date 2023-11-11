import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ titles, typingSpeed = 50, deletingSpeed = 20 }) => {
  const [target, setTarget] = useState(0);
  const [letters, setLetters] = useState(-1);
  const [typing, setTyping] = useState('');
  const typingIntervalRef = useRef(null);
  const deletingIntervalRef = useRef(null);

  const clearIntervals = () => {
    clearInterval(typingIntervalRef.current);
    clearInterval(deletingIntervalRef.current);
  };

  const typeOutput = () => {
    clearIntervals();
    typingIntervalRef.current = setInterval(() => {
      setLetters((letters) => {
        const newLetters = letters + 1;
        setTyping(titles[target].substr(0, newLetters));
        if (titles[target].length === newLetters) {
          checkTyping();
        }
        return newLetters;
      });
    }, typingSpeed);
  };

  const deleting = () => {
    clearIntervals();
    deletingIntervalRef.current = setInterval(() => {
      setLetters((letters) => {
        if (letters === -1) {
          afterDeleting();
        } else {
          setTyping((typing) => typing.slice(0, -1));
        }
        return letters - 1;
      });
    }, deletingSpeed);
  };

  const checkTyping = () => {
    clearIntervals();
    setTimeout(deleting, 2000);
  };

  const afterDeleting = () => {
    setTarget((target) => {
      const newTarget = target === titles.length - 1 ? 0 : target + 1;
      setLetters(-1);
      typeOutput();
      return newTarget;
    });
  };

  useEffect(() => {
    if (titles && titles.length > 0) {
        typeOutput();
    }
    return clearIntervals;
  }, [titles, target]);

  useEffect(() => {
    return clearIntervals;
  }, []);

  return (
    <div className='typer'>I'm <span>{typing}</span><b>|</b></div>
  );
};

export default Typewriter;
