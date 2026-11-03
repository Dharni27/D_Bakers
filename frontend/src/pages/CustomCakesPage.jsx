import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function CustomCakesPage({ onOpenQuickOrder }) {
  const [selectedSize, setSelectedSize] = useState('1kg');
  const [selectedFlavor, setSelectedFlavor] = useState('Belgian Truffle 55%');
  const [selectedStyle, setSelectedStyle] = useState('Vintage Lambeth Ruffles');
  const [isEggless, setIsEggless] = useState(true);
  const [pipingMessage, setPipingMessage] = useState('');
  const [eventDate, setEventDate] = useState('');

  // Sizing definitions & base pricing
  const sizes = [
    { id: 'bento', label: 'Bento Box', weight: '350g', serves: '1 - 2 people', basePrice: 450 },
    { id: '0.5kg', label: 'Petite', weight: '0.5 kg', serves: '4 - 6 people', basePrice: 750 },
    { id: '1kg', label: 'Classic', weight: '1.0 kg', serves: '8 - 12 people', basePrice: 1350 },
    { id: '2kg', label: 'Grand Tier', weight: '2.0 kg', serves: '16 - 22 people', basePrice: 2500 },
    { id: '3kg', label: '2-Tier Royale', weight: '3.0 kg', serves: '25 - 35 people', basePrice: 3800 },
  ];

  const flavors = [
    { id: 'truffle', name: 'Belgian Truffle 55%', desc: 'Rich Callebaut dark ganache & dark cocoa sponge' },
    { id: 'strawberry', name: 'Strawberry Rose Blossom', desc: 'Fresh strawberry compote & rosewater diplomat cream' },
    { id: 'biscoff', name: 'Lotus Biscoff Crunch', desc: 'Spiced speculoos buttercream & cookie crumb core' },
    { id: 'fruit', name: 'Exotic Fresh Fruit Gateau', desc: 'Vanilla bean sponge & glazed seasonal berries' },
    { id: 'pistachio', name: 'Pistachio Persian Rose', desc: 'Roasted green pistachio cream & saffron notes' }
  ];

  const styles = [
    { id: 'lambeth', name: 'Vintage Lambeth Ruffles', desc: 'Intricate piped frills, retro bows & maraschino cherries' },
    { id: 'floral', name: 'Modern Floral Crown', desc: 'Fresh organic florals, edible gold leaf & smooth buttercream' },
    { id: 'drip', name: 'Ganache Drip & Macarons', desc: 'Glossy chocolate drip topped with Parisian macarons' },
    { id: 'minimalist', name: 'Minimalist Korean Palette', desc: 'Aesthetic pastel knife strokes & elegant calligraphy' }
  ];

  const currentSizeObj = sizes.find(s => s.id === selectedSize) || sizes[2];
  const estimatedPrice = currentSizeObj.basePrice;

  const handleOrderWhatsApp = () => {
    const egglessText = isEggless ? '100% Eggless' : 'Regular';
    const text = encodeURIComponent(
      `Hello D Bakers!\n\n` +
      `I want to customize a Bespoke Celebration Cake from Model Town Studio:\n\n` +
      `🎂 Silhouette: ${selectedStyle}\n` +
      `⚖️ Size: ${currentSizeObj.label} (${currentSizeObj.weight} - Serves ${currentSizeObj.serves})\n` +
      `🍫 Flavor: ${selectedFlavor}\n` +
      `🌱 Dietary: ${egglessText}\n` +
      (eventDate ? `📅 Celebration Date: ${eventDate}\n` : '') +
      (pipingMessage ? `✍️ Piping Inscription: "${pipingMessage}"\n` : '') +
      `💰 Estimated Base: ~₹${estimatedPrice}\n\n` +
      `I would love to confirm design details and slot availability!`
    );
    window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Hero Banner */}
      <section className="px-4 pt-3 pb-4">
        <div className="relative rounded-3xl overflow-hidden bg-primary text-on-primary shadow-lg border border-outline-variant/30">
          <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] overflow-hidden bg-surface-container">
            <img 
              alt="Handcrafted artisanal celebration cake by D Bakers" 
              className="w-full h-full object-cover object-center" 
              src="/assets/celebration-cake-hero.png"
              onError={(e) => {
                // Fallback to high-res Stitch celebration cake if local asset not loaded
                e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBm9UKKqrF_D4W64LA_oOhVt-x9O3TvjuSLB73v_fEw-_Jy-jxNCGJdzzyEgaUaNEfGfNCNeP3fcgUCckb4l6TOEudsA4Gt1DfpVZwT1FY6pFUO2QQzJydLmhAHfoRAF-_fgQpOgJzuBX8zCw2PNcurMoBIG8Vp9CoS2K11PH77fOzApVUreJLE-y6J5fk1kNXua2cR6j8xyYvhFQ14gDaxeLLVYMe5dhcwvvMnUEhL";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
            
            <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-primary font-label-sm text-label-sm font-bold shadow-sm">
              ✨ Handcrafted Masterpieces
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-semibold mb-1.5 inline-block">
                Bespoke Atelier
              </span>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-surface drop-shadow-md">
                Custom Celebration Cakes
              </h1>
              <p className="font-body-sm text-body-sm text-surface-container-low/90 mt-1">
                Designed to center your most cherished celebrations across Panipat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cake Builder */}
      <section className="px-4 py-3">
        <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-5">
          <div className="flex items-center justify-between pb-3 border-b border-surface-container">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                Step-by-Step Customizer
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary">
                Build Your Dream Cake
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-on-surface-variant block font-medium">Estimated Base</span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                ₹{estimatedPrice}
              </span>
            </div>
          </div>

          {/* 1. Size & Weight Selection */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-title-md text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Cake Weight & Servings</span>
              </label>
              <span className="text-xs text-secondary font-semibold">{currentSizeObj.serves}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedSize(s.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedSize === s.id
                      ? 'border-secondary bg-secondary-fixed/30 shadow-sm ring-1 ring-secondary'
                      : 'border-outline-variant/30 bg-surface-container-low hover:bg-surface-container'
                  }`}
                >
                  <p className="font-label-lg text-sm font-bold text-primary">{s.label}</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">{s.weight}</p>
                  <p className="text-xs text-secondary font-bold mt-1.5">₹{s.basePrice}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Flavor Core Selection */}
          <div className="flex flex-col gap-2">
            <label className="font-title-md text-sm font-bold text-primary flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs flex items-center justify-center font-bold">2</span>
              <span>Choose Gourmet Flavor Core</span>
            </label>
            <div className="flex flex-col gap-2">
              {flavors.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFlavor(f.name)}
                  className={`p-3 rounded-2xl border text-left flex items-start justify-between transition-all ${
                    selectedFlavor === f.name
                      ? 'border-secondary bg-secondary-fixed/20 ring-1 ring-secondary'
                      : 'border-outline-variant/30 bg-surface-container-low hover:bg-surface-container'
                  }`}
                >
                  <div>
                    <p className="font-label-lg text-sm font-bold text-primary">{f.name}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{f.desc}</p>
                  </div>
                  {selectedFlavor === f.name && (
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Design Silhouette */}
          <div className="flex flex-col gap-2">
            <label className="font-title-md text-sm font-bold text-primary flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs flex items-center justify-center font-bold">3</span>
              <span>Piping & Decorative Style</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {styles.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStyle(st.name)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedStyle === st.name
                      ? 'border-secondary bg-secondary-fixed/30 ring-1 ring-secondary'
                      : 'border-outline-variant/30 bg-surface-container-low hover:bg-surface-container'
                  }`}
                >
                  <p className="font-label-lg text-xs font-bold text-primary">{st.name}</p>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">{st.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Dietary & Personalization */}
          <div className="flex flex-col gap-3 pt-1">
            <label className="font-title-md text-sm font-bold text-primary flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs flex items-center justify-center font-bold">4</span>
              <span>Dietary & Custom Piping Note</span>
            </label>

            {/* Eggless toggle */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-surface-container-low border border-surface-container">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="font-body-sm text-body-sm text-primary font-semibold">
                  100% Pure Eggless Bake
                </span>
              </div>
              <input
                type="checkbox"
                checked={isEggless}
                onChange={(e) => setIsEggless(e.target.checked)}
                className="accent-secondary w-5 h-5 cursor-pointer rounded"
              />
            </div>

            {/* Event Date & Piping Note */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-xs text-on-surface-variant font-medium">
                  Occasion Date
                </span>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-xs text-on-surface-variant font-medium">
                  Baker's Piping Ribbon (Name / Message)
                </span>
                <input
                  type="text"
                  placeholder="e.g. 'Happy 1st Birthday Aadhya'"
                  value={pipingMessage}
                  onChange={(e) => setPipingMessage(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                />
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleOrderWhatsApp}
              className="w-full h-12 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(229,115,153,0.28)] active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Send Bespoke Cake Brief to Baker via WhatsApp</span>
            </button>
            <p className="text-center text-xs text-on-surface-variant">
              Notice: 24 to 48 hours required for intricate hand-piped & multi-tiered cakes.
            </p>
          </div>
        </div>
      </section>

      {/* Sizing & Serving Guide */}
      <section className="px-4 py-3">
        <div className="rounded-3xl p-5 bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px]">info</span>
            <h3 className="font-title-md text-base font-bold text-primary">
              Cake Sizing & Serving Guide
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
              <span className="font-bold text-primary text-sm">Bento Box</span>
              <span className="text-secondary font-semibold">350g</span>
              <span className="text-on-surface-variant">1 - 2 pax</span>
            </div>
            <div className="p-3 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
              <span className="font-bold text-primary text-sm">Petite Cake</span>
              <span className="text-secondary font-semibold">0.5 kg</span>
              <span className="text-on-surface-variant">4 - 6 pax</span>
            </div>
            <div className="p-3 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
              <span className="font-bold text-primary text-sm">Classic Cake</span>
              <span className="text-secondary font-semibold">1.0 kg</span>
              <span className="text-on-surface-variant">8 - 12 pax</span>
            </div>
            <div className="p-3 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
              <span className="font-bold text-primary text-sm">Grand Tier</span>
              <span className="text-secondary font-semibold">2.0 kg+</span>
              <span className="text-on-surface-variant">16 - 25 pax</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
