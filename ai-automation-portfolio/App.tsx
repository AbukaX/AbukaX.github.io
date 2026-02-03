import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { ChatWidget } from './components/ChatWidget';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-slate-500 text-sm">
        © {new Date().getFullYear()} AI Automation Engineer. All rights reserved.
      </div>
      <div className="flex gap-6 text-sm font-medium text-slate-600">
        <a href="#" className="hover:text-indigo-600 transition-colors">Telegram</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">Email</a>
        <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case/:id" element={<CaseStudyDetail />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;