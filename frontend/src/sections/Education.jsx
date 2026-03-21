import { motion } from 'framer-motion';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-slate-500">Academic Background</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {education.map((edu) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-slate-800 bg-slate-950/50 hover:border-blue-500/30 transition-colors relative group"
            >
              <div className="absolute top-8 right-8 text-blue-500 font-mono text-xl font-bold">
                {edu.cgpa}
              </div>
              <h3 className="text-sm font-mono text-blue-500 mb-2 uppercase tracking-widest">{edu.uni}</h3>
              <h4 className="text-2xl font-bold mb-1">{edu.degree}</h4>
              <p className="text-slate-400 mb-6 font-medium">{edu.major} • {edu.year}</p>
              
              <ul className="space-y-3">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                    <span className="text-blue-900">▹</span> {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;