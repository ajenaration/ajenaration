import React from 'react';
import Hero from '../components/Hero';
import ContentSwitcher from '../components/ContentSwitcher';
import SponsorshipBanner from '../components/SponsorshipBanner';
import ContactCTA from '../components/ContactCTA';

interface HomePageProps {
  onOpenAboutModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenAboutModal }) => (
  <>
    <Hero onOpenAboutModal={onOpenAboutModal} />
    <SponsorshipBanner />
    <ContentSwitcher />
    <ContactCTA />
  </>
);

export default HomePage;