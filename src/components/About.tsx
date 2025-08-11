import React, { useEffect, useRef, useState } from 'react';
import { Database, Cloud, Code, Cpu, Network, Settings, Pocket as Docker, Server, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    success: 0,
    support: 0
  });

  const stats = [
    { key: 'projects', label: 'AI Projects Delivered', target: 50, suffix: '+' },
    { key: 'clients', label: 'Happy Clients', target: 25, suffix: '+' },
    { key: 'success', label: 'Success Rate', target: 95, suffix: '%' },
    { key: 'support', label: 'Support Available', target: 24, suffix: '/7' }
  ];

  const techStack = [
    { icon: Code, name: 'Python', color: 'from-yellow-500 to-blue-500' },
    { icon: Database, name: 'AI/ML', color: 'from-green-500 to-teal-500' },
    { icon: Cloud, name: 'Cloud', color: 'from-blue-500 to-indigo-500' },
    { icon: Cpu, name: 'Hardware', color: 'from-red-500 to-pink-500' },
    { icon: Network, name: 'Networks', color: 'from-purple-500 to-blue-500' },
    { icon: Settings, name: 'DevOps', color: 'from-gray-500 to-gray-700' },
    { icon: Docker, name: 'Docker', color: 'from-blue-400 to-blue-600' },
    { icon: Server, name: 'Servers', color: 'from-indigo-500 to-purple-500' },
    { icon: Terminal, name: 'CLI', color: 'from-green-400 to-green-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats
            stats.forEach((stat) => {
              let current = 0;
              const increment = stat.target / 60;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                  current = stat.target;
                  clearInterval(timer);
                }
                setAnimatedStats(prev => ({
                  ...prev,
                  [stat.key]: Math.floor(current)
                }));
              }, 50);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              About AsuVens AI
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                AsuVens AI is an emerging IT company at the forefront of artificial intelligence innovation. 
                We specialize in delivering cutting-edge AI solutions that transform businesses and drive digital transformation.
              </p>
              
              <p>
                Our team of expert AI engineers, data scientists, and consultants work collaboratively to create 
                intelligent systems that solve real-world problems and deliver measurable business value.
              </p>
              
              <p>
                From machine learning algorithms to natural language processing, computer vision to predictive analytics, 
                we bring the latest AI technologies to help your organization stay competitive in the digital age.
              </p>
            </div>

            {/* Stats Grid */}
            <div ref={aboutRef} className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-2">
                    {animatedStats[stat.key as keyof typeof animatedStats]}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Visual */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 w-80 h-80">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer animate-pulse shadow-lg`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: '3s'
                    }}
                    title={tech.name}
                  >
                    <IconComponent size={28} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;