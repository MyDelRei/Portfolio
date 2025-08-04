import React from 'react'
import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import OfferSection from "../components/OfferSection.jsx";
import PortfolioHighlights from "../components/PortfolioHighlights.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
    return (
        <div className="bg-[#151515]">

            <HeroSection />
            <OfferSection />
            <PortfolioHighlights />
            <Footer />

        </div>
    );
};
export default LandingPage
