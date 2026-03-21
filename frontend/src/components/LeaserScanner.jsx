import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LeaserScanner = () => {
  const [pos, setPos] = useState({ x: 50, y: 50, angle: 0 });
  const requestRef = useRef();
  const mousePos = useRef({ x: -1000, y: -1000 }); // Start mouse off-screen
  
  const speed = 0.55; 
  const state = useRef({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    heading: Math.random() * 360,
    turnSpeed: 0,
  });

  useEffect(() => {
    // Track mouse position across the whole window
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animate = () => {
    const s = state.current;
    const m = mousePos.current;

    // 1. CALCULATE DISTANCE TO MOUSE
    const dx = s.x - m.x;
    const dy = s.y - m.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // 2. MOUSE AVOIDANCE (The "Fear" Logic)
    const avoidanceRadius = 15; // How close before it runs (in % of screen)
    if (distance < avoidanceRadius) {
      // Calculate angle away from mouse
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      
      // Smoothly steer toward the "escape" angle
      let angleDiff = targetAngle - s.heading;
      while (angleDiff < -180) angleDiff += 360;
      while (angleDiff > 180) angleDiff -= 360;
      
      s.turnSpeed += angleDiff * 0.1; // Sharp turn away
    } else {
      // Normal random drifting when mouse is far away
      s.turnSpeed += (Math.random() - 0.5) * 0.2;
    }

    // 3. APPLY PHYSICS
    s.turnSpeed *= 0.92; // Friction
    s.heading += s.turnSpeed;

    const rad = (s.heading * Math.PI) / 180;
    s.x += Math.cos(rad) * speed;
    s.y += Math.sin(rad) * speed;

    // 4. WALL BOUNCE
    if (s.x <= 2 || s.x >= 95) {
      s.heading = 180 - s.heading + (Math.random() * 10 - 5);
      s.x = s.x <= 2 ? 2.1 : 94.9;
    }
    if (s.y <= 5 || s.y >= 92) {
      s.heading = 360 - s.heading + (Math.random() * 10 - 5);
      s.y = s.y <= 5 ? 5.1 : 91.9;
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
        className="absolute w-[160px] h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #3b82f6 40%, #ffffff 100%)',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
          opacity: 0.6,
        }}
      />
    </div>
  );
};

export default LeaserScanner;