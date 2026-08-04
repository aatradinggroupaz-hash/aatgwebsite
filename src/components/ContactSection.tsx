import React from 'react';
import { Translation } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Globe, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  t: Translation;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card (PDF specifications) */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-serif text-white border-b border-slate-800 pb-4 mb-6">
                AA Trading Group MMC
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.addressLabel}
                    </span>
                    <p className="text-base font-medium text-slate-200 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-lg font-bold text-amber-300 hover:text-amber-200 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-semibold text-slate-200 hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {t.contact.websiteLabel}
                    </span>
                    <a
                      href={COMPANY_INFO.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-slate-200 hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Direct Call & WhatsApp */}
            <div className="pt-8 mt-8 border-t border-slate-800 grid grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.contact.callButton}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappButton}</span>
              </a>
            </div>
          </div>

          {/* Office Map Location Card */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-lg font-bold font-serif text-white">
                Office Location
              </span>
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20">
                Luxen Plaza, Baku
              </span>
            </div>

            <div className="w-full min-h-[320px] h-full rounded-xl overflow-hidden border border-slate-800 relative bg-slate-950 flex items-center justify-center">
              <iframe
                title="AA Trading Group Baku Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0182890251147!2d49.8702758!3d40.3807218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d174e9c70b5%3A0xc3b839df4a3e871!2s34%20Khatai%20Ave%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 opacity-85 hover:opacity-100 transition-opacity min-h-[320px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
