import React from "react";

interface DocumentIconProps {
  backgroundColor?: string;
  foregroundColor?: string;
  className?: string;
  width?: number;
  height?: number;
}

const DocumentIcon: React.FC<DocumentIconProps> = ({
  backgroundColor = "#fffcf8",
  foregroundColor = "#5d4d8a",
  className = "",
  width = 48,
  height = 48,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      className={className}
    >
      <path
        fill={backgroundColor}
        d="M39.71,14.29l-10-10c-.19-.19-.44-.29-.71-.29H13c-2.76,0-5,2.24-5,5v30c0,2.76,2.24,5,5,5h22c2.76,0,5-2.24,5-5V15c0-.27-.1-.52-.29-.71Z"
      />
      <path
        fill={foregroundColor}
        d="M40,16h-7c-2.76,0-5-2.24-5-5v-7c0-.55.45-1,1-1s1,.45,1,1v7c0,1.65,1.35,3,3,3h7c.55,0,1,.45,1,1s-.45,1-1,1Z"
      />
      <path
        fill={foregroundColor}
        d="M32,25h-16c-.55,0-1-.45-1-1s.45-1,1-1h16c.55,0,1,.45,1,1s-.45,1-1,1Z"
      />
      <path
        fill={foregroundColor}
        d="M32,30h-16c-.55,0-1-.45-1-1s.45-1,1-1h16c.55,0,1,.45,1,1s-.45,1-1,1Z"
      />
      <path
        fill={foregroundColor}
        d="M26,35h-10c-.55,0-1-.45-1-1s.45-1,1-1h10c.55,0,1,.45,1,1s-.45,1-1,1Z"
      />
    </svg>
  );
};

export default DocumentIcon;
