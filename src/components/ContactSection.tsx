import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    occasion: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.contact.trim()) {
      errs.contact = 'Please provide a telephone number or email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include your inquiry or reservation request details.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      // Simulate real frontend submission processing
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 400);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#1E1B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#A9884A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D37]">
              GET IN TOUCH
            </span>
            <span className="w-8 h-[1px] bg-[#A9884A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#171513] mb-4 [text-wrap:balance]">
            Contact Breeze Restaurant
          </h2>
          <p className="text-sm sm:text-base text-[#575047] font-light max-w-xl mx-auto leading-relaxed">
            Have questions about dining arrangements, group celebrations, or our menu offerings? Send us a note or call our desk directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Business Details & Services */}
          <div className="lg:col-span-5 bg-white border border-[#E5DDD2] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#171513]">
                  {businessInfo.name}
                </h3>
                <p className="text-sm font-bangla text-[#8C6D37] font-medium">
                  {businessInfo.banglaName}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#F0E9DF] text-sm text-[#4E473F]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8C6D37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C8377] block">
                      ADDRESS
                    </span>
                    <p className="font-medium text-[#171513] mt-0.5">
                      {businessInfo.address}
                    </p>
                    <p className="text-xs text-[#7A7266] mt-0.5">
                      Located in {businessInfo.locatedIn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8C6D37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C8377] block">
                      TELEPHONE
                    </span>
                    <a
                      href={`tel:${businessInfo.phoneClean}`}
                      className="text-base font-semibold text-[#171513] hover:text-[#8C6D37] transition-colors mt-0.5 inline-block"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8C6D37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C8377] block">
                      OPENING HOURS
                    </span>
                    <p className="font-medium text-[#171513] mt-0.5">
                      {businessInfo.openingHours.display}
                    </p>
                    <p className="text-xs text-[#7A7266] mt-0.5">
                      {businessInfo.openingHours.days}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="pt-5 border-t border-[#F0E9DF]">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C8377] block mb-2">
                  AVAILABLE SERVICES
                </span>
                <ul className="space-y-1.5 text-xs text-[#524B43]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D37]" />
                    <span>Dine-in (Comfortable family & couples seating)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D37]" />
                    <span>Drive-through service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D37]" />
                    <span>No-contact delivery service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Call Action */}
            <div className="mt-8 pt-6 border-t border-[#F0E9DF]">
              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#171513] hover:bg-[#2C2723] transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#C9A86A]" />
                <span>Call Restaurant Direct</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5DDD2] p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#171513] mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#665F56] mb-6">
              Fill in your details below for dining inquiries or table requests.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#F4F9F4] border border-[#CDE5D2] text-[#245E32] space-y-3 animate-fade-in">
                <div className="flex items-center gap-2 font-semibold text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                  <span>Inquiry Prepared Successfully</span>
                </div>
                <p className="text-xs sm:text-sm text-[#385E3E] leading-relaxed">
                  Thank you, <strong className="font-semibold">{formData.name}</strong>. Your inquiry has been received on the frontend interface. For immediate reservations or same-day dining, please call our service line directly at{' '}
                  <a href={`tel:${businessInfo.phoneClean}`} className="underline font-semibold">
                    {businessInfo.phone}
                  </a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', contact: '', occasion: 'General Inquiry', message: '' });
                  }}
                  className="mt-3 text-xs uppercase tracking-wider font-semibold text-[#171513] underline underline-offset-4 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#171513] mb-1.5">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C9] text-sm text-[#171513] placeholder-[#A0978B] focus:border-[#8C6D37] focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact" className="block text-xs uppercase tracking-wider font-semibold text-[#171513] mb-1.5">
                      Phone Number or Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact"
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="01XXXXXXXXX or name@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C9] text-sm text-[#171513] placeholder-[#A0978B] focus:border-[#8C6D37] focus:bg-white focus:outline-none transition-colors"
                    />
                    {errors.contact && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.contact}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-xs uppercase tracking-wider font-semibold text-[#171513] mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      id="occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C9] text-sm text-[#171513] focus:border-[#8C6D37] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="General Inquiry">General Dining Inquiry</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Date & Couples">Date & Couples Reservation</option>
                      <option value="Friends Get-Together">Friends Get-Together</option>
                      <option value="Casual Meeting">Casual Business Meeting</option>
                      <option value="Delivery / Takeaway">Delivery / Takeaway Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#171513] mb-1.5">
                    Message Details <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your planned visit, preferred date, estimated guest count, or any questions..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C9] text-sm text-[#171513] placeholder-[#A0978B] focus:border-[#8C6D37] focus:bg-white focus:outline-none transition-colors resize-y"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] active:bg-[#A9884A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
                  </button>
                  <p className="text-[11px] text-[#8C8377] mt-2 italic">
                    Note: Submissions are handled client-side in this applet. For guaranteed same-day bookings, call {businessInfo.phone}.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
