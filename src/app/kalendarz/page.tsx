"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import InfoPageLayout from "@/components/InfoPageLayout";

interface DevelopmentLeap {
  week: number;
  title: string;
  description: string;
  color: "blue" | "green" | "white";
}

const DEVELOPMENT_LEAPS: DevelopmentLeap[] = [
  {
    week: 5,
    title: "1-1,5 miesiąca. Pierwszy skok rozwojowy dziecka: nowe doznania",
    description:
      "Około 5 tygodnia życia następuje skok dojrzewania. Pojawiają się łzy, dziecko dłużej czuwa, lepiej widzi, bardziej interesuje się otaczającym światem. Gwałtownie rozwijają się narządy zmysłów. Ale mózg malucha nie może jeszcze przetwarzać wszystkich nowych wrażeń.",
    color: "blue",
  },
  {
    week: 8,
    title:
      "2 miesiące. Drugi skok rozwojowy dziecka: zjawiska świata zewnętrznego i poznawanie własnego ciała",
    description:
      "Maluch odkrywa, że otaczający świat to nie jednolita całość bez granic. Teraz rozróżnia 'wzorce' - to zarówno wzory na przedmiotach, jak i na przykład własne ręce. Ma różne odczucia, gdy jego ręka jest podniesiona do góry, a gdy zwisa w dół. Z zainteresowaniem obserwuje ludzi.",
    color: "blue",
  },
  {
    week: 12,
    title:
      "2,5 miesiąca. Trzeci skok rozwojowy dziecka: uświadomienie sobie zmian",
    description:
      "Około 12 tygodnia życia dziecko odkrywa stałe zmiany wokół siebie. Dla niego nagle wszystko się zmieniło. Nic już nie jest stabilne. W zmieniającym się świecie jest tylko jedna stała rzecz - mama. Oczywiście, dąży do tego, żeby cały czas być u niej na rękach.\n\nSkoki rozwojowe nie następują w jedną noc. To nie tylko pojawienie się u malucha nowego ruchu czy umiejętności. Ważna jest gotowość dziecka do przyjęcia zmian w swoim ciele i świadomości, zrozumienia, że ma dostęp do nowych możliwości poznawania świata.",
    color: "blue",
  },
  {
    week: 17,
    title: "4 miesiące. Czwarty skok rozwojowy dziecka: wpływ na wydarzenia",
    description:
      "Możliwość świadomego postrzegania świata przez dziecko rozwija się. Zaczyna eksperymentować z wydarzeniami. Rozumie, że może sięgnąć po zabawkę, wziąć ją, obrócić, potrząsnąć. Nowy poziom aktywności fizycznej to konsekwencja wyższego stopnia rozwoju.\n\nDo czwartego miesiąca życia dzieci uczą się koncentrować wzrok na zabawce i brać ją. Fizyczny i emocjonalny rozwój malucha staje się bardziej złożony. Uświadamia sobie, że wokół niego jest wiele przedmiotów, co więcej, istnieją one niezależnie od tego, czy ich dotyka, czy nie. Dla nas, dorosłych, to oczywiste, ale dla malucha to prawdziwe odkrycie!",
    color: "blue",
  },
  {
    week: 26,
    title:
      "5,5 miesiąca. Piąty skok rozwojowy dziecka: uświadomienie sobie powiązań",
    description:
      "Dziecko uczy się koordynować ruchy rąk i nóg z ruchami całego ciała. Zaczyna badać powiązania między rzeczami, które tworzą jego świat. Świat nagle staje się ogromny. To, czego dziecko chce, może znajdować się daleko i nie może tego dosięgnąć.\n\nW szóstym miesiącu życia malucha zauważysz, że stał się znacznie bardziej aktywny. A to oznacza, że nadszedł czas na nowy skok rozwojowy.",
    color: "blue",
  },
  {
    week: 36,
    title:
      "8-9 miesięcy. Szósty skok rozwojowy dziecka: kategoryzacja przedmiotów i rozumienie mowy",
    description:
      "Dziecko zaczyna wyróżniać podobieństwa i różnice. Uświadamia sobie, że różne obiekty i doznania można łączyć w grupy lub kategorie. Banan różni się od jabłka wyglądem, smakiem i dotykiem, ale oba można zjeść. Maluch dowiaduje się więcej także o własnych emocjach.\n\nNowy niespokojny okres może rozpocząć się około 8 miesiąca życia i trwać od 3 do 6 tygodni.\n\nDziecko uczy się widzieć prawidłowości i grupować obiekty według określonych cech. Rozwija się jego węch, dotyk, wzrok, słuch, emocje. Aktywnie rozwija się rozumienie mowy.",
    color: "blue",
  },
  {
    week: 44,
    title: "10,5 miesiąca. Siódmy skok rozwojowy dziecka: pierwsze sekwencje",
    description:
      "Dziecko zaczyna rozumieć, że aby osiągnąć cel, musi wykonać działania w określonej kolejności. Próbuje układać klocki lub piramidę - wcześniej czasem udawało mu się to przypadkowo, a teraz działa całkowicie świadomie.\n\nPrawdopodobnie już przywykłeś do tego, że maluch ciągle wszystko rozrzuca, a ledwo zbudujesz wieżę, on ją natychmiast niszczy.\n\nOkoło 10,5 miesiąca rozpoczyna się długo wyczekiwany czas samodzielnego konstruowania. Nowy skok rozwojowy nastąpi w dziesiątym miesiącu życia malucha i może trwać od 3 do 7 tygodni.",
    color: "blue",
  },
  {
    week: 53,
    title: "1 rok. Ósmy skok rozwojowy dziecka: planowanie i osiąganie celów",
    description:
      "Dziecko staje się bardziej nieprzewidywalne. Uświadamia sobie, że rezultatu można osiągnąć za pomocą różnych działań. Wcześniej jego działania były ogniwami prostych i znanych ci sekwencji. Teraz to samo działanie może prowadzić do różnych rezultatów. Niektóre z nich są dla ciebie niezrozumiałe, bo nie wiesz, czego dziecko chce osiągnąć.",
    color: "blue",
  },
  {
    week: 61,
    title:
      "1 rok i 2 miesiące. Dziewiąty skok rozwojowy dziecka: abstrakcje i zasady",
    description:
      "Myślenie dziecka stało się bardziej złożone i dorosłe. Biegiem jego myśli kierują teraz zasady. Nie podąża za programem jak robot, ale sam go tworzy, wprowadza zmiany, a nawet ocenia. Rozważa posunięcia, buduje plany i waży ich konsekwencje.\n\nW wyniku poprzedniego skoku rozwojowego twój maluch zrozumiał - żeby coś zrobić, trzeba wykonać kilka kolejnych działań.\n\nI oto około 1 roku i 2 miesięcy na dziecko spada nowa lawina informacji, na którą reaguje kaprysami i łzami.",
    color: "blue",
  },
  {
    week: 72,
    title:
      "1 rok i 5 miesięcy. Dziesiąty skok rozwojowy dziecka: systemy i zarządzanie",
    description:
      "Dziecko zauważa systemy - jedność wzajemnie zależnych elementów. Uświadamia sobie, że jego rodzina różni się od rodziny jego kolegi. Rozumie, że jego działania prowadzą do określonych wydarzeń, ma władzę nad rzeczami, może podejmować decyzje.\n\nPodczas poprzedniego skoku rozwojowego twoje dziecko nauczyło się decydować, co wybrać, jak postąpić, dokąd pójść. Około 1 roku i 4 miesiąca jego wyobrażenie o sobie, o mamie i tacie, o wszystkim, co go otacza, znów zaczyna się zmieniać.\n\nStopniowo maluchowi staje się jasne, że w zależności od jego decyzji wszystko może się zmieniać, że w komunikacji można okazywać elastyczność, że emocje mają wiele odcieni, a czyny mają całkiem określone konsekwencje.",
    color: "blue",
  },
];

