import Link from "next/link";
import { ReactNode } from "react";

interface InfoPageLayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonHref?: string;
}

export default function InfoPageLayout({
  children,
  title,
  showBackButton = true,
  backButtonText = "Wróć do strony głównej",
  backButtonHref = "/",
}: InfoPageLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto container-x-padding py-12">
        {title && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-elcare-purple-600 mb-4">
              {title}
            </h1>
          </div>
        )}

        <div className="md:bg-white md:rounded-3xl md:shadow-sm md:p-8">
          {children}
        </div>

        {showBackButton && (
          <div className="text-center mt-12">
            <Link
              href={backButtonHref}
              className="inline-flex items-center gap-2 text-elcare-purple-600 hover:text-elcare-purple-500 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {backButtonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
