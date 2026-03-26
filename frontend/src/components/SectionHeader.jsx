import { motion } from 'framer-motion';

const SectionHeader = ({ title, moduleHex }) => {
  return (
    /* h-[200px] acts as the "Anchor Box" to lock the text position */
    <div className="max-w-7xl mx-auto px-6 h-[200px] flex flex-col justify-center relative z-20"> 
      {/* 1. TOP LABEL */}
      <div className="flex items-center gap-2 mb-2 font-mono">
        <div className="w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
        <span className="text-[10px] text-purple-400/40 uppercase tracking-[0.4em]">
          System_Module_{moduleHex}
        </span>
      </div>

      {/* 2. Heading - Using your #E9D5FF (purple-200) */}
      <h2 className="text-5xl md:text-6xl font-black text-[#E9D5FF] tracking-tighter uppercase leading-none">
        {title}
      </h2>
      
      {/* 3. Decorative Line */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="h-[2px] bg-gradient-to-r from-purple-500 to-transparent mt-4" 
      />
    </div>
  );
};

export default SectionHeader;