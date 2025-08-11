import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Cutting-Edge AI Solutions';

  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullTitle.length) {
        setTitleText(fullTitle.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    
    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text leading-tight">
              {titleText}
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              We are an emerging IT company delivering innovative AI solutions and expert consulting services. 
              Transform your business with the power of artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <button
                onClick={scrollToServices}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <button
                onClick={scrollToContact}
                className="group border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>Get Started</span>
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div ref={heroRef} className="relative flex justify-center items-center animate-fade-in-right">
            <div className="relative w-96 h-96">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Floating Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-16 left-16 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-24 right-16 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-16 left-20 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl animate-float" style={{ animationDelay: '4s' }}></div>
                <div className="absolute bottom-24 right-24 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Central AI Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-pulse">
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;