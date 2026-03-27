// import { motion } from 'framer-motion';

// const ProjectCard = ({ project, onClick }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       // ADD THESE TWO LINES:
//       whileHover={{ y: -10, scale: 1.02 }} 
//       transition={{ 
//         type: "spring", 
//         stiffness: 500, // Higher stiffness = faster start
//         damping: 30,    // Higher damping = less "wobble" at the end
//         mass: 0.5       // Lower mass = moves lighter/faster
//       }}
//       className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-2 overflow-hidden"
//       layoutId={`card-${project.id}`}
//       onClick={() => onClick(project)}
//       // className="group relative bg-slate-900/50 border border-slate-800 p-8 cursor-pointer hover:border-blue-500/50 transition-all duration-500"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <span className="text-blue-500 font-mono text-xs tracking-widest">
//           PROJECT {String(project.id).padStart(2, '0')}
//         </span>
//         <div className="flex gap-2">
//           {project.tech.slice(0, 2).map((t, i) => (
//             <span key={i} className="text-[10px] text-slate-500 border border-slate-800 px-2 py-1">
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
//         {project.title}
//       </h3>
      
//       <p className="text-slate-400 text-sm line-clamp-2 mb-6">
//         {project.points[0]}
//       </p>

//       <div className="text-blue-500 text-xs font-bold tracking-tighter flex items-center gap-2">
//         VIEW DETAILS 
//         <span className="group-hover:translate-x-1 transition-transform">→</span>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;



import { motion } from 'framer-motion';

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div 
      layoutId={`project-card-${project.id}`}
      onClick={onOpen} // CRITICAL: This must be here
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(11, 4, 16, 0.6)" }}
      className="group relative w-full bg-[#150123]/40 border border-purple-500/20 rounded-tr-3xl rounded-bl-3xl p-5 pr-[10px] cursor-pointer overflow-hidden backdrop-blur-md min-h-[160px] flex flex-col justify-between transition-all hover:border-purple-400/50"
    >
      {/* HUD Bracket */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 rounded-tl-sm pointer-events-none" />
      {/* Identity Row */}
      <div className="relative z-10 flex items-center justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[10px] font-mono text-purple-300 uppercase">
            ID: {String(project.id).padStart(2, '0')}
          </div>
          <span className="text-purple-400/90 font-mono text-[12px] tracking-widest uppercase">
          {project.category?.split(' ').slice(0, 4).join(' ') || "SYSTEM"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-black text-purple-200 uppercase tracking-tight leading-tight mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech?.slice(0, 5).map((t, i) => (
            <span key={i} className="text-[12px] text-bold font-mono text-purple-300/70 uppercase">
              // {t.replace('_', ' ')}
            </span>
          ))}
        </div>
      </div>

      {/* Action Row */}
      <div className="relative z-10 flex items-end justify-between mt-4">
        <div className="text-[10px] font-mono text-purple-400/60 uppercase tracking-[0.2em]">
          DATA_LOG_0{project.id}
        </div>
        <div className="flex items-center pl-0 gap-4 group/btn">
          <span className="hidden xl:block text-purple-300 text-[10px] font-bold font-mono tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
            EXPAND_LOG
          </span>
          <div className="w-10 h-10 md:w-9 md:h-9 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/5 group-hover:border-purple-300 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-purple-200 text-lg">→</span>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;