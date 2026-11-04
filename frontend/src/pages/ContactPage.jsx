import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { api } from '../services/api';

export default function ContactPage() {
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    occasion: 'Custom Celebration Cake',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Persist inquiry to backend database
    api.submitContact(inquiry);

    const text = encodeURIComponent(
      `Hello D Bakers!\n\n` +
      `I am reaching out via your website contact form:\n` +
      `👤 Name: ${inquiry.name}\n` +
      `📱 Phone: ${inquiry.phone}\n` +
      `🎂 Inquiry Type: ${inquiry.occasion}\n` +
      (inquiry.date ? `📅 Event Date: ${inquiry.date}\n` : '') +
      (inquiry.message ? `💬 Note: "${inquiry.message}"\n` : '') +
      `📍 Location: Model Town, Panipat\n\n` +
      `Please let me know how to proceed!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Page Header */}
      <div className="px-4 pt-3 pb-2 flex flex-col gap-1">
        <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
          Get in Touch
        </span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
          Model Town Kitchen Studio
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Visit our baking studio counter or reach out for custom cake consultations & event catering.
        </p>
      </div>

      {/* Studio Location & Map Section */}
      <section className="px-4 py-3">
        <div className="rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm p-5 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
                Bakehouse & Counter
              </span>
              <h3 className="font-title-md text-base text-primary font-bold">
                Kitchen Studio Location
              </h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
          </div>

          {/* Map Preview Canvas */}
          <div 
            className="w-full h-44 bg-cover bg-center rounded-2xl shadow-inner relative flex items-end p-3 overflow-hidden border border-outline-variant/30"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWeS3b6kK7MhwTHtCoSK3c9cbJmbHwBL4aj7Ypx0cHnkqearg1wpHsQ0FUfRWEzzfustLWXp5D0ULE7qqV_5npK8GPoeTc9INjWSHorT6ewWE4unZhlmJROAaU2flOcJJiPoFfsC9jM8AKyRqk4eXMJf3NIOksm5Bt4Zs3XoeaZNSiVl4R8NBVAHzmRQoRFgiOwfX7Z918vIk_lHmAtS3XcptAubVUwYc-WfliL_2A')`
            }}
          >
            <div className="px-3.5 py-1.5 rounded-xl bg-surface/95 backdrop-blur-md shadow text-primary flex items-center gap-2 border border-surface-container">
              <span className="material-symbols-outlined text-[16px] text-secondary">storefront</span>
              <span className="font-label-sm text-xs font-bold truncate">
                {BAKERY_INFO.location}
              </span>
            </div>
          </div>

          {/* Operating Hours and Dispatch Bento */}
          <div className="grid grid-cols-2 gap-2.5 text-on-surface">
            <div className="rounded-2xl bg-surface-container-lowest p-3.5 flex flex-col gap-1 border border-surface-container">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="font-label-sm text-xs font-bold">Baking Hours</span>
              </div>
              <span className="font-body-sm text-xs font-bold text-primary">
                {BAKERY_INFO.hours}
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant">
                Fresh morning batches daily
              </span>
            </div>

            <div className="rounded-2xl bg-surface-container-lowest p-3.5 flex flex-col gap-1 border border-surface-container">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[18px]">moped</span>
                <span className="font-label-sm text-xs font-bold">Dispatch Services</span>
              </div>
              <span className="font-body-sm text-xs font-bold text-primary">
                Pick-up & Delivery
              </span>
              <span className="font-label-sm text-[11px] text-on-surface-variant">
                All Panipat & Campuses
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-body-sm text-xs text-on-surface-variant">
                Near Shiva Temple, Model Town
              </span>
            </div>
            <a 
              className="font-label-sm text-xs text-secondary font-bold inline-flex items-center gap-1 hover:underline" 
              href="https://maps.google.com/?q=Model+Town+Panipat" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span>Get Directions</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* Direct Communication Channels */}
      <section className="px-4 py-2">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=Hi%20D%20Bakers!`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-secondary-fixed/50 hover:bg-secondary-fixed border border-secondary/30 flex flex-col items-center text-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-secondary text-[24px]">chat</span>
            <span className="font-label-sm text-xs font-bold text-primary">WhatsApp</span>
            <span className="text-[10px] text-on-surface-variant">Instant reply</span>
          </a>

          <a
            href="tel:+919999999999"
            className="p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex flex-col items-center text-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-primary text-[24px]">call</span>
            <span className="font-label-sm text-xs font-bold text-primary">Call Us</span>
            <span className="text-[10px] text-on-surface-variant">+91 99999 99999</span>
          </a>

          <a
            href="https://instagram.com/dbakers_panipat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex flex-col items-center text-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-secondary text-[24px]">photo_camera</span>
            <span className="font-label-sm text-xs font-bold text-primary">Instagram</span>
            <span className="text-[10px] text-on-surface-variant">{BAKERY_INFO.instagram}</span>
          </a>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="px-4 py-3 pb-8">
        <div className="rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 p-5 sm:p-6 flex flex-col gap-3.5">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">
              Message the Baker
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Send an Inquiry
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
              Have questions regarding festive hampers, custom designs, or campus setups?
            </p>
          </div>

          {submitted ? (
            <div className="p-4 rounded-2xl bg-secondary-fixed/40 border border-secondary flex flex-col items-center text-center gap-2 animate-fade-in">
              <span className="material-symbols-outlined text-secondary text-[36px] fill">check_circle</span>
              <h4 className="font-title-md text-sm font-bold text-primary">
                Inquiry Sent to WhatsApp!
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Our head baker will connect with you immediately.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-1 text-xs font-bold text-secondary underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aman Kapoor"
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98123 45678"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Inquiry Topic
                  </label>
                  <select
                    value={inquiry.occasion}
                    onChange={(e) => setInquiry({ ...inquiry, occasion: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  >
                    <option value="Custom Celebration Cake">Custom Celebration Cake</option>
                    <option value="Festival Bulk Hamper / Corporate">Festival Bulk Hamper / Corporate</option>
                    <option value="University Fest Stall Setup">University Fest Stall Setup</option>
                    <option value="Tasting Session Inquiry">Tasting Session Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs font-semibold text-primary">
                    Target Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={inquiry.date}
                    onChange={(e) => setInquiry({ ...inquiry, date: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-xs font-semibold text-primary">
                  Message / Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Share details, guest count, or flavor preferences..."
                  value={inquiry.message}
                  onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-1 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(229,115,153,0.28)] active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Send via WhatsApp (+91 99999 99999)</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
