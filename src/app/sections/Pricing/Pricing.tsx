"use client";
import WavySection from "@/components/WavySection";
import { OfferType, useOffer } from "@/app/context/OfferContext";
import OfferCard from "@/components/design-system/offer-card";
import { PRICING } from "@/config/pricing";
import { useState } from "react";
import ZencalModal from "@/components/ZencalModal";
import ContactInfoPopup from "@/components/ContactInfoPopup";
import { SLUGS } from "@/components/ZencalEmbed";

const INDIVIDUAL_SUPPORT_FEATURES_FRONT = ["Indywidualny plan działania"];

const INDIVIDUAL_SUPPORT_FEATURES = [
  "Indywidualny plan działania",
  "Dziennik snu (dożywotni dostęp)",
  "Rozmowa telefoniczna/wideo (45 min)",
  "Wsparcie WhatsApp (9:00-17:00)",
  "Rozmowa podsumowująca",
  "5 dodatkowych wiadomości (do 6 miesięcy)",
];

const CONSULTATION_FEATURES = [
  "45-minutowa wideorozmowa",
  "Analiza sytuacji snu dziecka",
  "Wskazówki i rekomendacje",
  "Odpowiedzi na pytania",
];

export default function Pricing() {
  const { selectedOffer, setSelectedOffer } = useOffer();
  const [selectedSlug, setSelectedSlug] = useState("");
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleCloseModal = () => {
    setSelectedSlug("");
  };

  const handleReturningClientClick = () => {
    setShowContactInfo(true);
  };

  return (
    <section
      id="pricing"
      className="container mx-auto container-x-padding py-8 pb-0 gap-4 flex flex-col"
    >
      <h2 className="text-4xl font-bold mb-2 text-elcare-purple-600 text-center">
        Cennik
      </h2>
      <p className="text-elcare-purple-500 mb-8 max-w-2xl mx-auto text-center">
        Przejrzyste ceny i elastyczne pakiety dostosowane do Twoich potrzeb
      </p>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full p-1 bg-elcare-purple-100">
          <button
            onClick={() => setSelectedOffer(OfferType.INDIVIDUAL_SUPPORT)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedOffer === OfferType.INDIVIDUAL_SUPPORT
                ? "bg-elcare-purple-500 text-white"
                : "text-elcare-purple-600 hover:bg-elcare-purple-200"
            }`}
          >
            Wsparcie indywidualne
          </button>
          <button
            onClick={() => setSelectedOffer(OfferType.CONSULTATION)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedOffer === OfferType.CONSULTATION
                ? "bg-elcare-purple-500 text-white"
                : "text-elcare-purple-600 hover:bg-elcare-purple-200"
            }`}
          >
            Konsultacje jednorazowe
          </button>
        </div>
      </div>

      {selectedOffer === OfferType.INDIVIDUAL_SUPPORT ? (
        <>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <OfferCard
              title="Pakiet Podstawowy"
              price={`${PRICING.BASIC_PACKAGE_PRICE} zł`}
              features={[
                "1 tydzień wsparcia",
                "2 wiadomości po wsparciu",
                ...INDIVIDUAL_SUPPORT_FEATURES_FRONT,
              ]}
              description="Idealny dla krótkoterminowego wsparcia"
              onSelect={() => setSelectedSlug(SLUGS.WSPARCIE_1)}
            />
            <OfferCard
              title="Pakiet Standard"
              price={`${PRICING.STANDARD_PACKAGE_PRICE} zł`}
              features={[
                "2 tygodnie wsparcia",
                "3 wiadomości po wsparciu",
                ...INDIVIDUAL_SUPPORT_FEATURES_FRONT,
              ]}
              description="Najpopularniejszy wybór"
              onSelect={() => setSelectedSlug(SLUGS.WSPARCIE_2)}
            />
            <OfferCard
              title="Pakiet Kompleksowy"
              price={`${PRICING.COMPREHENSIVE_PACKAGE_PRICE} zł`}
              features={[
                "3 tygodnie wsparcia",
                "5 wiadomości po wsparciu",
                ...INDIVIDUAL_SUPPORT_FEATURES_FRONT,
              ]}
              description="Kompleksowe wsparcie"
              onSelect={() => setSelectedSlug(SLUGS.WSPARCIE_3)}
            />
          </div>
          <div className="mt-8 text-center text-elcare-purple-600">
            <p className="font-semibold">
              Możliwość przedłużenia wsparcia:{" "}
              {PRICING.EXTENSION_PRICE_PER_WEEK} zł / tydzień
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <OfferCard
            title="Konsultacja"
            price={`${PRICING.CONSULTATION_PRICE} zł`}
            features={CONSULTATION_FEATURES}
            description="Jednorazowa konsultacja"
            onSelect={() => setSelectedSlug(SLUGS.KONSULTACJA)}
          />
          <OfferCard
            title="Konsultacja dla powracających"
            price={`${PRICING.RETURNING_CONSULTATION_PRICE} zł`}
            features={CONSULTATION_FEATURES}
            description="Specjalna oferta dla stałych klientów"
            onSelect={handleReturningClientClick}
          />
        </div>
      )}

      <ZencalModal
        isOpen={!!selectedSlug}
        onClose={handleCloseModal}
        slug={selectedSlug}
      />

      <ContactInfoPopup
        isOpen={showContactInfo}
        onClose={() => setShowContactInfo(false)}
      />
    </section>
  );
}
