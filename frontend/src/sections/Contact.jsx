import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ contact }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Branding & Copy Logic */}
          <div className="space-y-12">
            <h2 className="text-8xl font-black tracking-tighter leading-none">
              LET'S <br /> <span className="text-blue-500">CONNECT.</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">Email Me</p>
              <button 
                onClick={copyEmail}
                className="text-2xl md:text-4xl font-bold hover:text-blue-500 transition-colors break-all"
              >
                {contact.email} {copied && <span className="text-sm text-green-500 ml-2 font-mono">[COPIED!]</span>}
              </button>
            </div>
          </div>

          {/* Right: Modern Form Logic */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="NAME"
                className="bg-slate-900/50 border border-slate-800 p-4 focus:border-blue-500 outline-none font-mono text-sm"
              />
              <input 
                type="email" 
                placeholder="EMAIL"
                className="bg-slate-900/50 border border-slate-800 p-4 focus:border-blue-500 outline-none font-mono text-sm"
              />
            </div>
            <textarea 
              placeholder="MESSAGE" 
              rows="5"
              className="w-full bg-slate-900/50 border border-slate-800 p-4 focus:border-blue-500 outline-none font-mono text-sm"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 font-black tracking-widest transition-all">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;