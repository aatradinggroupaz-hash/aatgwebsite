import React, { useState } from 'react';
import { Translation, ContactFormData } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  t: Translation;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant form response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
            AA TRADING GROUP MMC
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-lg text-slate-400 font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card (PDF specifications) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-serif text-white border-b border-slate-800 pb-4">
                AA Trading Group MMC
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.addressLabel}
                    </span>
                    <p className="text-sm font-medium text-slate-200 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-bold text-amber-300 hover:text-amber-200 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.websiteLabel}
                    </span>
                    <a
                      href={COMPANY_INFO.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{t.contact.callButton}</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.contact.whatsappButton}</span>
                </a>
              </div>
            </div>

            {/* Office Map Location Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-wider">
                <span>Office Location</span>
                <span>Luxen Plaza, Baku</span>
              </div>

              <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-700 relative bg-slate-950 flex items-center justify-center">
                <iframe
                  title="AA Trading Group Baku Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0182890251147!2d49.8702758!3d40.3807218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d174e9c70b5%3A0xc3b839df4a3e871!2s34%20Khatai%20Ave%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold font-serif text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-amber-400" />
              {t.contact.formTitle}
            </h3>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Müraciətiniz Qəbul Olundu!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {t.contact.successMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs uppercase tracking-wider"
                >
                  Yeni Mesaj Göndər
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {t.contact.fullName} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Anar Əliyev"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {t.contact.emailAddress} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {t.contact.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+994 50 123 45 67"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {t.contact.subject} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sənaye məhsulları təchizatı / Tender"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    {t.contact.message} *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Müraciətinizin mətni..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Göndərilir...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendButton}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
