import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { AboutSection } from './components/AboutSection';
import { OccasionsSection } from './components/OccasionsSection';
import { FeaturedFood } from './components/FeaturedFood';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationModalOpen(false);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F4EFEB] selection:bg-[#C9A86A] selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar onReserveClick={handleOpenReservation} />

      {/* Main Content Area */}
      <main>
        {/* 1. Immersive Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onReserveClick={handleOpenReservation}
        />

        {/* 2. Quick Information Bar */}
        <QuickInfoBar />

        {/* 3. About Breeze Section (Warm Cream Surface) */}
        <AboutSection />

        {/* 4. Made for Every Occasion (Dark Surface) */}
        <OccasionsSection onReserveClick={handleOpenReservation} />

        {/* 5. Featured Food Section (Editorial Magazine Style) */}
        <FeaturedFood />

        {/* 6. Comprehensive Menu Section (Warm Cream Surface) */}
        <MenuSection onReserveClick={handleOpenReservation} />

        {/* 7. Visual Atmosphere Gallery & Lightbox (Dark Surface) */}
        <GallerySection />

        {/* 8. Verified Customer Reviews & Rating Breakdown (Warm Cream Surface) */}
        <ReviewsSection />

        {/* 9. Services: Dine-in, Drive-through, No-contact Delivery */}
        <ServicesSection />

        {/* 10. Venue Location, Plus Code, & Interactive Map */}
        <LocationSection />

        {/* 11. Table Reservation CTA Section */}
        <ReservationSection onScrollToContact={scrollToContact} />

        {/* 12. Contact Details & Inquiry Form (Warm Cream Surface) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reservation Dialog */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={handleCloseReservation}
        onScrollToForm={scrollToContact}
      />
    </div>
  );
}
