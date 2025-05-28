"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface GalleryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: "certificates" | "diplomas";
}

const GalleryPopup = ({ isOpen, onClose, type }: GalleryPopupProps) => {
  // This would be replaced with actual images from your assets
  const images = [
    {
      src: "/dyplom_mag-min.jpg",
      alt: "Dyplom 1",
    },
    {
      src: "/dyplom_spec-min.jpg",
      alt: "Dyplom 2",
    },
    {
      src: "/dylom-sleep.jpg",
      alt: "Dyplom 2",
    },
    {
      src: "/dylom-sleep2.jpg",
      alt: "Dyplom 2",
    },
    {
      src: "/dylom-sleep3.jpg",
      alt: "Dyplom 2",
    },
  ];

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={images}
      plugins={[Zoom, Thumbnails]}
      carousel={{
        padding: "16px",
        spacing: "16px",
        preload: 2,
      }}
      thumbnails={{
        width: 120,
        height: 80,
        padding: 4,
        border: 2,
        borderRadius: 4,
        gap: 16,
        imageFit: "contain",
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
      animation={{
        fade: 200,
        swipe: 200,
      }}
      controller={{ closeOnBackdropClick: true }}
      styles={{
        container: {
          backgroundColor: "transparent",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 200ms ease-in-out",
        },
        slide: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          transition: "transform 0.3s ease-out",
        },
        button: {
          transition: "opacity 0.2s ease",
        },
        icon: {
          transition: "transform 0.2s ease",
        },
        thumbnailsContainer: {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    />
  );
};

export default GalleryPopup;
