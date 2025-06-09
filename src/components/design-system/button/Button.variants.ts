export const variants = {
  primary: "bg-elcare-purple-500 text-white hover:bg-elcare-purple-600",
  primary_accent:
    "bg-elcare-purple-500 hover:bg-elcare-purple-600 text-white elcare-shadow",
  secondary:
    "bg-elcare-cream-200 text-elcare-purple-600 hover:bg-elcare-cream-300",
  outline:
    "border-2 border-elcare-purple-500 text-elcare-purple-500 hover:bg-elcare-purple-50",
} as const;

export const sizes = {
  sm: {
    base: "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 text-sm gap-1",
    padding: "px-3 py-1",
  },
  md: {
    base: "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 text-base gap-2",
    padding: "px-4 py-1.5",
  },
  lg: {
    base: "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 text-base gap-3",
    padding: "px-6 py-3",
  },
} as const;

export const iconSizes = {
  sm: 18,
  md: 22,
  lg: 26,
} as const;

export const iconStyles = {
  sm: {
    withIcon: "pl-0.5",
    withoutIcon: "",
    container: "flex items-center justify-center rounded-full bg-white/50 p-1",
  },
  md: {
    withIcon: "pl-2",
    withoutIcon: "",
    container:
      "flex items-center justify-center rounded-full bg-white/50 p-1.5",
  },
  lg: {
    withIcon: "pl-3",
    withoutIcon: "",
    container: "flex items-center justify-center rounded-full bg-white/50 p-3",
  },
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;
