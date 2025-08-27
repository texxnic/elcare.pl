import { cn } from "@/lib/utils";
import {
  offerCardVariants,
  offerCardIconWrapperVariants,
  offerCardIconInnerVariants,
} from "./variants";
import { VariantProps } from "class-variance-authority";
import Button from "../button";
import { ReactElement, cloneElement } from "react";

interface IconProps {
  width?: number;
  height?: number;
}

interface OfferCardProps extends VariantProps<typeof offerCardVariants> {
  title: string;
  icon?: ReactElement<IconProps>;
  iconWidth?: number;
  iconHeight?: number;
  price?: string;
  description?: string;
  features?: string[];
  onSelect?: () => void;
  isSelected?: boolean;
  className?: string;
  ctaText?: {
    selected: string;
    unselected: string;
  };
}

// Checkmark icon component
const CheckmarkIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-4 h-4", className)}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function OfferCard({
  title,
  price,
  icon,
  iconWidth = 48,
  iconHeight = 48,
  description,
  features,
  onSelect,
  isSelected = false,
  variant = "purple",
  hover = true,
  className,
  ctaText = {
    selected: "Wybrano",
    unselected: "Wybierz",
  },
}: OfferCardProps) {
  const isCreamVariant = variant === "cream";
  const textColorClass = isCreamVariant
    ? "text-elcare-purple-600"
    : "text-elcare-purple-500";
  const selectedBgClass = isCreamVariant
    ? "bg-elcare-cream-300"
    : "bg-elcare-purple-100 border-2 border-elcare-purple-500";

  // Feature styling based on variant
  const featureIconClass = isCreamVariant
    ? "text-elcare-yellow-400"
    : "text-elcare-purple-400";
  const featureTextClass = isCreamVariant
    ? "text-elcare-purple-600"
    : "text-elcare-purple-500";

  return (
    <div
      className={cn(
        offerCardVariants({
          variant,
          hover: isSelected ? false : hover,
        }),
        isSelected && "shadow-lg scale-[1.03]",
        isSelected && selectedBgClass,
        className
      )}
    >
      <div className="p-6 overflow-hidden rounded-3xl">
        <div className="flex flex-col">
          {icon && (
            <div className={cn(offerCardIconWrapperVariants({ variant }))}>
              <div className={cn(offerCardIconInnerVariants({ variant }))}>
                {cloneElement(icon, { width: iconWidth, height: iconHeight })}
              </div>
            </div>
          )}
          <h5 className={cn("font-bold text-2xl mb-2", icon && "-mt-10")}>
            {title}
          </h5>

          {description && (
            <p className={cn(" mb-4", textColorClass)}>{description}</p>
          )}
          {features && features.length > 0 && (
            <ul className="mb-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-3 items-center">
                  <div
                    className={cn(
                      "flex-shrink-0 mt-0.5 p-1 rounded-full bg-white/60 backdrop-blur-sm",
                      featureIconClass
                    )}
                  >
                    <CheckmarkIcon className={featureIconClass} />
                  </div>
                  <span
                    className={cn("text-sm leading-relaxed", featureTextClass)}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {price && (
            <p className={cn("text-3xl font-bold mb-4", textColorClass)}>
              {price}
            </p>
          )}
        </div>
        {onSelect && (
          <Button
            variant={isSelected ? "outline" : "primary"}
            onClick={onSelect}
            className="self-center mt-2"
            disabled={isSelected}
          >
            {isSelected ? ctaText.selected : ctaText.unselected}
          </Button>
        )}
      </div>
    </div>
  );
}
