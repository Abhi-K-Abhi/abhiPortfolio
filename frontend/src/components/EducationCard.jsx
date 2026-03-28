// import { motion } from 'framer-motion';

// const EducationCard = ({ edu, onOpen }) => {
//   return (
//     <motion.div 
//       layoutId={`edu-card-${edu.id}`}
//       onClick={onOpen}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ scale: 1.005, backgroundColor: "rgba(11, 4, 16, 0.6)" }} 
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//       // FIX: Added pr-[10px] for the 10px arrow margin and min-w-0 for text wrapping
//       className="group relative w-full bg-[#150123]/60 border border-purple-500/20 rounded-2xl p-6 md:p-8 pr-[10px] cursor-pointer overflow-hidden backdrop-blur-md min-h-[180px] flex flex-row items-center transition-all hover:border-purple-400/50"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       <div className="relative z-10 flex flex-row w-full items-center justify-between gap-4 md:gap-8">
        
//         {/* Left Side: Title and University */}
//         <div className="flex-1 min-w-0">
//           <div className="flex flex-row items-center gap-4 mb-2">
//              <span className="text-purple-200 font-mono text-[11px] md:text-[13px] tracking-[0.2em] uppercase whitespace-nowrap">
//               {edu.year}
//             </span>
//             <div className="hidden sm:block h-[1px] w-12 bg-purple-500/40" />
//             <div className="px-2 py-0.5 bg-black/70 border border-purple-500/30 rounded text-[11px] font-mono text-purple-300/80 uppercase shrink-0">
//               ID: {edu.id.split('-')[1]?.toUpperCase() || "CORE"}
//             </div>
//           </div>

//           <h3 className="text-xl md:text-2xl lg:text-2xl font-black text-purple-100 group-hover:text-white transition-colors uppercase tracking-tight leading-tight mb-3">
//             {edu.degree}
//           </h3>
          
//           <p className="text-purple-400 font-bold flex items-center gap-2 text-sm md:text-base">
//             <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
//             {edu.uni}
//           </p>
//         </div>

//         {/* Center: Details (Responsive hidden) */}
//         <div className="hidden lg:block flex-1 border-l border-purple-500/10 pl-8">
//           <div className="text-slate-400 text-m font-light leading-relaxed">
//             <span className="block text-purple-200/70 font-medium mb-1">
//               {edu.major}
//             </span>
//             <span className="text-purple-300/50 font-mono text-[11px] uppercase tracking-[0.2em]">
//               {edu.location}
//             </span>
//           </div>
//         </div>

//         {/* Right Side: Grades & Action CTA */}
//         <div className="flex flex-col items-end justify-between min-h-[160px] shrink-0">
          
//           {/* NEW: Grade/GPA Badge at Top Right */}
//           <div className="flex flex-col items-end">
//             <span className="text-[10px] font-mono text-purple-400/60 uppercase tracking-widest mb-1">Academic_Score</span>
//             <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/40 rounded-full">
//                <span className="text-purple-100 font-mono font-bold text-sm">
//                 {edu.cgpa || "N/A"} 
//                </span>
//             </div>
//           </div>

//           {/* Moved down: Action CTA */}
//           <div className="flex flex-col items-end gap-1">
//             <div className="text-purple-400/60 text-[9px] font-bold font-mono tracking-[0.2em] group-hover:text-purple-300 transition-colors uppercase">
//               View_Log
//             </div>
//             <div className="flex items-center pl-0 gap-4 group/btn">
//               <span className="hidden xl:block text-purple-400 text-[10px] font-bold font-mono tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
//                 EXPAND_LOG
//               </span>
//               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/5 group-hover:border-purple-300 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]">
//                 <span className="group-hover:translate-x-1 transition-transform duration-300 text-purple-200 text-lg">→</span>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default EducationCard;


import { motion } from 'framer-motion';

const EducationCard = ({ edu, onOpen }) => {
  return (
    <motion.div 
      layoutId={`edu-card-${edu.id}`}
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.005, backgroundColor: "rgba(11, 4, 16, 0.6)" }} 
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
      // SHAPE CHANGE: Replaced rounded-2xl with rounded-tr-3xl and rounded-bl-3xl
      // Keeping pr-[10px] for your arrow margin
      className="group relative w-full bg-[#150123]/60 border border-purple-500/20 rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 pr-[10px] cursor-pointer overflow-hidden backdrop-blur-md min-h-[180px] flex flex-row items-center transition-all hover:border-purple-400/50"
    >
      {/* ADDED: Decorative HUD Corner to match Experience Card */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-500/30 rounded-tl-sm" />

      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-row w-full items-center justify-between gap-4 md:gap-8">
        
        {/* Left Side: Title and University */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-row items-center gap-4 mb-2">
             <span className="text-purple-200 font-mono text-[11px] md:text-[13px] tracking-[0.2em] uppercase whitespace-nowrap">
              {edu.year}
            </span>
            <div className="hidden sm:block h-[1px] w-12 bg-purple-500/40" />
            <div className="px-2 py-0.5 bg-black/70 border border-purple-500/30 rounded text-[11px] font-mono text-purple-300/80 uppercase shrink-0">
              ID: {edu.id.split('-')[1]?.toUpperCase() || "CORE"}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl lg:text-2xl font-black text-purple-100 group-hover:text-white transition-colors uppercase tracking-tight leading-tight mb-3">
            {edu.degree}
          </h3>
          
          <p className="text-purple-400 font-bold flex items-center gap-2 text-sm md:text-base">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            {edu.uni}
          </p>
        </div>

        {/* Center: Details (Responsive hidden) */}
        <div className="hidden lg:block flex-1 border-l border-purple-500/10 pl-8">
          <div className="text-slate-400 text-m font-light leading-relaxed">
            <span className="block text-purple-200/70 font-medium mb-1">
              {edu.major}
            </span>
            <span className="text-purple-300/50 font-mono text-[11px] uppercase tracking-[0.2em]">
              {edu.location}
            </span>
          </div>
        </div>

        {/* Right Side: Grades & Action CTA */}
        <div className="flex flex-col items-end justify-between min-h-[160px] shrink-0">
          
          {/* Grade/GPA Badge */}
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-purple-400/60 uppercase tracking-widest mb-1">Academic_Score</span>
            <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/40 rounded-full">
               <span className="text-purple-100 font-mono font-bold text-sm">
                {edu.cgpa || "N/A"} 
               </span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col items-end gap-1">
            <div className="text-purple-400/60 text-[9px] font-bold font-mono tracking-[0.2em] group-hover:text-purple-300 transition-colors uppercase">
              View_Log
            </div>
            <div className="flex items-center pl-0 gap-4 group/btn">
              <span className="hidden xl:block text-purple-400 text-[10px] font-bold font-mono tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
                EXPAND_LOG
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/5 group-hover:border-purple-300 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-purple-200 text-lg">→</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default EducationCard;