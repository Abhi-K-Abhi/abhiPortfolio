import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // ADD THESE TWO LINES:
      whileHover={{ y: -10, scale: 1.02 }} 
      transition={{ 
        type: "spring", 
        stiffness: 500, // Higher stiffness = faster start
        damping: 30,    // Higher damping = less "wobble" at the end
        mass: 0.5       // Lower mass = moves lighter/faster
      }}
      className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-2 overflow-hidden"
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project)}
      // className="group relative bg-slate-900/50 border border-slate-800 p-8 cursor-pointer hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-blue-500 font-mono text-xs tracking-widest">
          PROJECT {String(project.id).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          {project.tech.slice(0, 2).map((t, i) => (
            <span key={i} className="text-[10px] text-slate-500 border border-slate-800 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm line-clamp-2 mb-6">
        {project.points[0]}
      </p>

      <div className="text-blue-500 text-xs font-bold tracking-tighter flex items-center gap-2">
        VIEW DETAILS 
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;