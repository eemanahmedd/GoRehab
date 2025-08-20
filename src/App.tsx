import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import './styles/globals.css'

type Page = 'home' | 'features' | 'about' | 'careers' | 'contact' | 'faq';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'features':
        return <Features />;
      case 'about':
        return <About />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <main>
        {renderPage()}
      </main>
      
      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}