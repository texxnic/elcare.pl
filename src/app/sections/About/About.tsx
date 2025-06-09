import Image from "next/image";
import WavySection from "@/components/WavySection";
import CertificationPills from "@/components/CertificationPills";

export default function About() {
  return (
    <WavySection
      waveColorClass="bg-elcare-cream-100"
      bgColor="bg-elcare-cream-50"
    >
      <section
        id="about"
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 container-x-padding container-y-padding"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/elo_photo_shape.png"
            alt="Elona Balan"
            width={720}
            height={320}
            className="w-full h-auto max-w-[750px]"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-2 text-elcare-purple-600">
            O mnie
          </h2>
          <p className="text-elcare-purple-500 mb-4">
            Cześć, jestem Elona – ekspertką ds. snu niemowląt i korekcji
            zaburzeń snu. <br /> Pomagam rodzicom ułożyć sen ich maluszków, aby
            każda rodzina mogła cieszyć się wyczekiwanymi, spokojnymi nocami.
            Bez łez, bez stresu i bez kołysania do białego rana. <br /> <br />{" "}
            Ale przede wszystkim jestem mamą cudownej córeczki, z którą
            przeszłam całą drogę pracy nad zaburzeniami snu i teraz z
            przyjemnością dzielę się z Wami swoim doświadczeniem i wiedzą. Po
            jej narodzinach mierzyłam się z drzemkami tak krótkimi, że nie
            zdążyłam wypić nawet filiżanki kawy, nocami pełnymi pobudek,
            zmęczenia i niepewności. Każde westchnienie budziło we mnie pytanie:
            czy dziś przespimy chociaż trochę więcej? Nie mogłam się pogodzić z
            tym, że sen dziecka równa się „treningowi przez wypłakiwanie”.
            <br /> <br /> Zaczęłam więc szukać innej drogi – ukończyłam roczny
            kurs specjalisty ds. snu dzieci, zgłębiłam fizjologię i biologię snu
            oraz opracowałam podejście, które naprawdę wspiera: z czułością, bez
            presji i łez. Z wykształcenia jestem biotechnolożką, a dziś studiuję
            pedagogikę i integrację sensoryczną – bo sen to nie tylko rytuały,
            to cała historia dziecka: jego emocje, ciało i potrzeby.
          </p>
          <CertificationPills />
        </div>
      </section>
    </WavySection>
  );
}
