// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ExperienceCard from '../components/ExperienceCard';

// // 1. Accept 'skills' as a prop
// const Experience = ({ experiences, skills }) => {
//   const [selectedExp, setSelectedExp] = useState(null);

//   return (
//     <section id="experience" className="py-32 bg-slate-950 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-black text-white mb-16 tracking-tighter">
//           EXPERIENCE<span className="text-blue-500"></span>
//         </h2>

//         {/* 2x2 GRID SYSTEM */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
//           {experiences.map((exp, index) => (
//             <ExperienceCard 
//               key={index} 
//               exp={exp} 
//               onOpen={() => setSelectedExp(exp)} 
//             />
//           ))}
//         </div>
//       </div>

// {/* --- THE "GROOVED" DATA STREAM --- */}
// <div className="relative mt-24 mb-48 group">
//   {/* The Visual "Groove" Track */}
//   <div className="absolute inset-0 bg-slate-950 border-y border-white/5 shadow-[inset_0_1px_10px_rgba(0,0,0,0.8)]" />
  
//   <div className="relative py-8 overflow-hidden">
//     {/* High-Contrast Gradient Fades */}
//     <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-20" />
//     <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-20" />

//     <motion.div 
//       animate={{ x: [0, -1400] }}
//       transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
//       className="flex whitespace-nowrap gap-12 items-center"
//     >
//       {[...Array(6)].map((_, setIndex) => (
//         <div key={setIndex} className="flex gap-12 items-center">
//           {(skills || []).map((skill, i) => (
//             <div key={i} className="flex items-center gap-10 group/item">
              
//               {/* 1. THE "SMALL" SECTION (Solid & Sharp) */}
//               <div className="flex flex-col">
//                 <span className="text-[9px] font-mono font-black text-blue-500 tracking-[0.3em] leading-none mb-1">
//                   TECH_ID
//                 </span>
//                 <span className="text-[13px] font-bold text-white tracking-widest uppercase">
//                   {skill.name}
//                 </span>
//               </div>

//               {/* 2. THE "BIG" SECTION (Hollow & Grooved) */}
//               <span 
//                 className="text-5xl font-black uppercase tracking-tighter opacity-10 group-hover/item:opacity-30 group-hover/item:text-blue-400 transition-all duration-700"
//                 style={{ 
//                   WebkitTextStroke: '1px rgba(255,255,255,0.4)', 
//                   color: 'transparent',
//                   fontFamily: 'sans-serif' 
//                 }}
//               >
//                 {skill.name}
//               </span>

//               {/* Unique Separator - Geometric Dash */}
//               <div className="h-8 w-[2px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent mx-4" />
//             </div>
//           ))}
//         </div>
//       ))}
//     </motion.div>
//   </div>
  
//   {/* Sub-label for the Groove */}
//   <div className="absolute -bottom-6 right-10 text-[8px] font-mono text-slate-600 tracking-[0.5em] uppercase">
//     System_Capabilities_Stream // v2.0
//   </div>
// </div>

//       {/* DETAIL POPUP (MODAL) */}
//       <AnimatePresence>
//         {selectedExp && (
//           <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
//             {/* Backdrop */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedExp(null)}
//               className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
//             />

//             {/* Modal Box */}
//             <motion.div 
//               layoutId={`card-${selectedExp.company}`}
//               className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[80vh]"
//             >
//               <button 
//                 onClick={() => setSelectedExp(null)}
//                 className="absolute top-6 right-6 text-slate-500 hover:text-white font-mono"
//               >
//                 [ESC_CLOSE]
//               </button>

//               <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
//                 {selectedExp.year || selectedExp.period}
//               </span>
//               <h3 className="text-3xl font-black text-white mb-2">{selectedExp.role}</h3>
//               <p className="text-xl text-blue-400 mb-8">{selectedExp.company}</p>

//               <div className="space-y-6">
//                 <h4 className="text-slate-100 font-mono text-xs uppercase tracking-widest border-b border-slate-800 pb-2">Technical_Contributions</h4>
//                 <ul className="space-y-4">
//                   {(Array.isArray(selectedExp.description) ? selectedExp.description : [selectedExp.description]).map((point, i) => (
//                     <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
//                       <span className="text-blue-500 font-mono">&gt;</span>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Experience;





import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';

const Experience = ({ experiences, skills }) => {
  const [selectedExp, setSelectedExp] = useState(null);
  
  // New States for the Marquee Game functionality
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="experience" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-16 tracking-tighter">
          EXPERIENCE<span className="text-blue-500"></span>
        </h2>

        {/* 2x2 GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              onOpen={() => setSelectedExp(exp)} 
            />
          ))}
        </div>
      </div>

      {/* --- THE INTERACTIVE SKILL-SCANNER GAME --- */}
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
            COORDINATES: [40.7128° N, 74.0060° W]<br/>
            DECRYPT_STRENGTH: 90.4%
          </div>
        </div>

        {/* The Game Track (The Groove) */}
        <div 
          className="relative py-0 bg-slate-900/30 border-y border-blue-500/10 backdrop-blur-md overflow-hidden"
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
              <div key={setIndex} className="flex gap-32 items-center">
                {(skills || []).map((skill, i) => (
                  <motion.div 
                    key={i}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    className="relative flex flex-col items-center group/node"
                  >
                    <span className="text-[10px] font-mono text-blue-500/40 mb-2">0x0{i}</span>

                    <div className="relative">
                      <span className="text-5xl font-black font-mono tracking-tighter text-white/10 group-hover/node:text-blue-500 transition-colors duration-300">
                        {/* Game Mechanic: Encrypts vowels unless hovered */}
                        {activeSkill === skill.name ? skill.name : skill.name.replace(/[aeiou]/gi, 'X')}
                      </span>
                      <div className="absolute -inset-4 border-x border-blue-500/0 group-hover/node:border-blue-500/50 group-hover/node:scale-110 transition-all duration-300" />
                    </div>

                    {/* Decryption Loading Bar */}
                    <div className="w-30 h-[3px] bg-slate-800 mt-2 relative overflow-hidden rounded-full">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 bg-blue-500 shadow-[0_0_8px_#3b82f6]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Decoration */}
        <div className="max-w-7xl mx-auto px-6 mt-6 opacity-20 flex justify-between items-center">
          <div className="h-[1px] w-1/3 bg-gradient-to-r from-blue-500 to-transparent" />
          <span className="font-mono text-[8px] tracking-[1em] text-slate-400 uppercase">Interactive_Core_V2</span>
          <div className="h-[1px] w-1/3 bg-gradient-to-l from-blue-500 to-transparent" />
        </div>
      </div>

      {/* DETAIL POPUP (MODAL) */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />

            <motion.div 
              layoutId={`card-${selectedExp.company}`}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white font-mono"
              >
                [ESC_CLOSE]
              </button>

              <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
                {selectedExp.year || selectedExp.period}
              </span>
              <h3 className="text-3xl font-black text-white mb-2">{selectedExp.role}</h3>
              <p className="text-xl text-blue-400 mb-8">{selectedExp.company}</p>

              <div className="space-y-6">
                <h4 className="text-slate-100 font-mono text-xs uppercase tracking-widest border-b border-slate-800 pb-2">Technical_Contributions</h4>
                <ul className="space-y-4">
                  {(Array.isArray(selectedExp.description) ? selectedExp.description : [selectedExp.description]).map((point, i) => (
                    <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                      <span className="text-blue-500 font-mono">&gt;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;