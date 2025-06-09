"use client";
import OfferCard from "@/components/design-system/offer-card";
import HelpingHandIcon from "@/components/icons/HelpingHandIcon";
import SupportIcon from "@/icons/SupportIcon";
import { OfferType, useOffer } from "@/app/context/OfferContext";

export default function WhatIOffer() {
  const { selectedOffer, setSelectedOffer } = useOffer();

  return (
    <section id="offer" className="container mx-auto py-8  container-x-padding">
      <h2 className="text-4xl font-bold mb-2 text-elcare-purple-600 text-center">
        Oferta
      </h2>
      <p className="text-elcare-purple-500 mb-8 max-w-2xl mx-auto text-center">
        Wybierz formę wsparcia, która najlepiej odpowiada potrzebom Twojej
        rodziny
      </p>
      <div className="flex flex-wrap gap-10 justify-center">
        <OfferCard
          title="Wsparcie indywidualne"
          icon={<HelpingHandIcon />}
          isSelected={selectedOffer === OfferType.INDIVIDUAL_SUPPORT}
          onSelect={() => setSelectedOffer(OfferType.INDIVIDUAL_SUPPORT)}
          description="Regularne doradztwo i pomoc przez ustalony okres, aby krok po kroku wdrożyć zdrowe nawyki snu i monitorować postępy Twojego malucha."
        />
        <OfferCard
          title="Konsultacja"
          icon={<SupportIcon />}
          isSelected={selectedOffer === OfferType.CONSULTATION}
          onSelect={() => setSelectedOffer(OfferType.CONSULTATION)}
          description="Pojedyncza sesja dopasowana do potrzeb Twojej rodziny, podczas której omówimy aktualne wyzwania i zaproponujemy pierwsze kroki ku lepszemu snu dziecka."
        />
      </div>
    </section>
  );
}
