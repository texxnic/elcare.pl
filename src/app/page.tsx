import Image from "next/image";
import WavySection from "@/components/WavySection";
import CertificationPills from "@/components/CertificationPills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-0">
      {/* Hero Section - Straight (1) */}
      <section id="home" className="container mx-auto container-x-padding">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl text-elcare-purple-600 font-semibold mb-4">
              Pomóż swojemu dziecku
              <br />
              spać spokojnie
            </h1>
            <p className="text-lg text-elcare-purple-500 mb-8">
              Delikatne i spersonalizowane rozwiązania dla lepszych nocy i
              jaśniejszych dni.
            </p>
            <div className="flex items-center gap-4 mb-2">
              <button className="bg-elcare-purple-500 hover:bg-elcare-purple-600 text-white font-semibold px-8 py-3 rounded-full elcare-shadow">
                Rozpocznij
              </button>
              <button className="flex items-center gap-2 text-elcare-purple-700 font-medium hover:underline">
                Obejrzyj film wprowadzający
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:ml-10 flex-shrink-0">
            <Image
              src="/jumbo_kid.svg"
              alt="Ilustracja dekoracyjna"
              width={620}
              height={620}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* About Section - Wavy (2) */}
      <WavySection
        waveColorClass="bg-elcare-cream-100"
        bgColor="bg-elcare-cream-50"
      >
        <section
          id="about"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 container-x-padding py-10"
        >
          {/* Placeholder profile photo */}
          <Image
            src="/elo_photo_shape.png"
            alt="Elona Balan"
            width={300}
            height={300}
            className=""
          />

          <div>
            <h2 className="text-3xl font-bold mb-2 text-elcare-purple-600">
              O mnie
            </h2>
            <p className="text-elcare-purple-500 mb-4 max-w-xl">
              Jestem certyfikowanym konsultantem snu dziecięcego z ponad
              10-letnim doświadczeniem. Moje podejście jest delikatne,
              dostosowane do potrzeb Twojej rodziny i zaprojektowane tak, aby
              wspierać zdrowe nawyki snu Twojego malucha.
            </p>
            <CertificationPills />
          </div>
        </section>
      </WavySection>

      {/* What I Offer Section - Straight (3) */}
      <section id="offer" className="container mx-auto container-x-padding">
        <h2 className="text-3xl font-bold mb-8 text-elcare-purple-600 text-center md:text-left">
          Co oferuję
        </h2>
        <div className="flex flex-wrap">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🛏️</span>
            <div className="font-semibold text-lg mb-1">
              Spersonalizowane plany snu
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">👶</span>
            <div className="font-semibold text-lg mb-1">
              Wsparcie snu noworodków
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🧸</span>
            <div className="font-semibold text-lg mb-1">
              Przejścia dla maluchów
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">📞</span>
            <div className="font-semibold text-lg mb-1">
              Stałe wsparcie online
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Wavy (4) */}
      <WavySection
        waveColorClass="bg-elcare-cream-100"
        bgColor="bg-elcare-purple-50"
      >
        <section id="pricing" className="container mx-auto container-x-padding">
          <h2 className="text-3xl font-bold mb-8 text-elcare-purple-600 text-center md:text-left">
            Cennik
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-elcare-purple-50 panel flex-1 min-w-[220px] max-w-xs flex flex-col items-center">
              <div className="font-bold text-xl mb-2">Start</div>
              <div className="text-3xl font-bold text-elcare-purple-500 mb-4">
                399 zł
              </div>
              <ul className="text-elcare-purple-500 mb-4 text-center">
                <li>Konsultacja 1:1</li>
                <li>Spersonalizowany plan snu</li>
                <li>Wsparcie mailowe (1 tydzień)</li>
              </ul>
              <button className="bg-elcare-purple-500 hover:bg-elcare-purple-600 text-white font-semibold px-8 py-2 rounded-full elcare-shadow">
                Wybierz
              </button>
            </div>
            <div className="bg-elcare-purple-50 rounded-xl shadow p-8 flex-1 min-w-[220px] max-w-xs flex flex-col items-center border-2 border-elcare-purple-500">
              <div className="font-bold text-xl mb-2">Premium</div>
              <div className="text-3xl font-bold text-elcare-purple-500 mb-4">
                799 zł
              </div>
              <ul className="text-elcare-purple-500 mb-4 text-center">
                <li>Wszystko z pakietu Start</li>
                <li>2 tygodnie wsparcia</li>
                <li>Konsultacja kontrolna</li>
              </ul>
              <button className="bg-elcare-purple-500 hover:bg-elcare-purple-600 text-white font-semibold px-8 py-2 rounded-full elcare-shadow">
                Wybierz
              </button>
            </div>
          </div>
        </section>
      </WavySection>

      {/* Testimonials Section - Straight (5) */}
      <section
        id="testimonials"
        className="container mx-auto container-x-padding"
      >
        <h2 className="text-3xl font-bold mb-8 text-elcare-purple-600 text-center md:text-left">
          Opinie
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-elcare-cream-100 flex items-center justify-center">
            <span className="text-5xl"></span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <p className="text-lg text-elcare-purple-600 mb-2">
              "Nasz maluch teraz śpi przez całą noc, a my czujemy się jak nowi
              rodzice!"
            </p>
            <div className="text-elcare-purple-500 font-semibold">
              Anna, mama Jasia
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
