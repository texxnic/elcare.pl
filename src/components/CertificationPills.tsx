"use client";

import { useState } from "react";
import GalleryPopup from "./GalleryPopup";

export default function CertificationPills() {
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setGalleryOpen(true)}
          className="bg-elcare-purple-100 hover:bg-elcare-purple-200 text-elcare-purple-600 font-semibold px-6 py-2 rounded-full transition-colors flex items-center gap-2"
        >
          <span>📜</span>
          Dyplomy
        </button>
      </div>

      <GalleryPopup
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        type="diplomas"
      />
    </>
  );
}
