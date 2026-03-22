// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ExperienceCard from '../components/ExperienceCard';
// import DetailedModal from '../components/DetailedModal'; // Import the DetailedModal component
// import SectionHeader from '../components/SectionHeader'; // Import it at top    

// const Experience = ({ experiences, skills }) => {
//   const [selectedExp, setSelectedExp] = useState(null);
  
//   // New States for the Marquee Game functionality
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeSkill, setActiveSkill] = useState(null);

//   return (
//     <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">    
//       <SectionHeader title="Experience" moduleHex="0x01" />
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
//             {/* cards here */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
//               {experiences.map((exp, index) => (
//                 <ExperienceCard 
//                   key={index} 
//                   exp={exp} 
//                   onOpen={() => setSelectedExp(exp)} 
//                 />
//               ))}
//             </div>
//           </div>
//         </div>


//       <div className="max-w-7xl mx-auto px-6">
//         {/* <h2 className="text-4xl font-black text-white mb-16 tracking-tighter">
//           EXPERIENCE<span className="text-blue-500"></span>
//         </h2> */}

//         {/* 2x2 GRID SYSTEM */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
//           {experiences.map((exp, index) => (
//             <ExperienceCard 
//               key={index} 
//               exp={exp} 
//               onOpen={() => setSelectedExp(exp)} 
//             />
//           ))}
//         </div> */}
//       </div>

//       {/* --- THE INTERACTIVE SKILL-SCANNER GAME --- */}
//       <div className="relative mt-0 mb-10 w-full overflow-visible">
//         {/* Game UI Header */}
//         <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-end font-mono">
//           <div className="flex flex-col gap-1">
//             <span className="text-[10px] text-blue-500/40 tracking-[0.4em] uppercase">Tactical_Overlay_v4.2</span>
//             <div className="flex items-center gap-3">
//               <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
//               <span className="text-xs text-slate-400 tracking-widest">
//                 {isHovered ? "TARGET_LOCKED" : "SCANNING_SIGNAL..."}
//               </span>
//             </div>
//           </div>
//           <div className="text-[10px] text-slate-600 text-right hidden md:block">
//             COORDINATES: [40.7128° N, 74.0060° W]<br/>
//             DECRYPT_STRENGTH: 90.4%
//           </div>
//         </div>

//         {/* The Game Track (The Groove) */}
//         <div 
//           className="relative py-0 bg-slate-900/30 border-y border-blue-500/10 backdrop-blur-md overflow-hidden"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => {
//             setIsHovered(false);
//             setActiveSkill(null);
//           }}
//         >
//           {/* Scanning Laser Line */}
//           <motion.div 
//             animate={{ x: ["-100%", "200%"] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//             className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] z-30"
//           />

//           {/* Moving Data Stream */}
//           <motion.div 
//             animate={isHovered ? { x: -200 } : { x: [0, -2000] }} 
//             transition={isHovered ? { type: "spring", stiffness: 50, damping: 20 } : { repeat: Infinity, duration: 50, ease: "linear" }}
//             className="flex whitespace-nowrap gap-32 items-center px-20"
//           >
//             {[...Array(5)].map((_, setIndex) => (
//               <div key={setIndex} className="flex gap-32 items-center">
//                 {(skills || []).map((skill, i) => (
//                   <motion.div 
//                     key={i}
//                     onMouseEnter={() => setActiveSkill(skill.name)}
//                     className="relative flex flex-col items-center group/node"
//                   >
//                     <span className="text-[10px] font-mono text-blue-500/40 mb-2">0x0{i}</span>

//                     <div className="relative">
//                       <span className="text-5xl font-black font-mono tracking-tighter text-white/10 group-hover/node:text-blue-500 transition-colors duration-300">
//                         {/* Game Mechanic: Encrypts vowels unless hovered */}
//                         {activeSkill === skill.name ? skill.name : skill.name.replace(/[aeiou]/gi, 'X')}
//                       </span>
//                       <div className="absolute -inset-4 border-x border-blue-500/0 group-hover/node:border-blue-500/50 group-hover/node:scale-110 transition-all duration-300" />
//                     </div>

//                     {/* Decryption Loading Bar */}
//                     <div className="w-30 h-[3px] bg-slate-800 mt-2 relative overflow-hidden rounded-full">
//                       <motion.div 
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: "0%" }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         className="absolute inset-0 bg-blue-500 shadow-[0_0_8px_#3b82f6]"
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//         {/* Footer Decoration */}
//         <div className="max-w-7xl mx-auto px-6 mt-6 opacity-20 flex justify-between items-center">
//           <div className="h-[1px] w-1/3 bg-gradient-to-r from-blue-500 to-transparent" />
//           <span className="font-mono text-[8px] tracking-[1em] text-slate-400 uppercase">Interactive_Core_V2</span>
//           <div className="h-[1px] w-1/3 bg-gradient-to-l from-blue-500 to-transparent" />
//         </div>
//       </div>

//       {/* DETAIL POPUP (MODAL) */}
//       <AnimatePresence>
//         {selectedExp && (
//         <DetailedModal 
//           item={{
//             ...selectedExp,
//             // Fix: provide an empty array as a fallback for tech
//             points: selectedExp.highlights || (selectedExp.desc ? [selectedExp.desc] : []),
//             tech: selectedExp.skills_used || [], // Ensure this is always an array
//             category: "Professional_Experience",
//             title: `${selectedExp.role} @ ${selectedExp.company}`
//           }} 
//           onClose={() => setSelectedExp(null)} 
//         />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Experience;








import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import DetailedModal from '../components/DetailedModal';
import SectionHeader from '../components/SectionHeader';

const Experience = ({ experiences = [], skills = [] }) => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      <SectionHeader title="Experience" moduleHex="0x01" />

      {/* 1. EXPERIENCE CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        {/* FIXED: Removed the double nested grid that was in your version */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {experiences.map((exp) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              onOpen={() => setSelectedExp(exp)}
            />
          ))}
        </div>
      </div>

      {/* 2. THE INTERACTIVE SKILL-SCANNER GAME */}
      <div className="relative mt-0 mb-10 w-full overflow-visible">
        {/* Game UI Header */}
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

        {/* The Game Track */}
        <div
          className="relative py-12 bg-slate-900/30 border-y border-blue-500/10 backdrop-blur-md overflow-hidden cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveSkill(null);
          }}
        >
          {/* Scanning Laser Line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)] z-30"
          />

          {/* Moving Data Stream */}
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
                    {/* Decryption Loading Bar */}
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

        {/* Decorative Footer */}
        <div className="max-w-7xl mx-auto px-6 mt-8 opacity-20 flex justify-between items-center">
          <div className="h-[1px] w-1/4 bg-gradient-to-r from-blue-500 to-transparent" />
          <span className="font-mono text-[8px] tracking-[1em] text-slate-400 uppercase">Interactive_Skill_Core_v2</span>
          <div className="h-[1px] w-1/4 bg-gradient-to-l from-blue-500 to-transparent" />
        </div>
      </div>

      {/* 3. DETAIL MODAL */}
      <AnimatePresence>
        {selectedExp && (
            <DetailedModal
              // CRITICAL: This must match the layoutId in ExperienceCard.jsx
              layoutId={`card-${selectedExp.company}`} 
              item={{
                ...selectedExp,
                title: selectedExp.role,
                category: selectedExp.company,
                points: selectedExp.highlights || [selectedExp.desc],
                tech: selectedExp.skills_used || [],
                roadmap: ["Project Discovery", "Execution Phase", "Deployment & Optimization"]
              }}
              onClose={() => setSelectedExp(null)}
            />
          )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;