// Specific weeks that should be light green (calm periods)
const NOT_CALM_WEEKS = [
  9, 15, 16, 18, 19, 23, 24, 25, 29, 30, 34, 35, 37, 42, 43, 45, 46, 51, 52, 54,
  60, 63, 64, 71, 74, 75,
];

export default function KalendarzPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [birthDate, setBirthDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [showPreviousWeeks, setShowPreviousWeeks] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    content: string;
    x: number;
    y: number;
    position: "top" | "bottom" | "left" | "right";
  }>({ show: false, content: "", x: 0, y: 0, position: "top" });
  const calendarRef = useRef<HTMLDivElement>(null);

  // Load date from URL query parameters on component mount
  useEffect(() => {
    const day = searchParams.get("day");
    const month = searchParams.get("month");
    const year = searchParams.get("year");

    if (day && month && year) {
      setBirthDate({ day, month, year });
      // Automatically show calendar if valid date is provided
      const validationErrors = validateDate(day, month, year);
      if (validationErrors.length === 0) {
        setCurrentWeek(calculateCurrentWeekFromDate(day, month, year));
        setShowCalendar(true);
      }
    }
  }, [searchParams]);

  // Helper function to calculate week without state dependency
  const calculateCurrentWeekFromDate = (
    day: string,
    month: string,
    year: string
  ) => {
    if (!day || !month || !year) return 0;

    const birth = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    const diffTime = today.getTime() - birth.getTime();
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    return diffWeeks;
  };

  // Date validation function
  const validateDate = (day: string, month: string, year: string): string[] => {
    const errors: string[] = [];

    if (!day || !month || !year) {
      return ["Wszystkie pola muszą być wypełnione"];
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    // Check if values are valid numbers
    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      errors.push("Wszystkie wartości muszą być liczbami");
      return errors;
    }

    // Check month range
    if (monthNum < 1 || monthNum > 12) {
      errors.push("Miesiąc musi być między 1 a 12");
    }

    // Check if date is valid (e.g., February 30th doesn't exist)
    const testDate = new Date(yearNum, monthNum - 1, dayNum);
    if (
      testDate.getFullYear() !== yearNum ||
      testDate.getMonth() !== monthNum - 1 ||
      testDate.getDate() !== dayNum
    ) {
      errors.push("Podana data nie istnieje");
    }

    return errors;
  };

  const calculateCurrentWeek = () => {
    if (!birthDate.day || !birthDate.month || !birthDate.year) return 0;

    const birth = new Date(
      parseInt(birthDate.year),
      parseInt(birthDate.month) - 1,
      parseInt(birthDate.day)
    );
    const today = new Date();
    const diffTime = today.getTime() - birth.getTime();
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    return diffWeeks;
  };

  const handleShowCalendar = () => {
    // Clear previous errors
    setErrors([]);

    // Validate the date
    const validationErrors = validateDate(
      birthDate.day,
      birthDate.month,
      birthDate.year
    );

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, show calendar and update URL
    setCurrentWeek(calculateCurrentWeek());
    setShowCalendar(true);

    // Update URL with birth date parameters
    const params = new URLSearchParams();
    params.set("day", birthDate.day);
    params.set("month", birthDate.month);
    params.set("year", birthDate.year);
    router.push(`/kalendarz?${params.toString()}`);

    // Scroll to calendar after a short delay to ensure it's rendered
    setTimeout(() => {
      if (calendarRef.current) {
        const elementTop = calendarRef.current.offsetTop;
        const offsetPosition = elementTop - 50; // Account for fixed header
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const getWeekColor = (week: number) => {
    const leap = DEVELOPMENT_LEAPS.find((l) => l.week === week);
    if (leap) return "bg-elcare-purple-100";
    if (NOT_CALM_WEEKS.includes(week)) return "bg-elcare-cream-200";
    return "bg-white";
  };

  const isCurrentWeek = (week: number) => {
    // Don't select any week if the birth date is in the future
    if (currentWeek < 0) return false;
    return week === currentWeek;
  };

  const isPastWeek = (week: number) => {
    // Don't gray out past weeks if the birth date is completely in the past
    if (currentWeek < 0) return false;
    return week <= currentWeek;
  };

  const handleMouseEnter = (
    event: React.MouseEvent,
    leap: DevelopmentLeap,
    formattedDate: string
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate tooltip dimensions (approximate)
    const tooltipWidth = 320; // max-w-sm
    const tooltipHeight = 120; // approximate height

    // Determine best position
    let x = rect.left + rect.width / 2;
    let y = rect.top;
    let position: "top" | "bottom" | "left" | "right" = "top";

    // Check if tooltip would overflow right edge
    if (x + tooltipWidth / 2 > viewportWidth) {
      x = viewportWidth - tooltipWidth / 2 - 10;
    }

    // Check if tooltip would overflow left edge
    if (x - tooltipWidth / 2 < 0) {
      x = tooltipWidth / 2 + 10;
    }

    // Check if tooltip would overflow top edge
    if (y - tooltipHeight < 0) {
      y = rect.bottom + tooltipHeight / 2;
      position = "bottom";
    }

    // Check if tooltip would overflow bottom edge
    if (y + tooltipHeight > viewportHeight) {
      y = rect.top - tooltipHeight / 2;
      position = "top";
    }

    setTooltip({
      show: true,
      content: `${leap.title}\n\n${leap.description}\n`,
      x,
      y,
      position,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: "", x: 0, y: 0, position: "top" });
  };

  const renderWeekCell = (week: number) => {
    const leap = DEVELOPMENT_LEAPS.find((l) => l.week === week);
    const isCurrent = isCurrentWeek(week);
    const isPast = isPastWeek(week);

    // Calculate the exact date for this week
    const getWeekDate = () => {
      if (!birthDate.day || !birthDate.month || !birthDate.year) return null;

      const birth = new Date(
        parseInt(birthDate.year),
        parseInt(birthDate.month) - 1,
        parseInt(birthDate.day)
      );
      const weekDate = new Date(
        birth.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000
      );
      return weekDate;
    };

    const weekDate = getWeekDate();
    const formattedDate = weekDate
      ? weekDate.toLocaleDateString("pl-PL", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : null;

    return (
      <div
        key={week}
        className={`
          relative p-2 md:p-3 border border-elcare-purple-200 rounded-lg text-center transition-all overflow-hidden
          ${getWeekColor(week)}
          ${
            isCurrent
              ? "ring-4 ring-elcare-purple-500 ring-opacity-100 ring-offset-2 ring-offset-white shadow-lg"
              : ""
          }
          opacity-100
          ${leap ? "cursor-pointer hover:shadow-md hover:scale-105 " : ""}
        `}
        onMouseEnter={
          leap && formattedDate
            ? (e) => handleMouseEnter(e, leap, formattedDate)
            : undefined
        }
        onMouseLeave={leap ? handleMouseLeave : undefined}
      >
        <div
          className={`text-sm md:text-lg font-semibold ${
            leap ? "underline" : ""
          }  ${
            isCurrent ? "text-elcare-purple-700" : "text-elcare-purple-600"
          }`}
        >
          {week}
        </div>
        {leap && (
          <span className="absolute -bottom-5 -right-5 text-6xl md:text-7xl text-elcare-yellow-400 opacity-20 ">
            ⚡
          </span>
        )}
        <div className="text-xs text-elcare-purple-400">tydzień</div>
        {formattedDate && (
          <div className="text-xs text-elcare-purple-400 mt-1">
            {formattedDate}
          </div>
        )}
      </div>
    );
  };

  // Determine which weeks to show based on current week and toggle
  const isCurrentInRange = currentWeek >= 1 && currentWeek <= 78;
  const weeksToRender = Array.from(
    {
      length:
        isCurrentInRange && !showPreviousWeeks
          ? 78 - Math.max(1, currentWeek) + 1
          : 78,
    },
    (_, i) =>
      isCurrentInRange && !showPreviousWeeks
        ? Math.max(1, currentWeek) + i
        : i + 1
  );

  return (
    <InfoPageLayout title="Kalendarz skoków rozwojowych i kryzysów">
      <div className="mb-8">
        {/* Custom Tooltip */}
        {tooltip.show && (
          <div
            className="fixed z-50 bg-elcare-purple-600 text-white px-4 py-3 rounded-lg shadow-lg text-sm max-w-sm pointer-events-none"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform:
                tooltip.position === "top"
                  ? "translateX(-50%) translateY(-100%)"
                  : "translateX(-50%) translateY(0%)",
            }}
          >
            <div className="whitespace-pre-line">{tooltip.content}</div>
            <div
              className={`absolute w-0 h-0 border-l-4 border-r-4 border-transparent ${
                tooltip.position === "top"
                  ? "top-full left-1/2 transform -translate-x-1/2 border-t-4 border-t-elcare-purple-600"
                  : "bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-b-elcare-purple-600"
              }`}
            ></div>
          </div>
        )}

        <p className="text-lg text-elcare-purple-500 max-w-3xl mx-auto text-center mb-8">
          Wprowadź datę urodzenia dziecka i otrzymaj spersonalizowaną tabelę
          skoków rozwojowych
        </p>

        {/* Input Section */}
        <div className="bg-elcare-purple-50 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4 md:items-end">
            <div className="flex gap-2 md:gap-4 ">
              <div className="min-w-26 md:min-w-30">
                <label className="block text-sm font-medium text-elcare-purple-600 mb-2">
                  Dzień
                </label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  placeholder="DD"
                  className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none text-sm md:text-base ${
                    errors.length > 0
                      ? "border-red-500 focus:border-red-500"
                      : "border-elcare-purple-200 focus:border-elcare-purple-500"
                  }`}
                  value={birthDate.day}
                  onChange={(e) => {
                    setBirthDate((prev) => ({ ...prev, day: e.target.value }));
                    // Clear errors when user starts typing
                    if (errors.length > 0) setErrors([]);
                  }}
                />
              </div>
              <div className="w-26 md:w-30">
                <label className="block text-sm font-medium text-elcare-purple-600 mb-2">
                  Miesiąc
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  placeholder="MM"
                  className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none text-sm md:text-base ${
                    errors.length > 0
                      ? "border-red-500 focus:border-red-500"
                      : "border-elcare-purple-200 focus:border-elcare-purple-500"
                  }`}
                  value={birthDate.month}
                  onChange={(e) => {
                    setBirthDate((prev) => ({
                      ...prev,
                      month: e.target.value,
                    }));
                    // Clear errors when user starts typing
                    if (errors.length > 0) setErrors([]);
                  }}
                />
              </div>
              <div className="w-24 md:w-28">
                <label className="block text-sm font-medium text-elcare-purple-600 mb-2">
                  Rok
                </label>
                <input
                  type="number"
                  placeholder="YYYY"
                  className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none text-sm md:text-base ${
                    errors.length > 0
                      ? "border-red-500 focus:border-red-500"
                      : "border-elcare-purple-200 focus:border-elcare-purple-500"
                  }`}
                  value={birthDate.year}
                  onChange={(e) => {
                    setBirthDate((prev) => ({
                      ...prev,
                      year: e.target.value,
                    }));
                    // Clear errors when user starts typing
                    if (errors.length > 0) setErrors([]);
                  }}
                />
              </div>
            </div>
            <button
              onClick={handleShowCalendar}
              disabled={!birthDate.day || !birthDate.month || !birthDate.year}
              className="bg-elcare-purple-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-elcare-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base w-full md:w-auto"
            >
              Pokaż tabelę
            </button>
          </div>

          {/* Error Display */}
          {errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <div className="text-red-500 text-lg">⚠️</div>
                <div>
                  <h4 className="text-red-800 font-medium mb-1">
                    Błędy w danych:
                  </h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="text-left mt-4">
            <Link
              href="#"
              className="text-elcare-purple-500 hover:text-elcare-purple-400 text-sm underline relative group"
              title="Dzieci urodzone przedwcześnie (przed 37. tygodniem ciąży) mogą mieć inne terminy skoków rozwojowych. Kalendarz można dostosować do wieku skorygowanego (wiek od terminu porodu) zamiast wieku rzeczywistego."
            >
              Dziecko urodziło się przedwcześnie?
              <div className="absolute bottom-full left-1/2 transform w-[300px] -translate-x-1/2 mb-2 px-3 py-2 bg-elcare-purple-600 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Dzieci urodzone przedwcześnie (przed 37. tygodniem ciąży) mogą
                mieć inne terminy skoków rozwojowych. Kalendarz można dostosować
                do wieku skorygowanego (wiek od terminu porodu) zamiast wieku
                rzeczywistego.
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-elcare-purple-600"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Calendar Grid */}
        {showCalendar && (
          <div
            ref={calendarRef}
            className="bg-elcare-purple-50 rounded-2xl p-4 md:p-6 mb-6 md:mb-6"
          >
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-elcare-purple-600 mb-2">
                Spersonalizowany kalendarz rozwoju
              </h2>
              <p className="text-elcare-purple-500 text-sm md:text-base">
                {currentWeek > 0 ? (
                  <>
                    Twoje dziecko ma obecnie{" "}
                    <strong>{currentWeek} tygodni</strong>
                  </>
                ) : currentWeek === 0 ? (
                  <>Twoje dziecko urodziło się w tym tygodniu</>
                ) : (
                  <>
                    Twoje dziecko urodzi się za{" "}
                    <strong>{Math.abs(currentWeek)} tygodni</strong>
                  </>
                )}
              </p>
            </div>

            {/* Legend - Moved to top */}
            <div className="pt-2 pb-4 flex gap-8 justify-between md:flex-row flex-col">
              <div className="flex flex-col sm:flex-row gap-4 text-xs md:text-sm">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-elcare-purple-100 rounded flex items-center justify-center border-elcare-purple-100 border-2">
                      ⚡
                    </div>
                    <span className="text-elcare-yellow-400"></span>
                  </div>
                  <span className="text-elcare-purple-600">
                    Około tego tygodnia oczekuje się trudnego czasu
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white border-elcare-purple-100 border-2 rounded"></div>
                  <span className="text-elcare-purple-600">
                    Obecnie względnie spokojny czas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-elcare-cream-200 border-elcare-purple-100 border-2 rounded"></div>
                  <span className="text-elcare-purple-600">
                    Możliwy trudny czas
                  </span>
                </div>
              </div>
              {isCurrentInRange && currentWeek > 1 && (
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setShowPreviousWeeks((prev) => !prev)}
                    className="text-elcare-purple-600 hover:text-elcare-purple-500 text-sm underline"
                  >
                    {showPreviousWeeks
                      ? "Ukryj poprzednie tygodnie"
                      : "Pokaż poprzednie tygodnie"}
                  </button>
                </div>
              )}
            </div>

            {/* Calendar Grid */}
            <div className="overflow-x-auto mb-6 p-2 py-4">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {weeksToRender.map((week) => renderWeekCell(week))}
              </div>
            </div>
          </div>
        )}

        {/* Information Section */}
        <div className="bg-elcare-purple-50 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-2xl font-bold text-elcare-purple-600 mb-6">
            O skokach rozwojowych
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-elcare-purple-600 mb-3">
                Co to są skoki rozwojowe?
              </h3>
              <p className="text-elcare-purple-500 mb-4">
                Skoki rozwojowe to okresy intensywnego wzrostu i zmian w rozwoju
                dziecka. W tych momentach dzieci mogą być bardziej marudne,
                wymagające i mieć problemy ze snem.
              </p>
              <p className="text-elcare-purple-500">
                Każdy skok rozwojowy oznacza, że dziecko uczy się nowych
                umiejętności i rozumie świat w nowy sposób.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-elcare-purple-600 mb-3">
                Jak korzystać z kalendarza?
              </h3>
              <ul className="text-elcare-purple-500 space-y-2">
                <li>• Wprowadź dokładną datę urodzenia dziecka</li>
                <li>• Fioletowe komórki z ⚡ oznaczają skoki rozwojowe</li>
                <li>• Kremowe komórki oznaczają możliwy trudny czas</li>
                <li>
                  • Przygotuj się na zmiany w zachowaniu w oznaczonych
                  tygodniach
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section
        <div className="bg-gradient-to-r from-elcare-purple-500 to-elcare-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Potrzebujesz pomocy z rytmem snu?
          </h2>
          <p className="mb-6 text-elcare-purple-100">
            Skoki rozwojowe często wpływają na sen dziecka. Otrzymaj
            profesjonalną konsultację w zakresie ustalenia zdrowego rytmu snu.
          </p>
          <Link
            href="#pricing"
            className="inline-block bg-white text-elcare-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-elcare-purple-50 transition-colors"
          >
            Umów się na konsultację
          </Link>
        </div> */}
      </div>
    </InfoPageLayout>
  );
}
