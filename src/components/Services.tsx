import React, { useEffect, useRef } from 'react';
import { Brain, MessageSquare, Eye, TrendingUp, Cog, Handshake } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced machine learning algorithms and models tailored to solve your specific business challenges and automate complex processes.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Sophisticated NLP solutions for chatbots, sentiment analysis, language translation, and intelligent document processing.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Cutting-edge computer vision systems for image recognition, object detection, and automated visual inspection solutions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Data-driven predictive models to forecast trends, optimize operations, and make informed strategic business decisions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cog,
      title: 'AI Automation',
      description: 'Intelligent process automation solutions to streamline workflows, reduce costs, and improve operational efficiency.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Handshake,
      title: 'AI Consulting',
      description: 'Expert consulting services to guide your AI transformation journey and implement best practices for maximum ROI.',
      color: 'from-red-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-6">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive AI services designed to revolutionize your business operations 
            and drive innovation across industries.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card opacity-0 transform translate-y-8 bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;