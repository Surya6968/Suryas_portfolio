import React from 'react';
        import PageWrapper from '../components/PageWrapper';
        import { motion } from 'framer-motion';
        
        const skills = [
          { name: 'Production Management', level: '95%' },
          { name: 'Creative Direction', level: '90%' },
          { name: 'Video Editing', level: '85%' },
          { name: 'Budgeting & Scheduling', level: '98%' },
        ];
        
        const AboutPage: React.FC = () => {
          return (
            <PageWrapper>
              <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/7793661/pexels-photo-7793661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="About me" 
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
                    <p className="text-lg text-light-gray mb-8">
                      I am a passionate and results-driven Advertisement Production Manager with a knack for turning ambitious ideas into stunning visual realities. My journey in the industry has been fueled by a love for storytelling and a meticulous attention to detail.
                    </p>
        
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={skill.name}>
                          <p className="font-medium mb-1">{skill.name}</p>
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-accent-cyan h-2.5 rounded-full"
                              style={{ width: skill.level }}
                              initial={{ width: 0 }}
                              animate={{ width: skill.level }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PageWrapper>
          );
        };
        
        export default AboutPage;
