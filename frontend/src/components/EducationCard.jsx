// import { motion } from 'framer-motion';

// const EducationCard = ({ edu, onOpen }) => {
//   return (
//     <motion.div 
//       layoutId={`edu-card-${edu.id}`}
//       onClick={onOpen}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -10, scale: 1.02 }} 
//       transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
//       className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-2 cursor-pointer overflow-hidden transition-colors hover:bg-slate-900/60"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
//       <div className="relative z-10 flex flex-col h-full">
//         <div className="flex justify-between items-start mb-4">
//           <span className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase">
//             {edu.year}
//           </span>
//           <div className="px-3 py-1 bg-slate-950/50 border border-slate-800 rounded-md text-[9px] font-mono text-slate-500 uppercase tracking-widest">
//             EDU_ID: {edu.id.split('-')[1]?.toUpperCase() || "CORE"}
//           </div>
//         </div>

//         <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
//           {edu.degree}
//         </h3>
        
//         <p className="text-slate-400 font-medium flex items-center gap-2 mb-4">
//           <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
//           {edu.uni}
//         </p>
        
//         <div className="text-slate-400 text-sm line-clamp-2 mb-6 flex-grow">
//           {edu.major} • {edu.location}
//         </div>

//         <div className="text-blue-500 text-xs font-bold tracking-tighter flex items-center gap-2">
//           ACADEMIC RECORDS
//           <span className="group-hover:translate-x-1 transition-transform">→</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default EducationCard;




// import { motion } from 'framer-motion';

// const EducationCard = ({ edu, onOpen }) => {
//   return (
//     <motion.div 
//       layoutId={`edu-card-${edu.id}`}
//       onClick={onOpen}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -8, scale: 1.01 }} 
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//       // Fixed height (h-[320px]) ensures all cards in this section are identical
//       className="group relative bg-[#150123]/40 border border-purple-500/20 rounded-2xl p-6 cursor-pointer overflow-hidden backdrop-blur-md h-[320px] flex flex-col transition-all hover:border-purple-400/50 hover:bg-[#150123]/60"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
//       <div className="relative z-10 flex flex-col h-full">
//         <div className="flex justify-between items-start mb-6">
//           <span className="text-purple-400 font-mono text-[11px] tracking-[0.3em] uppercase">
//             {edu.year}
//           </span>
//           <div className="px-3 py-1 bg-black/40 border border-purple-500/30 rounded-md text-[9px] font-mono text-purple-300/60 uppercase tracking-widest">
//             EDU_ID: {edu.id.split('-')[1]?.toUpperCase() || "CORE"}
//           </div>
//         </div>

//         {/* text-purple-200 used for the main degree title */}
//         <h3 className="text-2xl font-black text-purple-200 mb-2 group-hover:text-white transition-colors uppercase tracking-tight">
//           {edu.degree}
//         </h3>
        
//         <p className="text-purple-300/80 font-medium flex items-center gap-2 mb-4">
//           <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
//           {edu.uni}
//         </p>
        
//         <div className="text-slate-400 text-sm font-light leading-relaxed mb-6 flex-grow line-clamp-3">
//           {edu.major} <span className="mx-2 text-purple-900/50">|</span> {edu.location}
//         </div>

//         <div className="pt-4 border-t border-purple-500/10 text-purple-400 text-[10px] font-bold font-mono tracking-widest flex items-center justify-between group-hover:text-purple-200 transition-colors">
//           <span>ACADEMIC_RECORDS</span>
//           <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
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
      whileHover={{ scale: 1.005, backgroundColor: "rgba(11, 4, 16, 0.6)" }} 
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      // Full width, lower height (min-h-[180px]) for horizontal stretch
      className="group relative w-full bg-[#150123] border border-purple-500/20 rounded-2xl p-8 cursor-pointer overflow-hidden backdrop-blur-md min-h-[180px] flex flex-row items-center transition-all hover:border-purple-400/50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-row w-full items-center justify-between gap-8">
        
        {/* Left Side: Title and University */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
             <span className="text-purple-200 font-mono text-[13px] tracking-[0.2em] uppercase whitespace-nowrap">
              {edu.year}
            </span>
            <div className="h-[1px] w-12 bg-purple-500/40" />
            <div className="px-2 py-0.5 bg-black/70 border border-purple-500/30 rounded text-[12px] font-mono text-purple-300/80 uppercase">
              ID: {edu.id.split('-')[1]?.toUpperCase() || "CORE"}
            </div>
          </div>

          <h3 className="text-3xl font-black text-purple-200 group-hover:text-white transition-colors uppercase tracking-tight">
            {edu.degree}
          </h3>
          
          <p className="text-purple-300/80 font-medium flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            {edu.uni}
          </p>
        </div>

        {/* Center: Details (Only visible on larger screens to keep it clean) */}
        <div className="hidden lg:block flex-1 border-l border-purple-500/40 pl-0 ml-0">
          <div className="text-slate-400 text-m font-light leading-relaxed pl-4">
            {/* Full names will now wrap naturally instead of being cut off */}
            <span className="block text-purple-200/70 font-medium">
              {edu.major}
            </span>
            <span className="text-purple-300/70 font-mono text-[12px] uppercase tracking-wider">
              {edu.location}
            </span>
          </div>
        </div>

        {/* Right Side: Action CTA */}
        <div className="flex flex-col items-end gap-2">
          <div className="text-purple-400 text-[10px] font-bold font-mono tracking-[0.2em] group-hover:text-purple-200 transition-colors">
            VIEW_FULL_LOG
          </div>
          <div className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400 group-hover:bg-purple-500/10 transition-all">
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-purple-200">→</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default EducationCard;