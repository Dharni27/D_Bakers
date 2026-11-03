import React, { useState } from 'react';
import { BAKERY_INFO, REVIEWS } from '../data/bakeryData';

export default function HomePage({ setActiveTab, onOpenQuickOrder }) {
  const [selectedWeight, setSelectedWeight] = useState('0.5kg');
  const [isEggless, setIsEggless] = useState(true);

  // Dynamic WhatsApp Link calculation
  const getCustomWaUrl = () => {
    const egglessStr = isEggless ? 'Eggless' : 'Regular';
    const msg = encodeURIComponent(
      `Hello D Bakers! I would love to order a ${selectedWeight} ${egglessStr} Signature Cake from Model Town, Panipat.`
    );
    return `https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${msg}`;
  };

  const signatureBakes = [
    {
      id: 'custom-cakes',
      title: 'Custom Tier Cakes',
      price: 'From ₹750',
      badge: 'Bestseller',
      badgeColor: 'bg-secondary text-on-secondary',
      desc: 'Vintage piping, fresh flora, ganache drips & bespoke celebration themes.',
      size: '0.5kg / 1kg / 2kg',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm9UKKqrF_D4W64LA_oOhVt-x9O3TvjuSLB73v_fEw-_Jy-jxNCGJdzzyEgaUaNEfGfNCNeP3fcgUCckb4l6TOEudsA4Gt1DfpVZwT1FY6pFUO2QQzJydLmhAHfoRAF-_fgQpOgJzuBX8zCw2PNcurMoBIG8Vp9CoS2K11PH77fOzApVUreJLE-y6J5fk1kNXua2cR6j8xyYvhFQ14gDaxeLLVYMe5dhcwvvMnUEhL',
      waMsg: 'Hi D Bakers, I want to customize a celebration cake'
    },
    {
      id: 'fudge-brownies',
      title: 'Gooey Fudge Brownies',
      price: 'Box of 6 • ₹420',
      badge: 'Belgian 55%',
      badgeColor: 'bg-primary-container text-on-primary',
      desc: 'Dense, deeply chocolatey with a crackly wafer-thin crust and sea salt.',
      size: 'Eggless available',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqiQhHIe5cCW1-FPGf1P3Pz28uLOIbQ0Pm6uZCzuetmZ2xBIn2AjHKeB8toj8s-kHxnH_ijXmHw_jZ887vRiqydveviHBr_R7IBd4sy-TPwV1uB_K4kAvuO9M3Gt_ZKc72Xaybe9GBrF_TZ1gKwCgPXA0Wgtnb9MD3KOUfToN138pVyiyIrJsijdvoDXMSpcJMbpN64c6IFMXKYbCUVi47sBRPVUu27ZbgQvHlewdI',
      waMsg: 'Hi D Bakers, I would love a box of Gooey Fudge Brownies'
    },
    {
      id: 'fluffy-cupcakes',
      title: 'Fluffy Swirl Cupcakes',
      price: 'Pack of 4 • ₹280',
      badge: null,
      badgeColor: '',
      desc: 'Pillowy sponge topped with French silky meringue buttercreams.',
      size: 'Rose / Cocoa / Berry',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRPvy3F6RM6_wIkG1lryxPuU5vRhBn2YWVjk5DG4VYHxtdrytO7nkz7jytYEoiXW9uFhvTS3mAWjrLXqEwRrSHALR1vJ-BqJ78l6_njvSEtgB38T4oqi4qb62kJLWZqIUwc9y3dJ896vmIU4VSb6q4PaWcF9rr-vOrJy8p6uLvIzLVj8DDiNHnIMjCQe7YSlmZ-FbkGxLEbN4Mbotyh858XkSnPZhpKTFTUQDMyE_f',
      waMsg: 'Hi D Bakers, I want a pack of Fluffy Swirl Cupcakes'
    },
    {
      id: 'cookies',
      title: 'Handcrafted Cookies',
      price: 'Pack of 5 • ₹320',
      badge: null,
      badgeColor: '',
      desc: 'NYC thick-style brown butter cookies with Belgian chocolate chunks.',
      size: 'Warm before eating',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG9EZWAQAR9-GFAtZEthdoX4tvbCzWC-scouqv9V6caEDiITf9Yuoq0YdEZn2ZL3f4H27QU8__eqcV3CCRr2E1o9sdDWZ-Hb-Lmj9XpRGrGg6c4EyechH_7nQleh01efStwKTxws5vTIFnKCfMGK-oYqGEK59ITCNSayd-rVH7W5-0vCHxM7prMHQ1WoGt2mgljYysb54YOGKKcP7duyGANmx7-ZXj_jvpUIEjxJCS',
      waMsg: 'Hi D Bakers, ordering Handcrafted Cookies'
    },
    {
      id: 'french-tarts',
      title: 'French Fruit Tarts',
      price: 'Pair • ₹360',
      badge: null,
      badgeColor: '',
      desc: 'Crisp buttery sablé shell, silky crème pâtissière, and seasonal berries.',
      size: 'Made fresh daily',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzIAVFGqqhlk1-3R49GkrzE7ej2VZd7iLowDJU2SbJZsCGzKDup9O3vcfx-K6hAUWVVS-Z-bQr_0VltmxO2TVzKm6HauXJ8q-SnihDuRHOMyWdq0CaU_oDbJGFVd9EucEK7jiGdKC08Wjt-9-RrVFvvo_-kb_B8DTWs3GcmWAlY-BPd_I033zsXRJguApsY7Msm8QlY9oEpHhlY29uObFE5Bg0OYALVAoGLGOcE4zV',
      waMsg: 'Hi D Bakers, ordering French Fruit Tarts'
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Top Decorative Micro-Ticker */}
      <div className="px-4 pt-2 pb-1">
        <div className="w-full bg-secondary-fixed/40 rounded-full px-3.5 py-1.5 flex items-center justify-between text-secondary border border-secondary-fixed/50">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse flex-shrink-0"></span>
            <span className="font-label-sm text-label-sm truncate font-medium">
              Oven on: Morning batches fresh now
            </span>
          </div>
          <span className="font-label-sm text-label-sm font-bold flex-shrink-0 text-secondary">
            100% Pure & Eggless
          </span>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="px-4 pt-3 pb-6 flex flex-col gap-4">
        <div className="relative rounded-3xl overflow-hidden bg-surface-container-low shadow-sm border border-outline-variant/30">
          {/* Ambient Rose Halo */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-fixed/50 rounded-full blur-3xl pointer-events-none"></div>

          {/* Hero Visual Canvas */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
            <img 
              alt="Artisanal layered celebration cake by D Bakers" 
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JyQAojuQkxiNRf4EUoTc8tk3HzM3iEna5V9tvnhDNzDvEZs-P6lHnd3a4kbt0z4nrM_ZlUS6-R4sIrBXtG_qAyAMxnZmI0x9_mSMEW6AbGfMrUwrZ1A8PSxnOI2JFfNmgJn4DmJ1PYHtYU05dyGCC8fohjCGiQoJCcpHkIE51cHDEQWwbshmhCPoCYIF658E61iwAjh8tJxyYvUMz_rFC_QrTTYFTP2_DmKh1wHd"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent"></div>

            {/* Floating Bakery Quality Badge */}
            <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-surface-container-highest">
              <span className="material-symbols-outlined text-secondary text-[16px] fill">local_florist</span>
              <span className="font-label-sm text-label-sm text-primary tracking-wide uppercase font-semibold">
                Boutique Atelier
              </span>
            </div>

            {/* Hero Bottom Scrim Content */}
            <div className="absolute bottom-3.5 left-4 right-4 text-surface">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-container/90 text-on-secondary-container font-label-sm text-label-sm font-semibold mb-1.5 shadow-sm">
                Model Town, Panipat
              </span>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-surface drop-shadow-sm leading-tight">
                Freshly Baked with Love
              </h1>
            </div>
          </div>

          {/* Hero Copy & Action Bar */}
          <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-surface-container-lowest">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Handcrafted artisanal celebration cakes, melt-in-mouth brownies & gourmet French patisserie. Made to order for your unforgettable memories.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a 
                className="w-full h-12 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(229,115,153,0.28)] active:scale-[0.98] transition-all font-semibold" 
                href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=Hello%20D%20Bakers!%20I%20would%20like%20to%20order%20a%20handcrafted%20bake`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Order on WhatsApp</span>
              </a>

              <button 
                className="w-full h-11 rounded-full bg-surface-container-high hover:bg-surface-container text-primary font-label-lg text-label-lg flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all font-medium" 
                onClick={() => setActiveTab('products')}
                type="button"
              >
                <span>Explore Signature Menu</span>
                <span className="material-symbols-outlined text-[18px]">east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bakery Story / Craft Card */}
      <section className="px-4 py-2">
        <div className="relative bg-surface-container-low rounded-3xl p-5 shadow-sm overflow-hidden border border-outline-variant/30">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-secondary-fixed/40 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[18px] fill">cookie</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              Our Philosophy
            </span>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
            Pure Butter. Pure Cocoa. Zero Shortcuts.
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
            Tucked in Model Town, Panipat, D Bakers was born from an obsession with authentic French techniques and honest, unadulterated kitchen ingredients. Every batch is whisked small, using Belgian couverture, pure churned butter, and farm-fresh berries.
          </p>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="material-symbols-outlined text-secondary text-[22px] mb-1">spa</span>
              <span className="font-label-sm text-label-sm text-primary font-semibold leading-tight">100% Pure</span>
              <span className="font-body-sm text-[10px] text-on-surface-variant mt-0.5">Eggless available</span>
            </div>
            <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="material-symbols-outlined text-secondary text-[22px] mb-1">local_fire_department</span>
              <span className="font-label-sm text-label-sm text-primary font-semibold leading-tight">Baked Fresh</span>
              <span className="font-body-sm text-[10px] text-on-surface-variant mt-0.5">Same day morning</span>
            </div>
            <div className="flex flex-col items-center text-center p-2.5 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container">
              <span className="material-symbols-outlined text-secondary text-[22px] mb-1">verified</span>
              <span className="font-label-sm text-label-sm text-primary font-semibold leading-tight">No Preservatives</span>
              <span className="font-body-sm text-[10px] text-on-surface-variant mt-0.5">Small artisanal batch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Highlights Snap Carousel */}
      <section className="pt-6 pb-4" id="signature-menu">
        <div className="px-4 flex items-center justify-between mb-3">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-primary">Signature Bakes</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Whipped, poured & garnished daily</p>
          </div>
          <button 
            onClick={() => setActiveTab('products')}
            className="font-label-sm text-label-sm text-secondary font-bold hover:underline"
          >
            View All ({signatureBakes.length})
          </button>
        </div>

        {/* Horizontal Snap Carousel */}
        <div className="flex gap-3 overflow-x-auto px-4 pb-3 scroll-smooth snap-x snap-mandatory no-scrollbar">
          {signatureBakes.map((bake) => (
            <div 
              key={bake.id} 
              className="snap-start flex-shrink-0 w-64 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-44 overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  src={bake.image} 
                  alt={bake.title} 
                />
                <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm font-label-sm text-label-sm text-primary font-bold shadow-sm">
                  {bake.price}
                </div>
                {bake.badge && (
                  <div className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-full font-label-sm text-[10px] font-bold shadow-sm ${bake.badgeColor}`}>
                    {bake.badge}
                  </div>
                )}
              </div>
              <div className="p-3.5 flex flex-col flex-1 justify-between gap-2">
                <div>
                  <h3 className="font-title-md text-title-md text-primary">{bake.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                    {bake.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-surface-container/50">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {bake.size}
                  </span>
                  <a 
                    className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary active:scale-90 hover:bg-secondary-fixed-dim transition-all" 
                    href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(bake.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">east</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Flavor & Weight Selector Preview */}
      <section className="px-4 py-3">
        <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">tune</span>
              <span className="font-label-lg text-label-lg text-primary font-bold">
                Quick Taste Customizer
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-bold bg-secondary-fixed/50 px-2 py-0.5 rounded-full">
              Instant Quote
            </span>
          </div>

          {/* Weight Segmented Control */}
          <div className="flex flex-col gap-1.5">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Select Size / Weight
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: '0.5kg', label: '0.5 kg (Small)' },
                { key: '1.0kg', label: '1.0 kg (Classic)' },
                { key: '2.0kg', label: '2.0 kg (Party)' },
              ].map((btn) => (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setSelectedWeight(btn.key)}
                  className={`py-2 px-1 rounded-xl font-label-sm text-label-sm font-semibold transition-all ${
                    selectedWeight === btn.key
                      ? 'bg-primary text-on-primary shadow-sm scale-100'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dietary Preference Switch */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-surface-container-low border border-surface-container">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-surface-container-lowest flex items-center justify-center border border-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              </div>
              <span className="font-body-sm text-body-sm text-primary font-semibold">
                Prepare 100% Eggless
              </span>
            </div>
            <input 
              checked={isEggless} 
              onChange={(e) => setIsEggless(e.target.checked)}
              className="accent-secondary w-5 h-5 rounded cursor-pointer" 
              type="checkbox"
            />
          </div>

          {/* Live Dynamic WhatsApp Button */}
          <a 
            className="w-full h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 active:scale-[0.98] hover:bg-secondary-fixed-dim transition-all shadow-sm" 
            href={getCustomWaUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>
              Order {selectedWeight} {isEggless ? 'Eggless' : 'Regular'} Cake via WhatsApp
            </span>
          </a>
        </div>
      </section>

      {/* UVP Spotlight Banner: The Date Club */}
      <section className="px-4 py-3">
        <div className="relative rounded-3xl bg-primary text-on-primary p-5 sm:p-6 overflow-hidden shadow-md">
          {/* Glow & Confectionery Motifs */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-secondary rounded-full blur-2xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-2 right-4 opacity-10 pointer-events-none text-surface">
            <span className="material-symbols-outlined text-[80px]">celebration</span>
          </div>

          <div className="relative z-10 flex flex-col gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/10 backdrop-blur-md self-start text-secondary-fixed-dim border border-surface/15">
              <span className="material-symbols-outlined text-[16px] fill">favorite</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                The Date Club
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-primary leading-tight">
              Never Miss a Celebration in Panipat.
            </h3>
            <p className="font-body-sm text-body-sm text-on-primary/80 leading-relaxed">
              D Bakers remembers your birthdays & anniversaries before you do. Register your dates once and enjoy surprise complimentary cupcakes & priority morning slots.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setActiveTab('date-club')}
                className="px-5 h-10 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all font-semibold" 
              >
                <span>Join Date Club</span>
                <span className="material-symbols-outlined text-[16px]">card_membership</span>
              </button>
              <span className="font-label-sm text-label-sm text-secondary-fixed-dim">
                ✨ Free Lifetime Perks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Status & Delivery Operations Bento */}
      <section className="px-4 py-3 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h2 className="font-title-md text-title-md text-primary">Panipat Delivery & Pickup</h2>
          <span className="inline-flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping"></span>
            Accepting Today's Slots
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Card A: Delivery */}
          <div className="p-4 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-2 border border-outline-variant/30">
            <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-primary font-bold">Panipat Doorstep</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-snug pt-0.5">
                Delivered safely in refrigerated temperature-stable packaging.
              </p>
            </div>
            <span className="font-label-sm text-[11px] text-secondary font-bold mt-auto">
              Free above ₹999
            </span>
          </div>

          {/* Card B: Model Town Pickup */}
          <div className="p-4 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-2 border border-outline-variant/30">
            <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined text-[18px]">storefront</span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-primary font-bold">Model Town Pickup</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-snug pt-0.5">
                Collect hot bakes directly from our kitchen counter anytime.
              </p>
            </div>
            <span className="font-label-sm text-[11px] text-primary font-bold mt-auto">
              Near Shiva Temple
            </span>
          </div>
        </div>
      </section>

      {/* Love From Panipat / Verified Reviews */}
      <section className="px-4 pt-3 pb-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-primary">Love from Panipat</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">5.0 Star rated by over 450+ families</p>
          </div>
          <div className="flex items-center text-on-tertiary-container bg-tertiary-fixed/40 px-2 py-0.5 rounded-full">
            <span className="material-symbols-outlined text-[18px] fill">star</span>
            <span className="font-label-lg text-label-lg font-bold ml-1 text-primary">5.0</span>
          </div>
        </div>

        {/* Testimonials Stack */}
        <div className="flex flex-col gap-2.5">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-sm ${review.avatarColor}`}>
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-primary leading-tight font-semibold">
                      {review.name}
                    </p>
                    <p className="font-body-sm text-[11px] text-on-surface-variant">
                      {review.locality}
                    </p>
                  </div>
                </div>
                <div className="flex text-on-tertiary-container">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px] fill">star</span>
                  ))}
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sweet Baker's Note Ribbon */}
      <section className="px-4 pb-6">
        <div 
          onClick={onOpenQuickOrder}
          className="p-4 sm:p-5 rounded-3xl bg-surface-container-high/60 border border-dashed border-secondary/40 flex items-center gap-3 cursor-pointer hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-secondary text-[32px] flex-shrink-0">
            volunteer_activism
          </span>
          <div className="flex flex-col text-left">
            <span className="font-title-md text-title-md text-primary font-bold">
              Need a Custom Cake Design?
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Send any Pinterest inspiration on WhatsApp and we will bake your dream cake.
            </span>
          </div>
          <span className="material-symbols-outlined text-secondary text-[20px] ml-auto">
            arrow_forward
          </span>
        </div>
      </section>
    </div>
  );
}
