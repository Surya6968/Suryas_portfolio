import React from 'react';
        import { motion } from 'framer-motion';
        import { ArrowDown, Film, Lightbulb, ShieldCheck } from 'lucide-react';
        import PageWrapper from '../components/PageWrapper';
        import { Link } from 'react-router-dom';
        import { faker } from '@faker-js/faker';
        
        const featuredProjects = Array.from({ length: 3 }, (_, i) => ({
          id: i + 1,
          title: faker.company.catchPhrase(),
          client: faker.company.name(),
          thumbnail: `https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/${faker.color.rgb({ format: 'hex', casing: 'lower' }).substring(1)}/FFFFFF/png?text=Project+${i + 1}`
        }));
        
        const marketingPoints = [
            {
                icon: <Lightbulb size={40} className="text-accent-cyan" />,
                title: "Creative Vision",
                description: "Transforming concepts into compelling narratives that resonate with audiences and elevate brands."
            },
            {
                icon: <Film size={40} className="text-accent-cyan" />,
                title: "Seamless Production",
                description: "Expertly managing every stage of production, from pre-production planning to final post-production polish."
            },
            {
                icon: <ShieldCheck size={40} className="text-accent-cyan" />,
                title: "Reliable Delivery",
                description: "Delivering high-quality results on time and on budget, ensuring client satisfaction and project success."
            }
        ];
        
        const HomePage: React.FC = () => {
          return (
            <PageWrapper>
              <section className="relative h-screen w-full overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  poster="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/1920x1080/000000/FFFFFF/png?text=Loading+Video..."
                >
                  <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-4"
                  >
                    Crafting Cinematic Stories
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-2xl max-w-3xl"
                  >
                    An Advertisement Production Manager dedicated to bringing creative visions to life.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                >
                  <ArrowDown size={48} className="text-white" />
                </motion.div>
              </section>
        
              <section className="py-20 md:py-32 bg-primary">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Introduction</h2>
                  <p className="text-lg md:text-xl max-w-3xl mx-auto text-light-gray">
                    With over a decade of experience in the fast-paced world of advertising, I specialize in managing productions from concept to final delivery. My passion lies in telling compelling stories that captivate audiences and drive results.
                  </p>
                </div>
              </section>
        
              <section className="py-20 md:py-32 bg-gray-900/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16">Why Work With Me?</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {marketingPoints.map((point, index) => (
                            <motion.div 
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="mb-4">{point.icon}</div>
                                <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
                                <p className="text-light-gray max-w-xs">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
              </section>
        
              <section className="py-20 md:py-32 bg-primary">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Featured Work</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                      <Link to={`/work/${project.id}`} key={project.id}>
                        <motion.div
                          className="relative overflow-hidden rounded-lg group"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
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
                  <div className="text-center">
                    <Link to="/work">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent-cyan text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-colors text-lg"
                      >
                        View All Work
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </section>
            </PageWrapper>
          );
        };
        
        export default HomePage;
