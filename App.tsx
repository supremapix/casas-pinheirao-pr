
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';
import { SubmitProject } from './pages/SubmitProject';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsent } from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:id" element={<ProjectDetail />} />
            <Route path="/envie-seu-projeto" element={<SubmitProject />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </Router>
  );
};

// Helper component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
