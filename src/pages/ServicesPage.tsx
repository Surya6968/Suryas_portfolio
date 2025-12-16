import React from 'react';
        import { motion } from 'framer-motion';
        import { Clapperboard, Video, Users, MapPin } from 'lucide-react';
        import PageWrapper from '../components/PageWrapper';
        
        const services = [
          {
            icon: <Clapperboard size={48} className="text-accent-cyan" />,
            title: 'Advertisement Production',
            description: 'Full-cycle production management, from initial concept to final delivery, ensuring a smooth and efficient process.',
          },
          {
            icon: <Video size={48} className="text-accent-cyan" />,
            title: 'Creative Direction',
            description: 'Guiding the creative vision of the project to ensure a cohesive and impactful final product that aligns with brand goals.',
          },
          {
            icon: <Users size={48} className="text-accent-cyan" />,
            title: 'On-Set Management',
            description: 'Overseeing all on-set activities, coordinating crew, and solving problems in real-time to keep the production on schedule and budget.',
          },
          {
            icon: <MapPin size={48} className="text-accent-cyan" />,
            title: 'Location & Casting',
            description: 'Scouting unique locations and casting the perfect talent to bring the creative concept to life.',
          },
        ];
        
        const ServicesPage: React.FC = () => {
          return (
            <PageWrapper>
              <div className="container mx-auto px-4 py-24 md:py-32">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">Services</h1>
                <div className="grid md:grid-cols-2 gap-12">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="flex items-start space-x-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div className="flex-shrink-0">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-light-gray">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PageWrapper>
          );
        };
        
        export default ServicesPage;
