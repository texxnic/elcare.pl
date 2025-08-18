import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description:
    "Polityka prywatności Elcare - informacje o przetwarzaniu danych osobowych, plikach cookie i prawach użytkowników.",
};

export default function PrivacyPolicy() {
  const name = process.env.NEXT_PUBLIC_SERVICE_NAME || "Elcare";
  const email = process.env.NEXT_PUBLIC_SERVICE_EMAIL;
  const address = process.env.NEXT_PUBLIC_SERVICE_ADDRESS;

  return (
    <div className="container mx-auto container-x-padding">
      <div className="panel p-8 md:p-12">
        <h1 className="text-3xl font-baloo font-semibold text-elcare-purple mb-8">
          Polityka Prywatności
        </h1>

        <div className="prose prose-elcare-purple max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              1. Informacje ogólne
            </h2>
            <p>
              Niniejsza polityka prywatności określa zasady przetwarzania i
              ochrony danych osobowych przekazanych przez Użytkowników w związku
              z korzystaniem przez nich z usług świadczonych przez {name}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              2. Administrator Danych
            </h2>
            <p>
              Administratorem danych osobowych jest {name}
              {address && `, z siedzibą w ${address}`}.
              {email && (
                <>
                  {" "}
                  Kontakt w sprawach związanych z ochroną danych osobowych
                  możliwy jest pod adresem email:{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-elcare-purple-500 hover:text-elcare-purple-400"
                  >
                    {email}
                  </a>
                  .
                </>
              )}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              3. Cele i podstawy przetwarzania danych
            </h2>
            <p>Dane osobowe przetwarzane są w następujących celach:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Wysyłka newslettera - na podstawie zgody użytkownika (art. 6
                ust. 1 lit. a RODO)
              </li>
              <li>
                Obsługa zapytań i komunikacja - na podstawie prawnie
                uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)
              </li>
              <li>
                Analiza ruchu i poprawa wydajności serwisu (statystyki
                zagregowane i zanonimizowane) - na podstawie prawnie
                uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              4. Pliki cookie
            </h2>
            <p>Strona wykorzystuje następujące rodzaje plików cookie:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>reCAPTCHA</strong> - używany do ochrony formularzy przed
                spamem i automatycznymi atakami. Jest to usługa Google, która
                może zbierać dane o zachowaniu użytkownika na stronie.
              </li>
            </ul>
            <p className="mt-2">
              Użytkownik może w każdym momencie zarządzać zgodą na pliki cookie
              za pomocą mechanizmu wyświetlanego na stronie. Ustawienia
              przeglądarki również pozwalają ograniczyć lub zablokować pliki
              cookie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              5. Newsletter
            </h2>
            <p>
              W przypadku zapisania się do newslettera, przetwarzamy następujące
              dane:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Adres email</li>
              <li>Data i czas zapisania się</li>
            </ul>
            <p className="mt-2">
              Dane te są przechowywane do momentu wycofania zgody na
              przetwarzanie lub usunięcia konta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              6. Prawa użytkownika
            </h2>
            <p>Użytkownik ma prawo do:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych osobowych</li>
              <li>Usunięcia danych osobowych</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Sprzeciwu wobec przetwarzania danych</li>
              <li>Wycofania zgody w dowolnym momencie</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              7. Bezpieczeństwo danych
            </h2>
            <p>
              Dane osobowe są przechowywane w bazie danych Vercel KV, która
              zapewnia odpowiednie środki bezpieczeństwa zgodne z wymaganiami
              RODO. Dane są szyfrowane podczas przesyłania i przechowywania.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              8. Zmiany w polityce prywatności
            </h2>
            <p>
              Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności
              w dowolnym czasie. O wszelkich zmianach będziemy informować na
              stronie internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-baloo font-semibold text-elcare-purple mb-4">
              9. Kontakt
            </h2>
            <p>
              W sprawach związanych z ochroną danych osobowych można kontaktować
              się z nami:
            </p>
            <ul className="list-disc pl-6 mt-2">
              {email && (
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-elcare-purple-500 hover:text-elcare-purple-400"
                  >
                    {email}
                  </a>
                </li>
              )}
              {address && <li>Adres: {address}</li>}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
