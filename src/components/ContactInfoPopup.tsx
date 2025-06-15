"use client";

interface ContactInfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactInfoPopup = ({ isOpen, onClose }: ContactInfoPopupProps) => {
  const email = process.env.NEXT_PUBLIC_SERVICE_EMAIL;

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-modal flex items-center justify-center transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        style={{ zIndex: "calc(var(--z-modal) - 1)" }}
        onClick={onClose}
      />
      <div
        className="relative bg-elcare-cream-50 w-full max-w-md mx-4 rounded-3xl overflow-hidden p-6"
        style={{ zIndex: "calc(var(--z-modal) + 1)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-elcare-purple-300 rounded-full p-2 shadow-lg hover:bg-elcare-purple-500 transition-colors"
          style={{ zIndex: "calc(var(--z-modal) + 2)" }}
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-elcare-cream-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold text-elcare-purple-600 mb-4">
            Dla powracających klientów
          </h3>
          <p className="text-elcare-purple-500 mb-6">
            Aby umówić się na konsultację, prosimy o kontakt przez email lub na
            koncie WhatsApp, gdzie wcześniej prowadziliśmy rozmowę.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 bg-elcare-purple-500 text-white px-6 py-3 rounded-lg hover:bg-elcare-purple-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPopup;
