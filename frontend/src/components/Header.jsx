import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function Header({ activeTab, setActiveTab, onOpenQuickOrder }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Bakes & Menu' },
    { id: 'custom-cakes', label: 'Custom Cakes' },
    { id: 'date-club', label: 'Date Club' },
    { id: 'university-stalls', label: 'Campus Stalls' },
    { id: 'contact', label: 'Contact & Studio' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(61,35,20,0.05)] pt-safe border-b border-surface-container-high/60 transition-all">
      <div className="max-w-6xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Logo and Brand Info */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 min-w-0 text-left focus:outline-none group"
        >
          <img 
            alt="D Bakers Logo" 
            className="h-10 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105" 
            src={BAKERY_INFO.logoUrl} 
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight truncate group-hover:text-secondary transition-colors">
                {BAKERY_INFO.name}
              </span>
              <span className="hidden sm:inline-block font-body-sm text-body-sm text-on-surface-variant font-medium">•</span>
              <span className="hidden sm:inline-block font-body-sm text-body-sm text-on-surface-variant italic truncate">
                Artisanal Patisserie
              </span>
            </div>
            <span className="inline-flex items-center font-label-sm text-label-sm text-on-surface-variant tracking-normal truncate">
              <span className="text-[12px] mr-1 leading-none">📍</span>
              {BAKERY_INFO.shortLocation}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 px-3 py-1.5 rounded-full border border-surface-container-high">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm scale-100'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & WhatsApp CTA */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={onOpenQuickOrder}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold hover:bg-secondary-fixed-dim transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">draw</span>
            <span>Custom Quote</span>
          </button>

          <a 
            aria-label="WhatsApp Quick Order" 
            className="w-11 h-11 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-[0_4px_14px_rgba(229,115,153,0.28)] hover:bg-secondary-container transition-all active:scale-95" 
            href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=Hi%20D%20Bakers,%20I%20would%20like%20to%20place%20an%20order!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </a>

          <button 
            onClick={() => setActiveTab('contact')}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-on-primary hover:bg-primary-container transition-colors"
            title="Studio Contact & Address"
          >
            <span className="material-symbols-outlined text-[18px]">location_on</span>
          </button>
        </div>
      </div>
    </header>
  );
}
