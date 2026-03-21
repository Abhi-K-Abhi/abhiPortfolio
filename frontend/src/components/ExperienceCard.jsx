import { motion } from 'framer-motion';

const ExperienceCard = ({ exp, onOpen }) => {
  return (
    <motion.div 
      layoutId={`card-${exp.company}`}
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      // EXACT SAME HOVER LOGIC AS PROJECT CARD
      whileHover={{ y: -10, scale: 1.02 }} 
      transition={{ 
        type: "spring", 
        stiffness: 500, // Higher stiffness = faster start
        damping: 30,    // Higher damping = less "wobble" at the end
        mass: 0.5       // Lower mass = moves lighter/faster
      }}
            
      // MATCHING THE PROJECT CARD STYLING
      className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 cursor-pointer overflow-hidden transition-colors hover:bg-slate-900/60"
    >
      {/* The Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase">
            {exp.year || exp.period}
          </span>
          <div className="px-3 py-1 bg-slate-950/50 border border-slate-800 rounded-md text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            STATION_ID: {exp.company ? exp.company.substring(0, 3) : "EXP"}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {exp.role}
        </h3>
        
        <p className="text-slate-400 font-medium flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          {exp.company}
        </p>
        
        {/* Short Preview (Matches the Project Card paragraph style) */}
        <div className="text-slate-400 text-sm line-clamp-2 mb-6 flex-grow">
          {Array.isArray(exp.description) ? exp.description[0] : exp.description}
        </div>

        <div className="text-blue-500 text-xs font-bold tracking-tighter flex items-center gap-2">
          VIEW FULL LOG 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;