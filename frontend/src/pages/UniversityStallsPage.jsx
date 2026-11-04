import React, { useState } from 'react';
import { BAKERY_INFO, CAMPUS_SCHEDULE, FAQS } from '../data/bakeryData';
import { api } from '../services/api';

export default function UniversityStallsPage() {
  const [selectedCampus, setSelectedCampus] = useState('PIET, Panipat');
  const [studentPhone, setStudentPhone] = useState('');
  const [isAlertRegistered, setIsAlertRegistered] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    if (!studentPhone) return;
    setIsAlertRegistered(true);

    // Persist campus alert subscriber
    api.subscribeAlert({
      campus: selectedCampus,
      phone: studentPhone
    });

    const text = encodeURIComponent(
      `Hi D Bakers! I would like to get notified before you set up your campus stall at ${selectedCampus}. My WhatsApp number is +91 ${studentPhone}.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`, '_blank');
    }, 600);
  };

  const campusMoments = [
    {
      id: 'brownies-box',
      title: 'Fudgy Brownie Stacks',
      badge: 'Sold 400+ Units',
      badgeColor: 'bg-primary/80 text-on-primary',
      desc: 'Triple chocolate & walnut crumbles served warm in takeaway boxes.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_mwFKMPspIo-WIUoGDtszDFfcUtfhwjSftmIi6JQ8o-U7ixJHVL9lhTRLaYdMrxTDTcVnHAdx_rb0BjG4meiBi7Dr6kFzsCReOjZ7v69hTmzCN9-JF8S4pteoDWCY7oc2QBBX-kn3vUDmLVq3hw9Y09Iq6wIWrexTLSGNMH4Z06XPgOahxP5TphqNU0yV-MELKckj8tSGW6115e7Q5ls4K00Rt_9QYygDo--Fkkp'
    },
    {
      id: 'fest-crowd',
      title: 'Festival Sweet Craves',
      badge: 'Geeta University Fest',
      badgeColor: 'bg-secondary text-on-secondary',
      desc: 'Queue smiles, cake pop giveaways, and freshly whipped cream treats.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuoZliaHgOmV7rNdU6sd6kS0dlFH71RgNbCljnSsdbBEGm7ztetgvATQBqjdng9e2BCZMrRbi83o04xnRbk091hSYhVbE11tYrpnbUYKkAkeihi0wcccpohpg3bcJPjlgxfhXLW7i1Rfum9E4fXAh2X0MWB6kB94P9G-2TUou7QO2aqHl9vFYA1U_yDKVaHoz9OG5c-kciBffK7dWHGdIETm0FvAQHEbqKCwQhVkw1'
    },
    {
      id: 'dessert-jars',
      title: 'Layered Jar Treats',
      badge: 'Pocket Friendly',
      badgeColor: 'bg-primary/80 text-on-primary',
      desc: 'Mess-free spoon-ready layered jars created especially for campus hangouts.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClOwil1d-62fu1JHevKH2sfy3IGqweaiN_WBz77i2TbfRT4S7yPYslYUg3mTCTm1-O80l6qZhCQerIbLG3RBXb-wSaw82-qqGLxOwFgEdEcJ5PnNrqHXthMP97PuAcI68q2L_KeSprplj3Uj3l9q1mHghCwUQU5A97B36oSGg_LjOhR9weDmb918CzPPwe9Dvjh6SSHZ51OL-rQ4XRad7GKLQi8G5Ym3Uaekp12o65'
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Campus Pop-Up Spotlight Hero */}
      <section className="px-4 pt-3 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-on-primary shadow-xl p-5 sm:p-6 border border-secondary/20">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary opacity-30 blur-2xl pointer-events-none"></div>
          <div className="absolute top-2 right-3 pointer-events-none opacity-15 text-primary-fixed">
            <span className="material-symbols-outlined text-[100px] leading-none">cookie</span>
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            {/* Live Campus Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary text-on-secondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-surface-bright animate-ping"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Campus Stall Live
              </span>
            </div>

            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-fixed tracking-tight">
              Catch D Bakers at Your University Campus!
            </h1>
            <p className="font-body-md text-body-md text-surface-container-low/90 leading-relaxed">
              From college fests to weekend food carnivals across Haryana &amp; NCR campuses (Geeta University, PIET, Ashoka University, Sonipat &amp; Panipat), we bring fresh warm brownies, cupcakes, and gooey dessert jars straight to your campus courtyard!
            </p>

            {/* Upcoming Schedule Ticket */}
            <div className="mt-2 rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-4 flex items-start gap-3 text-surface border border-surface/15">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <span className="material-symbols-outlined text-[22px]">event_available</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                  Next Up On Campus
                </span>
                <p className="font-title-md text-base font-bold text-surface-bright truncate">
                  Tech &amp; Cultural Fest • PIET
                </p>
                <p className="font-body-sm text-xs text-surface-container-low/80 mt-0.5">
                  This Friday &amp; Saturday | 10:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stall Moments & Student Vibe Gallery */}
      <section className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider">
              Campus Memories
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary">
              Student Vibe &amp; Fresh Bakes
            </h2>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">local_fire_department</span>
            <span className="font-semibold">Fest Favourites</span>
          </div>
        </div>

        {/* Scrolling Snapshot Carousel */}
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none snap-x snap-mandatory no-scrollbar">
          {campusMoments.map((item) => (
            <div 
              key={item.id} 
              className="snap-center flex-shrink-0 w-64 rounded-2xl bg-surface-container-low shadow-sm overflow-hidden flex flex-col border border-outline-variant/30"
            >
              <div className="relative h-44 w-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  src={item.image} 
                  alt={item.title} 
                />
                <span className={`absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-bold shadow-sm ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <div className="p-3.5 flex flex-col gap-1">
                <h3 className="font-title-md text-sm text-primary font-bold">{item.title}</h3>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student WhatsApp Early Bird Alert Card */}
      <section className="px-4 py-3">
        <div className="rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 p-5 sm:p-6 flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">notifications_active</span>
            </div>
            <div>
              <h3 className="font-title-md text-base text-primary font-bold leading-snug">
                Bring D Bakers to Your College!
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Get notified 24 hours before we set up shop on your campus.
              </p>
            </div>
          </div>

          {isAlertRegistered ? (
            <div className="rounded-2xl bg-secondary-fixed/40 border border-secondary p-4 flex items-center gap-2.5 text-primary animate-fade-in">
              <span className="material-symbols-outlined text-secondary text-[24px] fill">check_circle</span>
              <p className="font-body-sm text-xs">
                You are on the secret VIP list! We will ping you before our next stall setup at {selectedCampus}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAlertSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-xs text-on-surface font-semibold">
                  Select Your Campus
                </label>
                <div className="relative">
                  <select 
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                    className="w-full h-11 px-3.5 pr-8 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm appearance-none focus:outline-none border border-outline-variant/30 focus:border-secondary" 
                  >
                    <option value="PIET, Panipat">PIET (Panipat Institute of Engg. &amp; Tech)</option>
                    <option value="Geeta University, Naultha">Geeta University, Naultha</option>
                    <option value="Ashoka University, Sonipat">Ashoka University, Sonipat Campus</option>
                    <option value="Arya College, Panipat">Arya College, Panipat</option>
                    <option value="IB PG College, Panipat">IB PG College, GT Road</option>
                    <option value="SRM University, Sonipat">SRM University, Delhi-NCR Sonipat</option>
                    <option value="Other">My College isn't listed (Tell us!)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-3 text-on-surface-variant pointer-events-none text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-xs text-on-surface font-semibold">
                  Your WhatsApp Number
                </label>
                <div className="flex items-center gap-2">
                  <div className="h-11 px-3 rounded-xl bg-surface-container-low flex items-center justify-center font-body-sm text-xs text-on-surface font-semibold border border-outline-variant/30">
                    🇮🇳 +91
                  </div>
                  <input 
                    className="flex-1 h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm placeholder:text-on-surface-variant/60 focus:outline-none border border-outline-variant/30 focus:border-secondary" 
                    pattern="[0-9]{10}" 
                    placeholder="98123 45678" 
                    required 
                    type="tel"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                  />
                </div>
              </div>

              <button 
                className="w-full h-11 mt-1 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all" 
                type="submit"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span>Notify Me Before Campus Visits</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Direct WhatsApp Order Card */}
      <section className="px-4 py-3">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-container to-primary text-on-primary p-5 sm:p-6 shadow-lg flex flex-col gap-3 border border-secondary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></div>
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                Fast Direct Kitchen Line
              </span>
            </div>
            <span className="font-label-sm text-label-sm bg-surface-container-lowest/15 px-2.5 py-0.5 rounded-full text-surface-bright">
              Model Town Studio
            </span>
          </div>

          <div>
            <h2 className="font-headline-sm text-headline-sm text-primary-fixed">
              Order Warm Bakes Today
            </h2>
            <p className="font-body-md text-sm text-surface-container-low/90 mt-1 leading-relaxed">
              Ordering for birthdays, midnight dorm cravings, or home delivery in Panipat? Chat with our head baker directly on WhatsApp.
            </p>
          </div>

          {/* Pre-filled Message Sample */}
          <div className="rounded-2xl bg-surface-container-lowest/10 p-3.5 flex flex-col gap-1 border border-surface/10">
            <span className="font-label-sm text-xs text-secondary-fixed font-semibold">
              Tap below with pre-filled message:
            </span>
            <p className="font-body-sm text-xs italic text-surface-bright">
              "Hi D Bakers! I would like to place an order for fresh bakes / query custom cake pricing in Panipat."
            </p>
          </div>

          <a 
            className="w-full h-12 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all mt-1" 
            href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hi D Bakers! I would like to place an order for fresh bakes / query custom cake pricing in Panipat.")}`} 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Chat &amp; Order on WhatsApp</span>
          </a>

          {/* Quick Action Connectors */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <a 
              className="h-10 rounded-xl bg-surface-container-lowest/15 flex items-center justify-center gap-1.5 text-surface font-label-sm text-xs active:bg-surface-container-lowest/25 transition-colors font-medium hover:bg-surface-container-lowest/20" 
              href="tel:+919999999999"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Call Studio</span>
            </a>
            <a 
              className="h-10 rounded-xl bg-surface-container-lowest/15 flex items-center justify-center gap-1.5 text-surface font-label-sm text-xs active:bg-surface-container-lowest/25 transition-colors font-medium hover:bg-surface-container-lowest/20" 
              href="https://instagram.com/dbakers_panipat" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              <span>Instagram</span>
            </a>
            <a 
              className="h-10 rounded-xl bg-surface-container-lowest/15 flex items-center justify-center gap-1.5 text-surface font-label-sm text-xs active:bg-surface-container-lowest/25 transition-colors font-medium hover:bg-surface-container-lowest/20" 
              href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hi! Can I get the current menu PDF?")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Menu PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 pt-2 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider">
              Good to Know
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Ordering FAQs
            </h3>
          </div>
          <span className="material-symbols-outlined text-secondary text-[24px]">help_outline</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl bg-surface-container-low border border-outline-variant/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5 text-primary">
                    <div className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[14px]">
                        {idx === 0 ? 'timer' : idx === 1 ? 'account_balance_wallet' : idx === 2 ? 'verified' : 'local_shipping'}
                      </span>
                    </div>
                    <span className="font-title-md text-sm font-bold text-primary">
                      {faq.question}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-on-surface-variant leading-relaxed border-t border-surface-container/60 pl-12 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
