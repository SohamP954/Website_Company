import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'products' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About setPage={setPage} />;
      case 'products':
        return <Products setPage={setPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-warm-900 selection:bg-gold-500 selection:text-white">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
      {/* Floating WhatsApp Quick Action Button on all pages */}
      <WhatsAppButton />
    </div>
  );
}
