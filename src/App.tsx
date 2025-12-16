import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
        import { AnimatePresence } from 'framer-motion';
        import Layout from './components/Layout';
        import HomePage from './pages/HomePage';
        import WorkPage from './pages/WorkPage';
        import ServicesPage from './pages/ServicesPage';
        import AboutPage from './pages/AboutPage';
        import ContactPage from './pages/ContactPage';
        import ProjectDetailPage from './pages/ProjectDetailPage';
        
        function App() {
          const location = useLocation();
        
          return (
            <Layout>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/work/:id" element={<ProjectDetailPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </AnimatePresence>
            </Layout>
          );
        }
        
        function Root() {
            return (
                <Router>
                    <App />
                </Router>
            )
        }

        export default Root;
