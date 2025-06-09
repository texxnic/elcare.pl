import { colors } from "@/styles/colors";
import React from "react";

interface GraduationCapIconProps {
  backgroundColor?: string;
  accentColor?: string;
  className?: string;
  width?: number;
  height?: number;
}

const GraduationCapIcon: React.FC<GraduationCapIconProps> = ({
  backgroundColor = colors.elcarePurple[200],
  accentColor = colors.elcarePurple[500],
  className = "",
  width = 48,
  height = 48,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      baseProfile="tiny"
      viewBox="0.00 0.00 100.00 100.00"
      width={width}
      height={height}
      className={className}
    >
      <g strokeWidth="2.00" fill="none" strokeLinecap="butt">
        <path
          stroke={accentColor}
          vectorEffect="non-scaling-stroke"
          d="
  M 95.80 42.77
  C 93.84 40.81 91.39 41.77 91.63 44.49"
        />
        <path
          stroke={accentColor}
          vectorEffect="non-scaling-stroke"
          d="
  M 83.83 47.65
  Q 76.51 40.67 65.22 38.83
  Q 50.73 36.47 37.23 38.43
  Q 24.08 40.34 16.12 47.62"
        />
        <path
          stroke={accentColor}
          vectorEffect="non-scaling-stroke"
          d="
  M 81.21 50.30
  C 73.08 43.79 62.50 41.90 52.50 41.68
  C 42.36 41.45 32.36 42.56 23.16 47.15
  A 0.55 0.31 -61.0 0 0 23.08 47.20
  L 18.77 50.20"
        />
      </g>
      <path
        fill={backgroundColor}
        d="
  M 100.00 37.35
  L 100.00 39.13
  Q 98.91 41.98 95.80 42.77
  C 93.84 40.81 91.39 41.77 91.63 44.49
  L 83.83 47.65
  Q 76.51 40.67 65.22 38.83
  Q 50.73 36.47 37.23 38.43
  Q 24.08 40.34 16.12 47.62
  Q 7.48 44.39 2.14 41.86
  Q 0.83 41.24 0.00 39.23
  L 0.00 37.41
  Q 0.80 35.12 3.50 33.99
  Q 30.22 22.82 46.39 16.11
  C 49.44 14.85 52.58 15.68 55.89 17.05
  Q 76.15 25.46 96.35 33.90
  Q 99.21 35.10 100.00 37.35
  Z"
      />
      <path
        fill={accentColor}
        d="
  M 83.83 47.65
  Q 82.55 49.81 81.21 50.30
  C 73.08 43.79 62.50 41.90 52.50 41.68
  C 42.36 41.45 32.36 42.56 23.16 47.15
  A 0.55 0.31 -61.0 0 0 23.08 47.20
  L 18.77 50.20
  Q 17.55 49.94 16.12 47.62
  Q 24.08 40.34 37.23 38.43
  Q 50.73 36.47 65.22 38.83
  Q 76.51 40.67 83.83 47.65
  Z"
      />
      <path
        fill={backgroundColor}
        d="
  M 81.21 50.30
  Q 81.28 63.30 81.24 76.50
  C 81.23 78.84 80.17 79.15 77.99 79.21
  Q 63.24 79.58 50.80 87.29
  A 1.50 1.47 44.4 0 1 49.24 87.29
  Q 35.99 79.20 20.80 79.18
  A 2.04 2.03 0.1 0 1 18.77 77.15
  L 18.77 50.20
  L 23.08 47.20
  A 0.55 0.31 -61.0 0 1 23.16 47.15
  C 32.36 42.56 42.36 41.45 52.50 41.68
  C 62.50 41.90 73.08 43.79 81.21 50.30
  Z"
      />
      <path
        fill={accentColor}
        d="
  M 95.80 42.77
  L 95.87 74.75
  A 0.87 0.84 15.3 0 0 96.31 75.49
  Q 99.15 77.06 100.00 80.15
  L 100.00 82.11
  Q 98.29 86.78 95.17 90.19
  A 1.93 1.92 -44.1 0 1 92.29 90.15
  Q 89.16 86.51 87.69 82.56
  A 2.74 2.69 35.0 0 1 87.51 81.59
  Q 87.49 77.49 91.11 75.62
  A 0.96 0.93 -14.4 0 0 91.62 74.79
  L 91.63 44.49
  C 91.39 41.77 93.84 40.81 95.80 42.77
  Z
  M 93.73 84.94
  Q 93.85 84.94 94.14 84.61
  Q 94.41 84.30 95.56 82.00
  C 96.26 80.59 95.11 79.21 93.75 79.21
  C 92.39 79.20 91.22 80.58 91.91 81.99
  Q 93.05 84.30 93.32 84.60
  Q 93.61 84.94 93.73 84.94
  Z"
      />
    </svg>
  );
};

export default GraduationCapIcon;
