import React from 'react';
        import { Link } from 'react-router-dom';
        import { motion } from 'framer-motion';
        import PageWrapper from '../components/PageWrapper';
        import { faker } from '@faker-js/faker';
        
        const projects = Array.from({ length: 9 }, (_, i) => ({
          id: i + 1,
          title: faker.company.catchPhrase(),
          client: faker.company.name(),
          thumbnail: `https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/${faker.color.rgb().substring(1)}/FFFFFF/png?text=Project+${i + 1}`
        }));
        
        const WorkPage: React.FC = () => {
          return (
            <PageWrapper>
              <div className="container mx-auto px-4 py-24 md:py-32">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">My Work</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <Link to={`/work/${project.id}`} key={project.id}>
                      <motion.div
                        className="relative overflow-hidden rounded-lg group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <p className="text-light-gray">{project.client}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </PageWrapper>
          );
        };
        
        export default WorkPage;
