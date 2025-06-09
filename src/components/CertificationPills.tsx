"use client";

import { useState } from "react";
import GalleryPopup from "./GalleryPopup";
import Button from "./design-system/button";
import GraduationCapIcon from "./icons/GraduationCapIcon";

export default function CertificationPills() {
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex gap-4">
        <Button
          variant="secondary"
          icon={<GraduationCapIcon />}
          size="md"
          onClick={() => setGalleryOpen(true)}
        >
          Dyplomy
        </Button>
      </div>

      <GalleryPopup
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        type="diplomas"
      />
    </>
  );
}
