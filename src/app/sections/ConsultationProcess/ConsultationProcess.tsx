"use client";
import WavySection from "@/components/WavySection";
import React from "react";
import OfferCard from "@/components/design-system/offer-card/OfferCard";
import MultipleChoiceIcon from "@/components/icons/MultipleChoiceIcon";
import VideoMessageIcon from "@/components/icons/VideoMessageIcon";
import TimelineIcon from "@/components/icons/TimelineIcon";
import HelpingHandIcon from "@/components/icons/HelpingHandIcon";

const ConsultationProcess = () => {
  return (
    <WavySection
      waveColorClass="bg-elcare-cream-100"
      bgColor="bg-elcare-purple-50"
    >
      <section className="container-y-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">
            Jak przebiega konsultacja
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Prosty i efektywny proces konsultacji, który pomoże rozwiązać
            problemy ze snem Twojego dziecka
          </p>

          <div className="w-full mx-auto space-y-12">
            {/* Initial Steps */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <OfferCard
                icon={<MultipleChoiceIcon />}
                title="Wstępna ankieta"
                description="Po wybraniu dogodnego terminu w kalendarzu i zaksięgowaniu wpłaty wysyłam szczegółową ankietę – jej wypełnienie pozwoli mi lepiej zrozumieć sytuację i przygotować się do konsultacji. Czas wypełnienia - około 15 minut."
                variant="cream"
                hover={false}
              />
              <OfferCard
                icon={<VideoMessageIcon />}
                title="Konsultacja online"
                description="Ustalamy dogodny termin 45-minutowej konsultacji online (wideorozmowa lub rozmowa telefoniczna), podczas której szczegółowo omawiamy problemy ze snem i wspólnie szukamy rozwiązań."
                variant="cream"
                hover={false}
              />
            </div>
          </div>
        </div>
      </section>
    </WavySection>
  );
};

export default ConsultationProcess;
