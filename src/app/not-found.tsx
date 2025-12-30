import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-elcare-cream px-4 py-16 text-center">
            <div className="relative mb-8 h-64 w-64 animate-float sm:h-80 sm:w-80">
                <Image
                    src="/404-cloud.png"
                    alt="Śpiący księżyc"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <h1 className="mb-4 font-baloo text-4xl font-bold text-elcare-purple sm:text-6xl">
                404
            </h1>

            <p className="mb-2 font-nunito text-xl font-bold text-elcare-purple sm:text-2xl">
                Ojej! Ta strona śpi...
            </p>

            <p className="mb-8 max-w-md text-gray-600 sm:text-lg">
                Wygląda na to, że strona, której szukasz, udała się na drzemkę.
                Nie budźmy jej i wracajmy na stronę główną.
            </p>

            <Link
                href="/"
                className="rounded-full bg-elcare-purple px-8 py-3 text-lg font-bold text-white transition-transform hover:scale-105 hover:bg-opacity-90 hover:shadow-lg"
            >
                Wróć na stronę główną
            </Link>

            {/* Background decoration elements */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-20">
                <div className="absolute left-[10%] top-[20%] h-4 w-4 animate-twinkle rounded-full bg-elcare-purple"></div>
                <div className="absolute right-[15%] top-[15%] h-6 w-6 animate-twinkle text-elcare-yellow delay-75">
                    ★
                </div>
                <div className="absolute bottom-[20%] left-[20%] h-8 w-8 animate-float text-elcare-peach delay-150">
                    ★
                </div>
                <div className="absolute bottom-[25%] right-[10%] h-3 w-3 animate-twinkle rounded-full bg-elcare-purple delay-300"></div>
            </div>
        </div>
    );
}
