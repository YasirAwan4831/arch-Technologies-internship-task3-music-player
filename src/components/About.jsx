import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    const el = document.getElementById('about');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className={`mt-10 mb-8 p-6 md:p-10 rounded-[2rem] bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg font-light">
          <span className="font-semibold text-white">Full Stack Developer.</span> Building modern web experiences with clean code and thoughtful design.
        </p>
        <div className="w-16 h-1 mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default About;
