import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

export default function DateClubPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    celebrationType: 'Birthday',
    recipientName: '',
    date: '',
    favFlavor: 'Belgian Chocolate'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp verification link
    const text = encodeURIComponent(
      `Hello D Bakers!\n\n` +
      `I would like to join 🌟 The Date Club 🌟:\n` +
      `👤 Member Name: ${formData.name}\n` +
      `📱 WhatsApp: ${formData.phone}\n` +
      `🎉 Occasion: ${formData.celebrationType} for ${formData.recipientName || 'Myself/Family'}\n` +
      `📅 Special Date: ${formData.date}\n` +
      `🎂 Preferred Flavor: ${formData.favFlavor}\n\n` +
      `Please register my date for complimentary cupcakes & early reminders!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Hero Spotlight */}
      <section className="px-4 pt-3 pb-4">
        <div className="relative rounded-3xl bg-primary text-on-primary p-6 overflow-hidden shadow-xl border border-secondary/20">
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-2 right-4 opacity-10 pointer-events-none text-surface">
            <span className="material-symbols-outlined text-[100px]">celebration</span>
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/15 backdrop-blur-md self-start text-secondary-fixed-dim border border-surface/20">
              <span className="material-symbols-outlined text-[16px] fill">favorite</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Exclusive VIP Service
              </span>
            </div>

            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary leading-tight">
              The Date Club
            </h1>
            <p className="font-headline-sm text-base text-secondary-fixed-dim italic">
              Never Miss a Celebration in Panipat.
            </p>
            <p className="font-body-sm text-body-sm text-on-primary/85 leading-relaxed">
              D Bakers remembers your loved ones' birthdays & anniversaries before you do. Register your dates once and enjoy surprise complimentary cupcakes & guaranteed morning slots.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>100% Free Lifetime Membership • Over 350+ Panipat Families Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="px-4 py-2">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1.5">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[18px]">notifications_active</span>
            </div>
            <h4 className="font-label-lg text-sm font-bold text-primary">5-Day Advance Alert</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              A gentle WhatsApp whisper with custom design ideas before you scramble.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1.5">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[18px] fill">cake</span>
            </div>
            <h4 className="font-label-lg text-sm font-bold text-primary">Free Cupcake Box</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Surprise box of 2 hand-piped artisanal cupcakes bundled with your order.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1.5">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[18px]">alarm_on</span>
            </div>
            <h4 className="font-label-lg text-sm font-bold text-primary">Priority Oven Slots</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Guaranteed morning dispatch even during peak festive rushes and weekends.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1.5">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[18px]">card_giftcard</span>
            </div>
            <h4 className="font-label-lg text-sm font-bold text-primary">VIP Tasting Boxes</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              First dibs on seasonal Diwali, Christmas, & Valentine pastry hampers.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="px-4 py-3">
        <div className="rounded-3xl p-5 sm:p-6 bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
              Register in 30 Seconds
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Lock In Your Special Dates
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              We never spam. You only receive timely reminders and celebratory perks.
            </p>
          </div>

          {submitted ? (
            <div className="p-5 rounded-2xl bg-secondary-fixed/40 border border-secondary flex flex-col items-center text-center gap-2 animate-fade-in">
              <span className="material-symbols-outlined text-secondary text-[40px] fill">
                check_circle
              </span>
              <h4 className="font-headline-sm text-lg font-bold text-primary">
                Welcome to The Date Club!
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant">
                We've opened WhatsApp to confirm your date registration with the head baker in Model Town.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-bold text-secondary underline"
              >
                Register another celebration date
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    WhatsApp Phone Number
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="h-11 px-3 rounded-xl bg-surface-container-low text-on-surface text-xs font-semibold flex items-center border border-outline-variant/30">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      required
                      placeholder="98123 45678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Celebration Occasion
                  </label>
                  <select
                    value={formData.celebrationType}
                    onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Wedding Anniversary</option>
                    <option value="Child 1st Birthday">Child 1st Birthday</option>
                    <option value="Parents Day">Parents' Celebration</option>
                    <option value="Other Milestone">Other Milestone</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Whose Special Day?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Husband, Daughter, Mom, Myself"
                    value={formData.recipientName}
                    onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Date of Celebration
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Preferred Flavor / Theme
                  </label>
                  <select
                    value={formData.favFlavor}
                    onChange={(e) => setFormData({ ...formData, favFlavor: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  >
                    <option value="Belgian Chocolate Truffle">Belgian Chocolate Truffle</option>
                    <option value="Strawberry Rose Cream">Strawberry Rose Cream</option>
                    <option value="Lotus Biscoff Crunch">Lotus Biscoff Crunch</option>
                    <option value="Fresh Fruit Shortcake">Fresh Fruit Shortcake</option>
                    <option value="Gooey Brownies">Gooey Brownies</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-2 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(229,115,153,0.28)] active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">card_membership</span>
                <span>Join The Date Club (Free)</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
