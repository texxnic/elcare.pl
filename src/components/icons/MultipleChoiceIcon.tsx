import { colors } from "@/styles/colors";
import React from "react";

interface MultipleChoiceIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
  className?: string;
}

const MultipleChoiceIcon: React.FC<MultipleChoiceIconProps> = ({
  primaryColor = colors.elcarePurple.DEFAULT,
  secondaryColor = colors.elcareYellow[300],
  width = 100,
  height = 100,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      <path
        fill={primaryColor}
        d="M 16.63 25.97 L 25.52 15.30 A 1.91 1.90 40.3 0 1 28.23 15.08 L 28.35 15.18 A 2.02 2.02 0.0 0 1 28.64 18.04 Q 25.66 21.64 18.84 29.85 C 17.43 31.53 16.41 31.62 14.61 30.25 Q 10.81 27.35 7.12 24.60 A 2.00 1.99 37.8 0 1 6.76 21.75 L 6.91 21.55 A 2.07 2.07 0.0 0 1 9.86 21.23 L 15.66 26.06 A 0.69 0.69 0.0 0 0 16.63 25.97 Z"
      />
      <rect
        fill={secondaryColor}
        x="37.49"
        y="16.66"
        width="56.26"
        height="12.52"
        rx="4.23"
      />
      <path
        fill={primaryColor}
        d="M 24.9684 54.1436 A 4.23 4.23 0.0 0 1 20.7163 58.3514 L 12.5164 58.3084 A 4.23 4.23 0.0 0 1 8.3086 54.0563 L 8.3516 45.8564 A 4.23 4.23 0.0 0 1 12.6037 41.6486 L 20.8036 41.6916 A 4.23 4.23 0.0 0 1 25.0114 45.9437 L 24.9684 54.1436 Z M 20.8567 46.1573 A 0.33 0.33 0.0 0 0 20.5273 45.8267 L 12.8273 45.8133 A 0.33 0.33 0.0 0 0 12.4967 46.1427 L 12.4833 53.8427 A 0.33 0.33 0.0 0 0 12.8127 54.1733 L 20.5127 54.1867 A 0.33 0.33 0.0 0 0 20.8433 53.8573 L 20.8567 46.1573 Z"
      />
      <rect
        fill={secondaryColor}
        x="37.49"
        y="43.72"
        width="56.26"
        height="12.56"
        rx="4.26"
      />
      <path
        fill={primaryColor}
        d="M 15.66 80.22 A 0.69 0.69 0.0 0 0 16.63 80.13 L 25.52 69.46 A 1.91 1.90 40.3 0 1 28.23 69.24 L 28.35 69.34 A 2.02 2.02 0.0 0 1 28.64 72.20 Q 25.66 75.80 18.84 84.01 C 17.43 85.69 16.41 85.78 14.61 84.41 Q 10.81 81.51 7.12 78.76 A 2.00 1.99 37.8 0 1 6.76 75.91 L 6.91 75.71 A 2.07 2.07 0.0 0 1 9.86 75.39 L 15.66 80.22 Z"
      />
      <rect
        fill={secondaryColor}
        x="37.49"
        y="70.81"
        width="56.26"
        height="12.52"
        rx="4.22"
      />
    </svg>
  );
};

export default MultipleChoiceIcon;
