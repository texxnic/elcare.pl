"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export enum OfferType {
  INDIVIDUAL_SUPPORT = "INDIVIDUAL_SUPPORT",
  CONSULTATION = "CONSULTATION",
}

interface OfferContextType {
  selectedOffer: OfferType;
  setSelectedOffer: (offer: OfferType) => void;
}

const OfferContext = createContext<OfferContextType | undefined>(undefined);

export function OfferProvider({ children }: { children: ReactNode }) {
  const [selectedOffer, setSelectedOffer] = useState<OfferType>(
    OfferType.INDIVIDUAL_SUPPORT
  );

  useEffect(() => {
    if (selectedOffer === OfferType.CONSULTATION) {
      document.body.classList.add("client-consultation");
    } else {
      document.body.classList.remove("client-consultation");
    }
  }, [selectedOffer]);

  return (
    <OfferContext.Provider value={{ selectedOffer, setSelectedOffer }}>
      {children}
    </OfferContext.Provider>
  );
}

export function useOffer() {
  const context = useContext(OfferContext);
  if (context === undefined) {
    throw new Error("useOffer must be used within an OfferProvider");
  }
  return context;
}
