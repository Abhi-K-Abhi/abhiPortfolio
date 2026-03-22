import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import DetailedModal from '../components/DetailedModal';
import SectionHeader from '../components/SectionHeader'; // Import it at top
// In Projects.jsx

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative">
      <SectionHeader title="Projects" moduleHex="0x02">
      </SectionHeader> 

      <div className="max-w-7xl mx-auto px-6">
        {/* project grid here */}

        <div className="max-w-7xl mx-auto px-6">


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