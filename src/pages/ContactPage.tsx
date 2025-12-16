import React from 'react';
        import PageWrapper from '../components/PageWrapper';
        import { motion } from 'framer-motion';
        
        const ContactPage: React.FC = () => {
          return (
            <PageWrapper>
              <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
                  <p className="text-lg text-light-gray mb-12">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                  </p>
                </div>
        
                <motion.form 
                  className="max-w-xl mx-auto space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-gray mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-gray-800 border-gray-600 rounded-md p-3 focus:ring-accent-cyan focus:border-accent-cyan" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-gray mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-gray-800 border-gray-600 rounded-md p-3 focus:ring-accent-cyan focus:border-accent-cyan" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-light-gray mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full bg-gray-800 border-gray-600 rounded-md p-3 focus:ring-accent-cyan focus:border-accent-cyan"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-accent-cyan text-primary font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors">
                      Send Message
                    </button>
                  </div>
                </motion.form>
        
                <div className="text-center mt-16">
                  <p className="text-light-gray">Email: <a href="mailto:contact@example.com" className="text-white hover:text-accent-cyan">contact@example.com</a></p>
                  <p className="text-light-gray">Phone: <a href="tel:+1234567890" className="text-white hover:text-accent-cyan">+1 (234) 567-890</a></p>
                </div>
              </div>
            </PageWrapper>
          );
        };
        
        export default ContactPage;
