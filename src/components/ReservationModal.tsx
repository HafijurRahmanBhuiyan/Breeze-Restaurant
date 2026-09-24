import React from 'react';
import { X, Phone, Clock, Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToForm: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onScrollToForm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#171513] border border-white/15 text-white max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9C9284] hover:text-white p-2 transition-colors cursor-pointer"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold block mb-1">
            TABLE RESERVATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Reserve at Breeze Restaurant
          </h3>
          <p className="text-xs font-bangla text-[#C9A86A] mt-0.5">
            {businessInfo.banglaName}
          </p>
        </div>

        {/* Operating & Contact Info Box */}
        <div className="bg-[#211E1B] border border-white/10 p-5 space-y-3 text-xs sm:text-sm text-[#D5CBC0] mb-6">
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Daily Hours:</span>{' '}
              {businessInfo.openingHours.display}
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Location:</span>{' '}
              {businessInfo.address} ({businessInfo.locatedIn})
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Users className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Occasions:</span>{' '}
              Family gatherings, couples, friends & casual business meetings.
            </div>
          </div>
        </div>

        {/* Direct Call Recommendation */}
        <div className="p-4 bg-[#C9A86A]/10 border border-[#C9A86A]/30 mb-6 text-xs text-[#E8DCCB] leading-relaxed">
          <div className="flex items-center gap-2 text-[#C9A86A] font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4" /> Direct Phone Booking
          </div>
          For guaranteed instant confirmation and seating preparation, calling our reservation desk directly is recommended.
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={`tel:${businessInfo.phoneClean}`}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-black bg-[#C9A86A] hover:bg-[#DFC288] transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call Reservation Desk: {businessInfo.phone}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onScrollToForm();
            }}
            className="w-full py-3 px-4 text-xs uppercase tracking-wider font-medium text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
          >
            Fill Online Inquiry Form Instead
          </button>
        </div>
      </div>
    </div>
  );
};
