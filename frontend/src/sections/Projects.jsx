import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
// In Projects.jsx

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl font-black tracking-tighter">PROJECTS</h2>
          <span className="text-slate-500 font-mono mb-2">/ {projects.length} TOTAL</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
      </div>

      {/* Detail Modal Layer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="bg-slate-900 border border-slate-800 w-full max-w-2xl p-10 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white"
              >
                CLOSE [X]
              </button>
              
              <h2 className="text-4xl font-bold mb-6">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-4">
                {selectedProject.points.map((point, i) => (
                  <li key={i} className="text-slate-300 leading-relaxed flex gap-3">
                    <span className="text-blue-500">•</span> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;