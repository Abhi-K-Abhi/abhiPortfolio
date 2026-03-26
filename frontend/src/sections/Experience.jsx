import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import DetailedModal from '../components/DetailedModal';
import SectionHeader from '../components/SectionHeader';

const Experience = ({ experiences = []}) => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="pt-0 pb-24 bg-slate-950 relative overflow-hidden">
      <SectionHeader title="Experience" moduleHex="0x01" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Same Gap (8) as Projects for uniformity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              onOpen={() => setSelectedExp(exp)} 
            />
          ))}
        </div>
      </div>

      {/* 3. DETAIL MODAL */}
      <AnimatePresence>
        {selectedExp && (
          <DetailedModal
            // Use the company name as the unique ID for the animation
            layoutId={`card-${selectedExp.company}`} 
            item={{
              ...selectedExp,
                  title: selectedExp.role,
                  category: selectedExp.company,
                  // Ensure these fields are passed through:
                  image_url: selectedExp.image_url,
                  data_flow: selectedExp.data_flow,
                  depth_ride: selectedExp.depth_ride,
                  impact_metrics: selectedExp.impact_metrics,
                  // fallback for existing fields
                  points: selectedExp.detailed_points || selectedExp.highlights,
                  tech: selectedExp.tech_stack || [],
                  roadmap: selectedExp.roadmap || []
            }}
            onClose={() => setSelectedExp(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;