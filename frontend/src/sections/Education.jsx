// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import SectionHeader from '../components/SectionHeader';
// import EducationCard from '../components/EducationCard';
// import DetailedModal from '../components/DetailedModal';

// const Education = ({ education = [] }) => {
//   const [selectedEdu, setSelectedEdu] = useState(null);

//   return (
//     <section id="education" className="pt-0 pb-24 bg-slate-950 relative overflow-hidden">
//       <SectionHeader title="Education" moduleHex="0x03" />
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Same Gap (8) for uniformity */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
//           {education.map((edu) => (
//             <EducationCard 
//               key={edu.id} 
//               edu={edu} 
//               onOpen={() => setSelectedEdu(edu)} 
//             />
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedEdu && (
//             <DetailedModal 
//               // CRITICAL: Matches the ID we will set in the EducationCard
//               layoutId={`edu-${selectedEdu.id}`}
//               item={{
//                 ...selectedEdu,
//                 title: selectedEdu.degree || "Degree Information",
//                 category: selectedEdu.uni || "Institution",
//                 points: selectedEdu.details || ["Curriculum details pending"],
//                 tech: [
//                   `GPA: ${selectedEdu.cgpa || 'N/A'}`,
//                   selectedEdu.major || "General Engineering",
//                   selectedEdu.location || "Remote",
//                   selectedEdu.year || "Ongoing"
//                 ].filter(Boolean),
//                 roadmap: ["Academic Curriculum", "Key Projects", "Research & Achievements"]
//               }} 
//               onClose={() => setSelectedEdu(null)} 
//             />
//           )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Education;








import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added motion here
import SectionHeader from '../components/SectionHeader';
import EducationCard from '../components/EducationCard';
import DetailedModal from '../components/DetailedModal';

const Education = ({ education = [], skills = [] }) => { // Added skills prop
  const [selectedEdu, setSelectedEdu] = useState(null);
  
  // Added states for the game
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="education" className="pt-0 pb-24 bg-slate-950 relative overflow-hidden">
      <SectionHeader title="Education" moduleHex="0x03" />
      
      <div className="max-w-7xl mx-auto px-6">
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

      {/* 2. THE INTERACTIVE SKILL-SCANNER GAME (Shifted from Experience) */}
      <div className="relative mt-0 mb-10 w-full overflow-visible">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-end font-mono">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-blue-500/40 tracking-[0.4em] uppercase">Tactical_Overlay_v4.2</span>
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="text-xs text-slate-400 tracking-widest">
                {isHovered ? "TARGET_LOCKED" : "SCANNING_SIGNAL..."}
              </span>
            </div>
          </div>
          <div className="text-[10px] text-slate-600 text-right hidden md:block">
            COORDINATES: [45.5017° N, 73.5673° W]<br />
            DECRYPT_STRENGTH: 94.2%
          </div>
        </div>

        <div
          className="relative py-12 bg-slate-900/30 border-y border-blue-500/10 backdrop-blur-md overflow-hidden cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveSkill(null);
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] z-30"
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
                    <span className="text-[10px] font-mono text-blue-500/40 mb-2">0x0{i}</span>
                    <div className="relative">
                      <span className="text-5xl font-black font-mono tracking-tighter text-white/10 group-hover/node:text-blue-500 transition-colors duration-300">
                        {activeSkill === skill.name ? skill.name : skill.name.replace(/[aeiou]/gi, 'X')}
                      </span>
                      <div className="absolute -inset-4 border-x border-blue-500/0 group-hover/node:border-blue-500/50 group-hover/node:scale-110 transition-all duration-300" />
                    </div>
                    <div className="w-full h-[2px] bg-slate-800 mt-4 relative overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 opacity-20 flex justify-between items-center">
          <div className="h-[1px] w-1/4 bg-gradient-to-r from-blue-500 to-transparent" />
          <span className="font-mono text-[8px] tracking-[1em] text-slate-400 uppercase">Interactive_Skill_Core_v2</span>
          <div className="h-[1px] w-1/4 bg-gradient-to-l from-blue-500 to-transparent" />
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