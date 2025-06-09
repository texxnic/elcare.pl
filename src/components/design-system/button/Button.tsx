import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import {
  variants,
  sizes,
  iconSizes,
  iconStyles,
  type ButtonVariant,
  type ButtonSize,
} from "./Button.variants";

interface IconProps {
  width?: number;
  height?: number;
}

interface ButtonProps {
  children: ReactNode;
  icon?: React.ReactElement<IconProps>;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button = ({
  children,
  icon,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) => {
  const clonedIcon =
    icon &&
    React.cloneElement(icon, {
      width: iconSizes[size],
      height: iconSizes[size],
    });

  return (
    <button
      className={cn(
        "border-2 border-transparent",
        sizes[size].base,
        sizes[size].padding,
        variants[variant],
        icon ? iconStyles[size].withIcon : iconStyles[size].withoutIcon,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      disabled={disabled}
    >
      {icon && (
        <span className={cn(iconStyles[size].container)}>{clonedIcon}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
