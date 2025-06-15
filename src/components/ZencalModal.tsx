"use client";

import { useEffect, useState } from "react";
import ZencalEmbed from "./ZencalEmbed";

interface ZencalModalProps {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
}

const ZencalModal = ({ isOpen, onClose, slug }: ZencalModalProps) => {
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
        className="relative bg-elcare-cream-50 w-full h-full md:h-auto md:max-h-[90vh] md:w-auto md:max-w-4xl md:mx-4 md:rounded-3xl overflow-hidden"
        style={{ zIndex: "calc(var(--z-modal) + 1)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-elcare-purple-300 rounded-full p-2 shadow-lg hover:bg-elcare-purple-500 transition-colors"
          style={{ zIndex: "calc(var(--z-modal) + 2)" }}
          aria-label="Close modal"
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
        <div className="p-4 md:p-6 overflow-y-auto h-full max-h-[calc(90vh-3rem)]">
          <ZencalEmbed slug={slug} />
        </div>
      </div>
    </div>
  );
};

export default ZencalModal;
