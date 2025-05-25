import { useMemo, ReactNode } from "react";

// Function to generate smooth wave pattern
const generateWavePath = (isTop = false) => {
  const points = [];
  const segments = 24;
  const amplitude = 100;
  const frequency = 0.4;

  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * 3840;
    const y = isTop
      ? 160 - Math.sin(i * frequency) * amplitude
      : 160 + Math.sin(i * frequency) * amplitude;
    points.push(`${x},${y}`);
  }

  return isTop
    ? `M0,0 L${points.join(" L")} L3840,0 Z`
    : `M0,320 L${points.join(" L")} L3840,320 Z`;
};

interface WavySectionProps {
  children: ReactNode;
  waveColorClass?: string;
  bgColor?: string;
  className?: string;
}

// Section with wavy background
const WavySection = ({
  children,
  waveColorClass = "bg-elcare-purple-50",
  bgColor = "bg-elcare-cream-50",
  className = "",
}: WavySectionProps) => {
  const topWavePath = useMemo(() => generateWavePath(true), []);
  const bottomWavePath = useMemo(() => generateWavePath(false), []);

  // Convert Tailwind class to hex color
  const getColorFromClass = (colorClass: string) => {
    const colorMap: { [key: string]: string } = {
      "bg-white": "#ffffff",
      "bg-elcare-purple-100": "#E3DDF5",
      "bg-elcare-cream-100": "#FDF8F1",
    };
    return colorMap[colorClass] || "#ffffff";
  };

  const waveColor = getColorFromClass(waveColorClass);

  return (
    <div className={`relative w-full ${bgColor} ${className}`}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3840 320"
          className="w-full h-24 min-w-[100vw]"
          preserveAspectRatio="none"
        >
          <path fill={waveColor} fillOpacity="1" d={topWavePath}></path>
        </svg>
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3840 320"
          className="w-full h-24 min-w-[100vw]"
          preserveAspectRatio="none"
        >
          <path fill={waveColor} fillOpacity="1" d={bottomWavePath}></path>
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 pt-24 pb-24">{children}</div>
    </div>
  );
};

export default WavySection;
