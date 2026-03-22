import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import EducationCard from '../components/EducationCard';
import DetailedModal from '../components/DetailedModal';

const Education = ({ education = [] }) => {
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <section id="education" className="py-24 bg-slate-950 border-t border-slate-900">
      <SectionHeader title="Education" moduleHex="0x03" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {education && education.map((edu) => (
            <EducationCard 
              key={edu.id} 
              edu={edu} 
              onOpen={() => setSelectedEdu(edu)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEdu && (
            <DetailedModal 
              // CRITICAL: Matches the ID we will set in the EducationCard
              layoutId={`edu-${selectedEdu.id}`}
              item={{
                ...selectedEdu,
                title: selectedEdu.degree || "Degree Information",
                category: selectedEdu.uni || "Institution",
                points: selectedEdu.details || ["Curriculum details pending"],
                tech: [
                  `GPA: ${selectedEdu.cgpa || 'N/A'}`,
                  selectedEdu.major || "General Engineering",
                  selectedEdu.location || "Remote",
                  selectedEdu.year || "Ongoing"
                ].filter(Boolean),
                roadmap: ["Academic Curriculum", "Key Projects", "Research & Achievements"]
              }} 
              onClose={() => setSelectedEdu(null)} 
            />
          )}
      </AnimatePresence>
    </section>
  );
};

export default Education;