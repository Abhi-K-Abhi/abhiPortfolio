import { motion } from 'framer-motion';

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-2">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm">
              Software Architect & AI Engineer
            </h2>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
              {profile.name.split(' ')[0]}<br />
              <span className="text-slate-700">{profile.name.split(' ')[1]}</span>
            </h1>
          </div>

          {/* Summary from API */}
          <p className="max-w-2xl text-xl text-slate-400 leading-relaxed">
            {profile.summary}
          </p>

          {/* Strengths Tags */}
          <div className="flex flex-wrap gap-3">
            {profile.strengths.map((strength, index) => (
              <span 
                key={index}
                className="px-4 py-2 border border-slate-800 rounded-full text-xs font-mono text-slate-500 uppercase tracking-widest"
              >
                {strength}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;