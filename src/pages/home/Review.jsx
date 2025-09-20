import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Helper function to check if element is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

function Review() {
  const [startAnimation, setStartAnimation] = useState(false);
  const controls = useAnimation();
  const counterRef = useRef(null); // Ref to track the counter element

  // Scroll detection and setting animation trigger
  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current && isInViewport(counterRef.current)) {
        setStartAnimation(true); // Trigger the animation when in view
      }
    };

    // Trigger once on mount to check if element is in view initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start the animation when the counter becomes visible
  useEffect(() => {
    if (startAnimation) {
      controls.start({
        count: 1000,
        transition: { duration: 3, ease: 'easeInOut' }, // Animate over 3 seconds
      });
    }
  }, [startAnimation, controls]);

  return (
    <div style={styles.container}>
      <motion.div
        ref={counterRef}
        initial={{ count: 0 }}
        animate={controls}
        style={styles.counter}
      >
        {({ count }) => Math.round(count)}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '100px auto',
    width: '200px',
  },
  counter: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
};

export default Review;
