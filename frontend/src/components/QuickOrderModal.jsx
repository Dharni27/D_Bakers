import React, { useState } from 'react';
import { BAKERY_INFO, PRODUCTS } from '../data/bakeryData';

export default function QuickOrderModal({ isOpen, onClose, initialItem = null }) {
  const [selectedProduct, setSelectedProduct] = useState(initialItem?.name || 'Custom Celebration Cake');
  const [weight, setWeight] = useState('1.0kg');
  const [isEggless, setIsEggless] = useState(true);
  const [occasion, setOccasion] = useState('Birthday');
  const [message, setMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const egglessText = isEggless ? '100% Eggless' : 'Regular';
    const text = encodeURIComponent(
      `Hello D Bakers!\n\n` +
      `I want to place an order inquiry:\n` +
      `🍰 Item: ${selectedProduct}\n` +
      `⚖️ Weight / Size: ${weight}\n` +
      `🌱 Preference: ${egglessText}\n` +
      `🎉 Occasion: ${occasion}\n` +
      (deliveryDate ? `📅 Date: ${deliveryDate}\n` : '') +
      (message ? `✍️ Piping Note: "${message}"\n` : '') +
      `📍 Delivery: Model Town / Panipat\n\n` +
      `Please let me know the availability and total quote!`
    );
    window.open(`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl p-6 shadow-2xl border border-secondary-fixed/40 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[22px]">cake</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Quick Order & Quote
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Direct to Head Baker in Model Town
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSendWhatsApp} className="flex flex-col gap-4 pt-4">
          {/* Select Product */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm text-primary font-semibold">
              Select Item / Confection
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
            >
              <option value="Custom Celebration Cake">Custom Celebration Cake</option>
              <option value="The Signature Grand Sampler">The Signature Grand Sampler (₹999)</option>
              {PRODUCTS.map(p => (
                <option key={p.id} value={`${p.name} (₹${p.price})`}>
                  {p.name} — ₹{p.price} ({p.priceNote})
                </option>
              ))}
              <option value="Other Bespoke Treat">Other Bespoke Treat (Pinterest Design)</option>
            </select>
          </div>

          {/* Size / Weight */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm text-primary font-semibold">
              Select Weight / Quantity
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['Bento (350g)', '0.5 kg', '1.0 kg', '2.0 kg+'].map((w) => (
                <button
                  type="button"
                  key={w}
                  onClick={() => setWeight(w)}
                  className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                    weight === w
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Eggless toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-surface-container-low">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span className="font-body-sm text-body-sm text-primary font-semibold">
                100% Eggless Preparation
              </span>
            </div>
            <input
              type="checkbox"
              checked={isEggless}
              onChange={(e) => setIsEggless(e.target.checked)}
              className="accent-secondary w-5 h-5 cursor-pointer rounded"
            />
          </div>

          {/* Occasion & Date */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-primary font-semibold">
                Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Milestone / Baby Shower">Milestone / Baby Shower</option>
                <option value="Festive / Weekend Treat">Festive / Weekend Treat</option>
                <option value="Just Craving Sweets">Just Craving Sweets</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-primary font-semibold">
                Required Date
              </label>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
              />
            </div>
          </div>

          {/* Custom Inscription / Baker Note */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm text-primary font-semibold">
              Piping Message / Baker Note (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 'Happy 25th Anya' or 'Less sugar, more berries'"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 focus:outline-none focus:border-secondary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 mt-2 rounded-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(229,115,153,0.28)] active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Send Order Query via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
