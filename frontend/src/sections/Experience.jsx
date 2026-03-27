import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'; 
import SectionHeader from '../components/SectionHeader';
import ExperienceCard from '../components/ExperienceCard';
import DetailedModal from '../components/DetailedModal';

const Experience = ({ experiences = []}) => {
  const [selectedExp, setSelectedExp] = useState(null);

  // --- NIGHT EFFECT LOGIC (Exact match to Education.jsx) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const starMoveX = useTransform(springX, [0, 1920], [15, -15]);
  const starMoveY = useTransform(springY, [0, 1080], [15, -15]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const [stars] = useState(() => 
    Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 4 + 2,
    }))
  );

  return (
    <section 
      id="experience" 
      onMouseMove={handleMouseMove}
      className="relative -mt-[1px] pt-0 pb-24 bg-transparent relative overflow-hidden" // bg-transparent is vital
    >
      {/* --- NIGHT EFFECT LAYERS START --- */}
      
      {/* 1. ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      {/* 2. THE FLOATING STARFIELD */}
      <motion.div 
        style={{ x: starMoveX, y: starMoveY }}
        className="absolute inset-0 pointer-events-none"
      >
        {stars.map((star, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
      </motion.div>

      {/* 3. THE CRISP MOON (Phase 1: 1st Quadrant) */}
      <motion.div 
        initial={{ opacity: 0, left: '5%', x: '0%' }}
        animate={{ opacity: 0.5, left: '5%', x: '0%'}}
        whileHover={{ 
          scale: 1.1, 
          opacity: 1,
          // This adds a glowing "aura" outside the border
          shadow: "0px 0px 40px 15px rgba(203, 213, 225, 0.6)" 
        }}
        style={{position: 'absolute'}} 
        className="absolute top-100 w-35 h-35 rounded-full bg-[#E9D5FF] pointer-events-auto cursor-pointer filter blur-[0.5px] transition-all duration-500 shadow-[0_0_15px_5px_rgba(203,213,225,0.2)]"
      />

      {/* --- NIGHT EFFECT LAYERS END --- */}

      {/* CENTERED HEADER WRAPPER */}
      <div className="w-full flex justify-center py-10 relative z-10">
        <SectionHeader title="Experience" moduleHex="0x01" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              onOpen={() => setSelectedExp(exp)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedExp && (
          <DetailedModal
            layoutId={`card-${selectedExp.company}`} 
            item={{
              ...selectedExp,
              title: selectedExp.role,
              category: selectedExp.company,
              points: selectedExp.detailed_points || selectedExp.highlights,
              tech: selectedExp.tech_stack || [],
              roadmap: selectedExp.roadmap || []
            }}
            onClose={() => setSelectedExp(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;