import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import DetailedModal from '../components/DetailedModal';
import SectionHeader from '../components/SectionHeader'; // Import it at top
// In Projects.jsx

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="pt-0 pb-24 bg-slate-950 relative overflow-hidden">
      {/* 1. NO EXTRA DIVS HERE - Just the header */}
      <SectionHeader title="Projects" moduleHex="0x02" />

      {/* 2. Standardized Grid Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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