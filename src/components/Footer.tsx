import React from 'react';
import { Brain, Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Predictive Analytics',
    'AI Automation',
    'AI Consulting'
  ];

  const companyLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, color: 'hover:text-blue-600' },
    { icon: Twitter,  color: 'hover:text-blue-400' },
    { icon: Github, color: 'hover:text-gray-600' },
    { icon: Instagram,  color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
               <img
    src="/logo.png"
    alt="AsuVens AI Logo"
    className="w-10 h-10 rounded-full"
  />
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                AsuVens AI
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Cutting-edge AI solutions and expert consulting services for the modern business landscape.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
            
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 transition-all duration-300`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              {/* <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>info@asuvensai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+91 9492756026</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <div className='flex flex-col'>
                <span>Sri Sai Nilayam,</span>
                <span> New Vivekananda Nagar,</span>
                <span>Allapur, Hyderabad, </span>
                <span> Telangana, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} AsuVens AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;