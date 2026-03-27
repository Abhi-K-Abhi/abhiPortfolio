import { motion } from 'framer-motion';

const ExperienceCard = ({ exp, onOpen }) => {
  return (
    <motion.div 
      layoutId={`card-${exp.id}`}
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, backgroundColor: "rgba(11, 4, 16, 0.6)" }} 
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      // Added relative and pr-12 to ensure the right side button never hits the edge
      className="group relative w-full bg-[#150123]/60 border border-purple-500/20 rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 md:pr-12 cursor-pointer overflow-hidden backdrop-blur-xl min-h-[160px] flex items-center transition-all hover:border-purple-400/50"
    >
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-500/30 rounded-tl-sm" />

      {/* Main Container: Added max-w-full to prevent overflow */}
      <div className="relative z-10 flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-6 md:gap-8 max-w-full">
        
        {/* SECTION 1: TIMELINE */}
        <div className="flex flex-col gap-1 md:gap-2 min-w-[140px] shrink-0">
          <span className="text-purple-400/60 font-mono text-[10px] tracking-[0.4em] uppercase">Timeline</span>
          <div className="text-purple-100 font-mono text-xs font-bold tracking-wider">
            {exp.year || "2021 — PRESENT"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-purple-300/50 uppercase tracking-widest whitespace-nowrap">Active_Session</span>
          </div>
        </div>

{/* SECTION 2: IDENTITY */}
<div className="flex-1 border-l-0 md:border-l border-purple-500/10 pl-0 md:pl-10">
  
  {/* ID and Mode - Side by Side */}
  <div className="flex flex-row items-center gap-4 mb-3">
    <div className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-[11px] font-mono text-purple-300 uppercase shrink-0">
      ID: {exp.id.split('-')[1]?.toUpperCase()}
    </div>
    <div className="h-3 w-[1px] bg-purple-500/30" />
    <span className="text-purple-300 font-mono text-[13px] uppercase tracking-[0.2em] whitespace-nowrap">
      {exp.mode}
    </span>
  </div>
  
  {/* Role - No Truncate, Full Visibility */}
  <h3 className="text-2xl md:text-3xl lg:text-3xl font-black text-purple-100 group-hover:text-white transition-all duration-300 uppercase tracking-tight leading-[1.1] max-w-[95%]">
    {exp.role}
  </h3>
  
  {/* Company - Enhanced Visibility */}
  <p className="text-purple-400 font-bold text-sm md:text-base mt-2 tracking-wide">
    {exp.company}
  </p>
</div>

        {/* SECTION 3: THE BUTTON (The "Fixed" Part) */}
        {/* Removed justify-between for desktop to keep elements clustered near the right padding */}
        <div className="flex flex-row md:flex-col items-center md:items-end w-full md:w-auto gap-4 md:gap-3 border-t md:border-t-0 border-purple-500/10 pt-4 md:pt-0 shrink-0">
          <div className="text-right hidden sm:block">
            <div className="text-purple-400/40 font-mono text-[9px] tracking-widest uppercase">Encryption</div>
          </div>
          
          <div className="flex items-center pl-0 gap-4 group/btn">
            <span className="hidden xl:block text-purple-400 text-[10px] font-bold font-mono tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
              EXPAND_LOG
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/40 flex items-center justify-center bg-purple-500/5 group-hover:border-purple-300 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <span className="text-purple-200 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ExperienceCard;