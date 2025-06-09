import Image from "next/image";
import ScrollButton from "@/components/design-system/scroll-button/ScrollButton";

export default function Hero() {
  return (
    <section id="home" className="container mx-auto container-x-padding">
      <div className="flex flex-col md:flex-row items-center justify-between gap-24">
        <div className="w-full md:w-1/2 max-w-xl">
          <h1 className="text-4xl md:text-5xl text-elcare-purple-600 font-semibold mb-4">
            Spokojne noce bez łez i częstych pobudek
          </h1>
          <p className="text-lg text-elcare-purple-500 mb-6">
            Delikatne i spersonalizowane rozwiązania dla lepszych nocy i
            jaśniejszych dni.
          </p>
          <div className="flex items-center gap-4 mb-2">
            <ScrollButton />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/jumbo_kid.svg"
            alt="Ilustracja dekoracyjna"
            width={750}
            height={620}
            className="w-full h-auto max-w-[750px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
