import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'; 
import ProjectCard from '../components/ProjectCard';
import DetailedModal from '../components/DetailedModal';
import SectionHeader from '../components/SectionHeader';

const Projects = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- NIGHT EFFECT LOGIC (Synchronized with Education/Experience) ---
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
      id="projects" 
      onMouseMove={handleMouseMove}
      className="pt-0 pb-24 bg-transparent relative overflow-hidden" // Set to transparent to show global background
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

      {/* 3. THE CRISP MOON (Phase 2: 2nd Quadrant - 25%) */}
      <motion.div 
        // Defining position here prevents the browser from sliding it from 0 to 35%
        initial={{ 
          opacity: 0, 
          left: '35%', 
          x: '-50%' 
        }}
        animate={{ 
          opacity: 0.5, 
          left: '35%', 
          x: '-50%' 
        }}
        whileHover={{ 
          scale: 1.1, 
          opacity: 0.8 
        }}
        // Keeping only non-animating layout properties in style
        style={{ position: 'absolute' }} 
        className="absolute top-10 w-35 h-35 rounded-full shadow-[-65px_0px_0_0_#E9D5FF] pointer-events-auto cursor-pointer filter blur-[0.5px] transition-all duration-500 hover:shadow-[-70px_0px_30px_0_rgba(203,213,225,0.4)]"
      />
      {/* --- NIGHT EFFECT LAYERS END --- */}

      {/* CENTERED HEADER */}
      <div className="w-full flex justify-center pt-10 relative z-10">
        <SectionHeader title="Projects" moduleHex="0x02" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpen={() => setSelectedProject(project)} // This is perfect
          />
          ))}
        </div>
      </div>

      {/* Detail Modal Layer */}
      <AnimatePresence>
        {selectedProject && (
          <DetailedModal 
            layoutId={`card-${selectedProject.id}`} 
            item={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;