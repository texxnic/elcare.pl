"use client";
import WavySection from "@/components/WavySection";
import React from "react";
import OfferCard from "@/components/design-system/offer-card/OfferCard";
import MultipleChoiceIcon from "@/components/icons/MultipleChoiceIcon";
import VideoMessageIcon from "@/components/icons/VideoMessageIcon";
import TimelineIcon from "@/components/icons/TimelineIcon";
import HelpingHandIcon from "@/components/icons/HelpingHandIcon";

const SupportProcess = () => {
  return (
    <WavySection
      waveColorClass="bg-elcare-cream-100"
      bgColor="bg-elcare-purple-50"
    >
      <section className="container-y-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">
            Jak przebiega wsparcie
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Przejrzysty proces wsparcia, który pomoże Twojemu dziecku lepiej
            spać
          </p>

          <div className="w-full mx-auto ">
            {/* Initial Steps */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between flex-wrap gap-8">
                <OfferCard
                  icon={<MultipleChoiceIcon />}
                  title="Wstępna ankieta"
                  description="Po wybraniu dogodnego terminu w kalendarzu i zaksięgowaniu wpłaty wysyłam wstępną ankietę – jej wypełnienie pozwoli mi lepiej zrozumieć sen dziecka i dostosować dalsze kroki do jego indywidualnych potrzeb. Czas wypełnienia - około 15 minut."
                  variant="cream"
                  hover={false}
                  className="max-w-full"
                />
                <OfferCard
                  icon={<VideoMessageIcon />}
                  title="Rozmowa telefoniczna"
                  description="Podczas 40-minutowej rozmowy telefonicznej lub wideo omawiamy aktualną sytuację związaną ze snem Państwa dziecka. Wyjaśniamy wszelkie wątpliwości, ustalamy priorytetowe cele oraz wymieniamy się informacjami, które pozwolą mi lepiej dobrać dalsze kroki."
                  variant="cream"
                  hover={false}
                  className="max-w-full"
                />
                <OfferCard
                  icon={<TimelineIcon />}
                  title="Indywidualny plan działania"
                  description="Na podstawie uzyskanych informacji przygotowuję szczegółowy, dostosowany wyłącznie do Państwa potrzeb plan działania. Znajdą się w nim codzienne wytyczne dotyczące harmonogramu snu, rytuałów wieczornych, sposobu reakcji na pobudki w nocy czy dostosowania otoczenia do właściwych warunków."
                  variant="cream"
                  hover={false}
                  className="max-w-full"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <OfferCard
                  icon={<HelpingHandIcon />}
                  title="Rozpoczęcie wsparcia"
                  description="Przez cały okres trwania wybranego pakietu aktywnie wspieram Was w procesie poprawy snu dziecka. Codziennie analizuję dziennik snu i monitoruję postępy, aby upewnić się, że wszystko idzie zgodnie z planem. W razie potrzeby wprowadzamy modyfikacje i wspólnie rozwiązujemy pojawiające się trudności."
                  variant="cream"
                  hover={false}
                  className="max-w-lg"
                />
                <OfferCard
                  icon={<HelpingHandIcon />}
                  title="Wsparcie po zakończeniu"
                  description="Po zakończeniu współpracy odbywa się krótka, 15 minutowa podsumowująca rozmowa, w trakcie której omawiamy osiągnięte rezultaty i przekazuję zalecenia na przyszłość. Dodatkowo przez kolejne 6 miesięcy możecie Państwo wysłać do mnie do 5 wiadomości z pytaniami dotyczącymi snu dziecka (np. w sytuacjach wyjątkowych, podróży czy zmian rytmu dnia)."
                  variant="cream"
                  hover={false}
                  className="max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </WavySection>
  );
};

export default SupportProcess;
