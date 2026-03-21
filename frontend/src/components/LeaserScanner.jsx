import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const LaserScanner = () => {
  const controls = useAnimation();

  const sequence = async () => {
    while (true) {
      // Shortened delay for testing (3 seconds)
      await new Promise(resolve => setTimeout(resolve, 3000));

      const startY = Math.floor(Math.random() * 80) + 10; // Stay away from extreme edges
      const angle = Math.floor(Math.random() * 20 - 10); 

      await controls.start({
        top: `${startY}%`,
        rotate: `${angle}deg`,
        x: ['-100vw', '100vw'],
        transition: { 
          duration: 3, 
          ease: "linear"
        }
      });

      // Reset
      await controls.start({ x: '-100vw', transition: { duration: 0 } });
    }
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{ x: '-100vw' }}
      // HIGHER Z-INDEX and pointer-events-none are critical
      className="fixed left-0 w-[100vw] h-[2px] z-[9999] pointer-events-none"
      style={{
        // Made it MUCH brighter (Blue-400) for testing
        background: 'linear-gradient(90deg, transparent, #60a5fa, transparent)',
        boxShadow: '0 0 20px rgba(96, 165, 250, 0.8)',
      }}
    />
  );
};

export default LaserScanner;