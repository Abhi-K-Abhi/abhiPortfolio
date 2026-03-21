import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';

const Experience = ({ experiences }) => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-16 tracking-tighter">
          EXPERIENCE<span className="text-blue-500"></span>
        </h2>

        {/* 2x2 GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              onOpen={() => setSelectedExp(exp)} 
            />
          ))}
        </div>
      </div>

      {/* DETAIL POPUP (MODAL) */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              layoutId={`card-${selectedExp.company}`}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white font-mono"
              >
                [ESC_CLOSE]
              </button>

              <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
                {selectedExp.year || selectedExp.period}
              </span>
              <h3 className="text-3xl font-black text-white mb-2">{selectedExp.role}</h3>
              <p className="text-xl text-blue-400 mb-8">{selectedExp.company}</p>

              <div className="space-y-6">
                <h4 className="text-slate-100 font-mono text-xs uppercase tracking-widest border-b border-slate-800 pb-2">Technical_Contributions</h4>
                <ul className="space-y-4">
                  {(Array.isArray(selectedExp.description) ? selectedExp.description : [selectedExp.description]).map((point, i) => (
                    <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                      <span className="text-blue-500 font-mono">&gt;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;