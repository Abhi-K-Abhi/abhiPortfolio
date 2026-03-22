import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import DetailedModal from '../components/DetailedModal';
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
          <DetailedModal 
            item={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;