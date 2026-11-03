import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import QuickOrderModal from './components/QuickOrderModal';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CustomCakesPage from './pages/CustomCakesPage';
import DateClubPage from './pages/DateClubPage';
import UniversityStallsPage from './pages/UniversityStallsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [quickOrderItem, setQuickOrderItem] = useState(null);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenQuickOrder = (item = null) => {
    setQuickOrderItem(item);
    setIsQuickOrderOpen(true);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage 
            setActiveTab={setActiveTab} 
            onOpenQuickOrder={() => handleOpenQuickOrder(null)} 
          />
        );
      case 'products':
        return (
          <ProductsPage 
            setActiveTab={setActiveTab} 
            onOpenQuickOrder={handleOpenQuickOrder} 
          />
        );
      case 'custom-cakes':
        return (
          <CustomCakesPage 
            onOpenQuickOrder={() => handleOpenQuickOrder({ name: 'Custom Celebration Cake' })} 
          />
        );
      case 'date-club':
        return <DateClubPage />;
      case 'university-stalls':
        return <UniversityStallsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            setActiveTab={setActiveTab} 
            onOpenQuickOrder={() => handleOpenQuickOrder(null)} 
          />
        );
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col relative antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Top Fixed Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenQuickOrder={() => handleOpenQuickOrder(null)} 
      />

      {/* Main Content View with Top & Bottom Safe Spacing */}
      <main className="flex-1 flex flex-col relative w-full pt-20 pb-44 sm:pb-36 bg-surface">
        {renderActivePage()}
      </main>

      {/* Artisanal Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Mobile-Optimized Fixed Bottom Navigation & WhatsApp Bar */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Quick Custom Order / Quote Modal */}
      <QuickOrderModal
        isOpen={isQuickOrderOpen}
        onClose={() => setIsQuickOrderOpen(false)}
        initialItem={quickOrderItem}
      />
    </div>
  );
}
