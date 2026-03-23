// import { useState, useEffect } from 'react';
// import { portfolioApi } from './api/client';
// import Navbar from './components/Navbar';
// import ScrollToTop from './components/ScrollToTop';
// import SystemLoader from './components/SystemLoader'; // Ensure this file exists in components/
// import Hero from './sections/Hero';
// import Experience from './sections/Experience';
// import Projects from './sections/Projects';
// import Education from './sections/Education';
// import Contact from './sections/Contact';
// import LeaserScanner from './components/LeaserScanner';

// function App() {
//   // Using an object for state keeps the data synchronized
//   const [data, setData] = useState({
//     profile: null,
//     projects: []
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initApp = async () => {
//       try {
//         // Parallel fetching for maximum performance
//         const [profileRes, projectsRes] = await Promise.all([
//           portfolioApi.getProfile(),
//           portfolioApi.getProjects()
//         ]);

//         setData({
//           profile: profileRes.data,
//           projects: projectsRes.data
//         });
//       } catch (err) {
//         console.error("System Boot Failure. Check Backend Connection:", err);
//       } finally {
//         // A slight delay (1.5s) ensures the loader animation 
//         // feels smooth even if the API responds instantly.
//         setTimeout(() => setLoading(false), 1500);
//       }
//     };

//     initApp();
//   }, []);

//   // Use the professional SystemLoader while waiting for FastAPI
//   if (loading || !data.profile) {
//     return <SystemLoader />;
//   }

//   function App() {
//   return (
//     <div className="bg-slate-950 min-h-screen relative">
//       {/* 1. Add the Scanner here */}
//       <LeaserScanner /> 

//       {/* 2. Your existing sections */}
//       <Navbar />
//       <Hero />
//       <Experience />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

  
//   return (
//     <div className="bg-slate-950 text-white selection:bg-blue-500/30 min-h-screen">

//       <LeaserScanner />
      
//       {/* 1. Global Utilities */}
//       <Navbar />
//       <ScrollToTop />

//       {/* 2. Structured Sections - Passing data via Props */}
//       <main>
//         <Hero profile={data.profile} />
        
//         <Experience experiences={data.profile?.experience || []}  skills={data.profile?.skills || []} 
// />       
//         <Projects projects={data.projects || []} />
        
//         <Education education={data.profile.education || []} />
        
//         <Contact contact={data.profile.contact} />
//       </main>

//       {/* 3. Global Footer */}
//       <footer className="py-20 bg-black border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-[10px] font-mono text-slate-600 tracking-[0.5em]">
//             © 2026 ABHI PATEL | ENGINEERED FOR PERFORMANCE
//           </div>
          
//           {data.profile.sports && (
//             <div className="text-[10px] font-mono text-blue-900 uppercase tracking-widest">
//               {data.profile.sports}
//             </div>
//           )}
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { portfolioApi } from './api/client';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SystemLoader from './components/SystemLoader';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import LeaserScanner from './components/LeaserScanner';

function App() {
  // 1. Unified State Management
  const [data, setData] = useState({
    profile: null,
    projects: []
  });
  const [loading, setLoading] = useState(true);

  // 2. Data Initialization
  useEffect(() => {
    const initApp = async () => {
      try {
        // Parallel fetching from FastAPI for maximum speed
        const [profileRes, projectsRes] = await Promise.all([
          portfolioApi.getProfile(),
          portfolioApi.getProjects()
        ]);

        setData({
          profile: profileRes.data,
          projects: projectsRes.data
        });
      } catch (err) {
        console.error("System Boot Failure. Check Backend Connection:", err);
      } finally {
        // Keep loader visible for 1.5s for branding/smoothness
        setTimeout(() => setLoading(false), 1500);
      }
    };

    initApp();
  }, []);

  // 3. Early Return for Loading State
  if (loading || !data.profile) {
    return <SystemLoader />;
  }

  // 4. Main Application UI
  return (
    <div className="bg-slate-950 text-white selection:bg-blue-500/30 min-h-screen relative">
      
      {/* Global Utilities */}
      <LeaserScanner />
      <ScrollToTop />
      <Navbar />
      
      <main>
        {/* Pass API data to Sections via Props */}
        <Hero profile={data.profile} />
        
        {/* Experiences Section - Skills removed from here to clean it up */}
        <Experience 
          experiences={data.profile?.experience || []} 
        />      
        
        {/* Projects Section */}
        <Projects 
          projects={data.projects || []} 
        />
        
        {/* Education Section - NOW RECEIVING THE SKILLS FOR THE GAME */}
        <Education 
          education={data.profile?.education || []} 
          skills={data.profile?.skills || []} 
        />        

        <Contact contact={data.profile.contact} />
      </main>

      {/* Global Footer */}
      <footer className="py-20 bg-black border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-slate-600 tracking-[0.5em]">
            © 2026 ABHI PATEL | ENGINEERED FOR PERFORMANCE
          </div>
          
          {data.profile.sports && (
            <div className="text-[10px] font-mono text-blue-900 uppercase tracking-widest">
              {data.profile.sports}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;