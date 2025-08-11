import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?:string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined })); // Clear error for this field
  };
  const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_name: 'devi'
    }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.error('Email sending failed:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', content: 'info@asuvensai.com', color: 'from-blue-500 to-indigo-500' },
    { icon: Phone, title: 'Phone', content: '+91 9492756026', color: 'from-green-500 to-teal-500' },
    { icon: MapPin, title: 'Location',  content: (
      <a 
        href="https://www.google.com/maps/place/Shirdi+Sai+Nilayam/@17.4596388,78.398398,3a,75y,270h,90t/data=!3m7!1e1!3m5!1sFh43jJ3_wMZk7kjgOVDp8w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DFh43jJ3_wMZk7kjgOVDp8w%26yaw%3D270!7i13312!8i6656!4m13!1m2!2m1!1sSri+Sai+nilayam,+++h.no:14-20-677%2F413a,++V+V+Nagar,+++borabanda+++Hyderabad,+Telangana,+India!3m9!1s0x3bcb91c9b361f947:0xa31a2e7a14c0f882!8m2!3d17.4596146!4d78.3982792!10e5!14m1!1BCgIgARICCAI!15sCl1TcmkgU2FpIG5pbGF5YW0sICAgaC5ubzoxNC0yMC02NzcvNDEzYSwgIFYgViBOYWdhciwgICBib3JhYmFuZGEgICBIeWRlcmFiYWQsIFRlbGFuZ2FuYSwgSW5kaWGSARJhcGFydG1lbnRfYnVpbGRpbmeqAb8BEAEqRCJAaCBubyAxNCAyMCA2NzcgNDEzYSB2diBuYWdhciBib3JhYmFuZGEgaHlkZXJhYmFkIHRlbGFuZ2FuYSBpbmRpYSgAMh8QASIbsvEwwIVI7raJB5-DarVBTBES3QrNa8XgLfqbMlQQAiJQc3JpIHNhaSBuaWxheWFtIGggbm8gMTQgMjAgNjc3IDQxM2EgdnYgbmFnYXIgYm9yYWJhbmRhIGh5ZGVyYWJhZCB0ZWxhbmdhbmEgaW5kaWHgAQA!16s%2Fg%2F11h6rpk7p2?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" 
        className="no-underline hover:text-blue-300"
        target="_blank"
      rel="noopener noreferrer"
      >
        Hyderabad, Telangana, India
      </a>
    ),  color: 'from-red-500 to-pink-500' },
    { icon: Clock, title: 'Business Hours', content: 'Mon - Fri: 9AM - 6PM IST', color: 'from-purple-500 to-blue-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to transform your business with AI? Contact us today...</p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:scale-105 transition-all">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-blue-100">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 p-8 rounded-2xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-blue-100">Thank you for your message. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200"
                  />
                  {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200"
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200"
                  />
                  {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200"
                  />
                  {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
