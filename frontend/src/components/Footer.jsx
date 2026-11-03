import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="w-full bg-surface-container-high/40 border-t border-surface-container-highest/60 pt-10 pb-28 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Top brand header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[24px]">cake</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                {BAKERY_INFO.name} Panipat
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tactile artisanal patisserie & celebration cakes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=Hi%20D%20Bakers!`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-secondary text-on-secondary text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-secondary-container transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="https://instagram.com/dbakers_panipat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-surface-container-lowest text-secondary flex items-center justify-center shadow-sm hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Navigation links & Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2 border-t border-surface-container-highest/40 text-left">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wider">
              Explore Menu
            </span>
            <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Gourmet Brownies
            </button>
            <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Pastel Cupcakes
            </button>
            <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              French Fruit Tarts
            </button>
            <button onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Signature Grand Sampler
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wider">
              Specialties
            </span>
            <button onClick={() => { setActiveTab('custom-cakes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Custom Tier Cakes
            </button>
            <button onClick={() => { setActiveTab('date-club'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              The Date Club (VIP)
            </button>
            <button onClick={() => { setActiveTab('university-stalls'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Campus Pop-Up Stalls
            </button>
            <button onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Model Town Kitchen Studio
            </button>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wider">
              Studio & Timings
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              📍 Model Town, Panipat - 132103
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              ⏰ {BAKERY_INFO.hours}
            </p>
            <span className="font-label-sm text-label-sm text-emerald-700 font-semibold flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              100% Pure Eggless Studio
            </span>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-4 border-t border-surface-container-highest/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs text-on-surface-variant">
          <span>© {new Date().getFullYear()} D Bakers Panipat. Handcrafted with Belgian couverture & French techniques.</span>
          <span className="italic text-secondary">Crafted with tactile warmth</span>
        </div>
      </div>
    </footer>
  );
}
