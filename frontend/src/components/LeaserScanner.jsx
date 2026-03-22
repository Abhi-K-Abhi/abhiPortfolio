import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LeaserScanner = () => {
  const [pos, setPos] = useState({ x: 50, y: 50, angle: 0, speed: 0.2 });
  const requestRef = useRef();
  const mousePos = useRef({ x: -1000, y: -1000 });
  
  // SPEEDS: Low base speed makes the panic much more dramatic
  const BASE_SPEED = 0.2; 
  const PANIC_SPEED = 2.2; 
  
  const state = useRef({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    heading: Math.random() * 360,
    turnSpeed: 0,
    currentSpeed: BASE_SPEED
  });

  useEffect(() => {
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

    const dx = s.x - m.x;
    const dy = s.y - m.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // RADIUS: Reduced to 8 for a "close encounter" feel
    const avoidanceRadius = 8;

    if (distance < avoidanceRadius) {
      // 1. SPRINT: Fast acceleration
      s.currentSpeed = Math.min(s.currentSpeed + 0.2, PANIC_SPEED);
      
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      let angleDiff = targetAngle - s.heading;
      while (angleDiff < -180) angleDiff += 360;
      while (angleDiff > 180) angleDiff -= 360;
      
      s.turnSpeed += angleDiff * 0.2; 
    } else {
      // 2. STEALTH: Slow deceleration back to visible drift
      s.currentSpeed = Math.max(s.currentSpeed - 0.03, BASE_SPEED);
      s.turnSpeed += (Math.random() - 0.5) * 0.15;
    }

    s.turnSpeed *= 0.85; 
    s.heading += s.turnSpeed;

    const rad = (s.heading * Math.PI) / 180;
    s.x += Math.cos(rad) * s.currentSpeed;
    s.y += Math.sin(rad) * s.currentSpeed;

    // 3. WALL BOUNCE
    if (s.x <= 2 || s.x >= 95) {
      s.heading = 180 - s.heading + (Math.random() * 10 - 5);
      s.x = s.x <= 2 ? 2.1 : 94.9;
    }
    if (s.y <= 5 || s.y >= 92) {
      s.heading = 360 - s.heading + (Math.random() * 10 - 5);
      s.y = s.y <= 5 ? 5.1 : 91.9;
    }

    setPos({ x: s.x, y: s.y, angle: s.heading, speed: s.currentSpeed });
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
          rotate: pos.angle,
          // LENGTH: Drastically stretches when speed hits PANIC level
          width: 120 + (pos.speed * 80) + 'px' 
        }}
        transition={{ duration: 0, ease: "linear" }}
        className="absolute h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #3b82f6 40%, #ffffff 100%)',
          boxShadow: `0 0 ${15 + (pos.speed * 10)}px rgba(59, 130, 246, ${0.4 + (pos.speed * 0.2)})`,
          opacity: 0.65,
        }}
      />
    </div>
  );
};

export default LeaserScanner;