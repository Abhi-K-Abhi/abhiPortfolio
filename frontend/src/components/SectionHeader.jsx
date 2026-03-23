import { motion } from 'framer-motion';

const SectionHeader = ({ title, moduleHex }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16 pt-[10px]"> 
      <div className="flex items-center gap-2 mb-2 font-mono">
        <div className="w-1 h-1 bg-blue-500 rounded-full" />
        <span className="text-[10px] text-slate-500 uppercase tracking-[0.4em]">
          System_Module_{moduleHex}
        </span>
      </div>

      {/* 2. Standardized Heading */}
      <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
        {title}<span className="text-blue-600">.</span>
      </h2>
      
      {/* 3. Uniform Decorative Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 96 }} // w-24
        viewport={{ once: true }}
        className="h-[1px] bg-gradient-to-r from-blue-600 to-transparent mt-6" 
      />
    </div>
  );
};

export default SectionHeader;