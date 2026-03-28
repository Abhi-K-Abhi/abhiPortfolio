import { motion } from 'framer-motion'; // REMOVE THE // FROM THIS LINE

const ProjectCard = ({ project, onOpen }) => { // Ensure this is onOpen
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onOpen} // This triggers the setSelectedProject in Projects.jsx
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.01, backgroundColor: "rgba(11, 4, 16, 0.6)" }} 
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
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
              {t.replace('_', ' ')}
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