import { OfferProvider, useOffer } from "@/app/context/OfferContext";
import Hero from "@/app/sections/Hero/Hero";
import About from "@/app/sections/About/About";
import WhatIOffer from "@/app/sections/WhatIOffer/WhatIOffer";
import Pricing from "@/app/sections/Pricing/Pricing";
import ProcessSection from "@/app/components/ProcessSection";

function HomeContent() {
  return (
    <div className="min-h-screen flex flex-col gap-0">
      <Hero />
      <About />
      <WhatIOffer />
      <ProcessSection />
      <Pricing />
    </div>
  );
}

export default function Home() {
  return (
    <OfferProvider>
      <HomeContent />
    </OfferProvider>
  );
}
