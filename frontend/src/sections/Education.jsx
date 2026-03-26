import React, { useState, useRef } from 'react'; // Added useRef
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'; 
import SectionHeader from '../components/SectionHeader';
import EducationCard from '../components/EducationCard';
import DetailedModal from '../components/DetailedModal';

const Education = ({ education = [], skills = [] }) => {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  // --- NIGHT EFFECT LOGIC ---
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
      id="education" 
      onMouseMove={handleMouseMove} // Added mouse tracking
      className="pt-0 pb-24 bg-transparent relative overflow-hidden"
    >
      {/* --- NIGHT EFFECT LAYERS START --- */}
      
      {/* 1. ATMOSPHERIC GLOW (The "Purple Mist") */}
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

      {/* 3. THE CRISP MOON (Half Phase) */}
      <motion.div 
        initial={{ 
          opacity: 0, 
          left: '70%', 
          x: '-50%' 
        }}
        animate={{ 
          opacity: 0.5, 
          left: '70%', 
          x: '-50%' 
        }}
        whileHover={{ 
          scale: 1.1, 
          opacity: 0.8 
        }}
        // We keep the static layout properties in style
        style={{ position: 'absolute' }} 
        className="absolute top-10 w-35 h-35 rounded-full shadow-[-52px_0px_0_0_#E9D5FF] pointer-events-auto cursor-pointer filter blur-[0.5px] transition-all duration-500 hover:shadow-[-55px_0px_30px_0_rgba(203,213,225,0.4)]"
      />
      {/* --- NIGHT EFFECT LAYERS END --- */}
      <SectionHeader title="Education" moduleHex="0x03" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {education.map((edu) => (
            <EducationCard 
              key={edu.id} 
              edu={edu} 
              onOpen={() => setSelectedEdu(edu)} 
            />
          ))}
        </div>
      </div>

      {/* 2. THE INTERACTIVE SKILL-SCANNER GAME - PINNED TO BOTTOM */}
      <div className="absolute bottom-[75px] left-0 w-full z-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-end font-mono">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-purple-300 tracking-[0.4em] uppercase">Tactical_Overlay</span>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className=" text-xs text-slate-400 tracking-widest">
                {isHovered ? "TARGET_LOCKED" : "SCANNING_SIGNAL..."}
              </span>
            </div>
          </div>
          <div className="text-[11px] text-purple-200 text-right hidden md:block">
            COORDINATES: [23.0736° N, 72.5702° E]<br />
            DECRYPT_STRENGTH: 94.2%
          </div>
        </div>

        <div
          className="relative py-12 bg-purple-950/20 border-y border-purple-500/20 backdrop-blur-md overflow-hidden cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveSkill(null);
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(139,92,246,0.5)] z-30"
          />

          <motion.div
            animate={isHovered ? { x: -200 } : { x: [0, -2000] }}
            transition={isHovered ? { type: "spring", stiffness: 50, damping: 20 } : { repeat: Infinity, duration: 50, ease: "linear" }}
            className="flex whitespace-nowrap gap-32 items-center px-20"
          >
            {[...Array(5)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex gap-32 items-center">
                {skills.map((skill, i) => (
                  <motion.div
                    key={`${setIndex}-${skill.name}`}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    className="relative flex flex-col items-center group/node"
                  >
                    <span className="text-[10px] font-mono text-purple-500/40 mb-2">0x0{i}</span>
                    <div className="relative">
                      <span className="text-5xl font-black font-mono tracking-tighter text-white/10 group-hover/node:text-purple-500 transition-colors duration-300">
                        {activeSkill === skill.name ? skill.name : skill.name.replace(/[aeiou]/gi, 'X')}
                      </span>
                      <div className="absolute -inset-4 border-x border-purple-500/0 group-hover/node:border-purple-500/50 group-hover/node:scale-110 transition-all duration-300" />
                    </div>
                    <div className="w-full h-[2px] bg-white/5 mt-4 relative overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-purple-500 shadow-[0_0_10px_#8b5cf6]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 opacity-35 flex justify-between items-center">
          <div className="h-[1px] w-1/4 bg-gradient-to-r from-purple-500 to-transparent" />
          <span className="font-mono text-[11px] tracking-[1em] text-purple-100 uppercase">Interactive_Skill_Core</span>
          <div className="h-[1px] w-1/4 bg-gradient-to-l from-purple-300 to-transparent" />
        </div>
      </div>



      <AnimatePresence>
        {selectedEdu && (
          <DetailedModal 
            layoutId={`edu-${selectedEdu.id}`}
            item={{
              ...selectedEdu,
              title: selectedEdu.degree || "Degree Information",
              category: selectedEdu.uni || "Institution",
              points: selectedEdu.details || ["Curriculum details pending"],
              tech: [
                `GPA: ${selectedEdu.cgpa || 'N/A'}`,
                selectedEdu.major || "General Engineering",
                selectedEdu.location || "Remote",
                selectedEdu.year || "Ongoing"
              ].filter(Boolean),
              roadmap: ["Academic Curriculum", "Key Projects", "Research & Achievements"]
            }} 
            onClose={() => setSelectedEdu(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;