import React, { useState } from 'react';
import { BAKERY_INFO, CATEGORIES, PRODUCTS, SIGNATURE_SAMPLER } from '../data/bakeryData';

export default function ProductsPage({ setActiveTab, onOpenQuickOrder }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showSamplerDetails, setShowSamplerDetails] = useState(false);

  // Filter products based on selected tab
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Page Header */}
      <div className="px-4 pt-3 pb-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
              Handcrafted with Love
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
              Bakes & Creations
            </h2>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-bold">Baking Fresh</span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Small-batch gourmet confections baked daily in our Model Town studio.
        </p>
      </div>

      {/* Category Filter Pills (Horizontal Scrollable) */}
      <div className="w-full overflow-x-auto no-scrollbar py-2 px-4">
        <div className="flex items-center gap-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label-lg text-label-lg transition-all flex items-center gap-1.5 font-medium ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-sm scale-100 font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {cat.icon && (
                  <span className="material-symbols-outlined text-[16px]">
                    {cat.icon}
                  </span>
                )}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Treat Platter Hero Card */}
      <div className="px-4 pt-3 pb-4">
        <div className="relative w-full rounded-3xl overflow-hidden bg-primary-container text-on-primary shadow-md flex flex-col border border-outline-variant/30">
          <div className="relative w-full h-52 overflow-hidden">
            <img 
              alt={SIGNATURE_SAMPLER.name} 
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
              src={SIGNATURE_SAMPLER.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent"></div>
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-surface/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-bold shadow-sm">
                ✨ Artisan Highlight
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm font-semibold">
                Weekend Hamper
              </span>
            </div>
          </div>
          <div className="p-4 sm:p-5 flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
              <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                {SIGNATURE_SAMPLER.name}
              </h3>
              <span className="font-headline-sm text-headline-sm text-secondary-fixed-dim font-bold">
                ₹{SIGNATURE_SAMPLER.price}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              {SIGNATURE_SAMPLER.description}
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a 
                className="flex-1 h-11 px-4 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(229,115,153,0.28)] active:scale-95 transition-all font-semibold" 
                href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello D Bakers! I would love to order the Signature Grand Sampler Platter (₹999) from Model Town.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Order Platter</span>
              </a>
              <button 
                className="h-11 w-11 rounded-full bg-surface/10 hover:bg-surface/20 text-on-primary flex items-center justify-center transition-colors" 
                onClick={() => setShowSamplerDetails(!showSamplerDetails)}
                title="Toggle Sampler Contents"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showSamplerDetails ? 'expand_less' : 'expand_more'}
                </span>
              </button>
            </div>

            {/* Expandable Sampler Details Accordion */}
            {showSamplerDetails && (
              <div className="pt-3 mt-1 border-t border-surface/15 text-xs text-on-primary-container flex flex-col gap-1.5 animate-fade-in">
                {SIGNATURE_SAMPLER.items.map((item, idx) => (
                  <p key={idx} className="flex items-center gap-1.5">
                    <span className="text-secondary-fixed-dim">•</span>
                    <span>{item}</span>
                  </p>
                ))}
                <p className="text-secondary-fixed font-semibold mt-1">
                  Available 100% Eggless upon request • Freshly baked upon ordering
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Cakes Studio Process Rail */}
      <div className="px-4 py-3 flex flex-col gap-3">
        <div className="rounded-3xl p-5 bg-surface-container-low flex flex-col gap-3 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[22px] fill">celebration</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wide">
                Bespoke Celebrations
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Custom Cake Studio
              </h3>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Every milestone deserves a centerpiece crafted with precision. From intimate bentos to multi-tiered wedding confections.
          </p>

          {/* 3-Step Process Rail */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-surface-container">
              <div className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-title-md text-sm font-bold text-primary">Pick Your Flavor</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                  Belgian Truffle, Strawberry Blossom, Biscoff Crunch, Fresh Fruit Gateau, or Pistachio Rose.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-surface-container">
              <div className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-title-md text-sm font-bold text-primary">Choose Silhouette & Weight</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                  Bento (350g cute box), 1kg Celebration, 2-Tier Grand, Minimalist Vintage Piping, or Floral Crown.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-surface-container">
              <div className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-title-md text-sm font-bold text-primary">Send Reference & Personalize</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                  Share Pinterest pins or color swatches directly with our head baker in Model Town.
                </span>
              </div>
            </div>
          </div>

          {/* Action Button: Opens Custom Studio tab */}
          <button 
            onClick={() => { setActiveTab('custom-cakes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full h-11 px-4 rounded-full bg-primary hover:bg-primary-container text-surface font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all font-semibold mt-1" 
          >
            <span className="material-symbols-outlined text-[18px] text-secondary-fixed-dim">draw</span>
            <span>Launch Interactive Cake Studio</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Section Header: Products Showcase */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
            Small-Batch Fresh
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Signature Bakery Menu
          </h3>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
          {filteredProducts.length} Delights
        </span>
      </div>

      {/* Product Grid (2-Column Mobile Friendly) */}
      <div className="px-4 grid grid-cols-2 gap-3 pb-4">
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col rounded-2xl bg-surface-container-lowest overflow-hidden shadow-sm border border-outline-variant/30 transition-transform active:scale-[0.99] hover:shadow-md"
          >
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                src={item.image} 
                alt={item.name} 
              />
              {item.badge && (
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary/80 backdrop-blur-md text-surface text-[10px] font-bold shadow-sm">
                  {item.badge}
                </span>
              )}
              {item.isEggless && (
                <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md bg-surface-container-low/90 backdrop-blur-sm text-primary text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> 100% Eggless
                </span>
              )}
            </div>

            <div className="p-3 flex flex-col flex-1 justify-between gap-2">
              <div className="flex flex-col">
                <h4 className="font-title-md text-sm text-primary line-clamp-1 font-bold">
                  {item.name}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] line-clamp-2 mt-0.5">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-1 border-t border-surface-container/60">
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-sm font-bold text-primary">
                    ₹{item.price}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-label-sm">
                    {item.priceNote}
                  </span>
                </div>
                <a 
                  className="w-full py-1.5 px-2 rounded-full bg-primary hover:bg-primary-container text-surface text-[12px] font-semibold flex items-center justify-center gap-1 active:scale-95 transition-all" 
                  href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi D Bakers! I want to order ${item.name} (${item.priceNote}) for ₹${item.price}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">chat</span>
                  <span>Order</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dietary Reassurance & Quality Badges */}
      <div className="px-4 pt-4 pb-6">
        <div className="p-4 sm:p-5 rounded-3xl bg-secondary-fixed/30 border border-secondary-fixed/50 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px] fill">verified</span>
            <span className="font-title-md text-sm font-bold text-primary">
              The D Bakers Purity Promise
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center gap-1 border border-surface-container">
              <span className="material-symbols-outlined text-emerald-600 text-[20px]">spa</span>
              <span className="font-label-sm text-[11px] font-bold text-primary">100% Eggless</span>
              <span className="text-[10px] text-on-surface-variant">Available across all items</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center gap-1 border border-surface-container">
              <span className="material-symbols-outlined text-secondary text-[20px]">nature</span>
              <span className="font-label-sm text-[11px] font-bold text-primary">Preservative Free</span>
              <span className="text-[10px] text-on-surface-variant">Real dairy & fine cacao</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center gap-1 border border-surface-container">
              <span className="material-symbols-outlined text-primary text-[20px]">home_pin</span>
              <span className="font-label-sm text-[11px] font-bold text-primary">Model Town</span>
              <span className="text-[10px] text-on-surface-variant">Hygienic Home Kitchen</span>
            </div>
          </div>
          <p className="font-body-sm text-[11px] text-on-surface-variant text-center mt-1 italic">
            "Freshly prepared upon your confirmation. Pick-up and local delivery available across Panipat."
          </p>
        </div>
      </div>
    </div>
  );
}
