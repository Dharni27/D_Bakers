import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'cake' },
    { id: 'products', label: 'Bakes', icon: 'bakery_dining' },
    { id: 'custom-cakes', label: 'Custom', icon: 'celebration' },
    { id: 'date-club', label: 'Club', icon: 'favorite' },
    { id: 'university-stalls', label: 'Stalls', icon: 'storefront' },
    { id: 'contact', label: 'Contact', icon: 'call' },
  ];

  return (
    <div className="fixed bottom-0 w-full z-50 pb-safe bg-surface/92 backdrop-blur-xl shadow-[0_-4px_24px_rgba(61,35,20,0.08)] flex flex-col border-t border-surface-container-high/60">
      {/* Quick WhatsApp Action Banner */}
      <div className="max-w-md mx-auto w-full px-4 pt-2 pb-1.5">
        <a 
          className="w-full h-11 px-4 rounded-full bg-primary text-surface font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,15,3,0.22)] active:scale-[0.99] hover:bg-primary-container transition-all" 
          href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=Hello%20D%20Bakers!%20I%20want%20to%20order%20fresh%20bakes%20from%20Model%20Town`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim">
            shopping_bag
          </span>
          <span className="font-semibold">Order on WhatsApp • +91</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Navigation Tab Bar */}
      <nav className="max-w-md mx-auto w-full flex items-center justify-between px-2 h-14">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex-1 min-w-[50px] h-full flex flex-col items-center justify-center gap-0.5 transition-all ${
                isActive
                  ? 'text-secondary font-bold scale-105'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span 
                className={`material-symbols-outlined text-[20px] transition-transform ${
                  isActive ? 'fill scale-110' : ''
                }`}
              >
                {tab.icon}
              </span>
              <span className="font-label-sm text-[11px] truncate max-w-[52px]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
