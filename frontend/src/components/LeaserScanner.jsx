import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LeaserScanner = () => {
  const [pos, setPos] = useState({ x: 50, y: 50, angle: 0 });
  const requestRef = useRef();
  
  // Settings
  const speed = 0.5; 
  const state = useRef({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    heading: Math.random() * 360, // The current direction in degrees
    turnSpeed: 0, // How fast it's currently curving
  });

  const animate = () => {
    const s = state.current;

    // 1. RANDOM STEERING (The "Creative" Part)
    // Every frame, we slightly change the turn speed to create a "drifting" effect
    s.turnSpeed += (Math.random() - 0.5) * 0.2; 
    s.turnSpeed *= 0.95; // Friction to prevent infinite spinning
    s.heading += s.turnSpeed;

    // 2. CONVERT HEADING TO X/Y VELOCITY
    const rad = (s.heading * Math.PI) / 180;
    const vx = Math.cos(rad) * speed;
    const vy = Math.sin(rad) * speed;

    s.x += vx;
    s.y += vy;

    // 3. SOFT WALL BOUNCE (Keeps it on screen)
    // If it hits a wall, we rotate the heading away from the wall
    if (s.x <= 2 || s.x >= 95) {
      s.heading = 180 - s.heading + (Math.random() * 20 - 10);
      s.x = s.x <= 2 ? 2.1 : 94.9; // Nudge back inside
    }
    if (s.y <= 5 || s.y >= 92) {
      s.heading = 360 - s.heading + (Math.random() * 20 - 10);
      s.y = s.y <= 5 ? 5.1 : 91.9; // Nudge back inside
    }

    setPos({ x: s.x, y: s.y, angle: s.heading });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <motion.div
        animate={{ 
          left: `${pos.x}%`, 
          top: `${pos.y}%`, 
          rotate: pos.angle 
        }}
        transition={{ duration: 0, ease: "linear" }}
        className="absolute w-[180px] h-[2px] shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        style={{
          background: 'linear-gradient(90deg, transparent, #3b82f6 40%, #ffffff 100%)',
          opacity: 0.6,
          borderRadius: '2px'
        }}
      />
    </div>
  );
};

export default LeaserScanner;