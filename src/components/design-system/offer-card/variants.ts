import { cva } from "class-variance-authority";

export const offerCardIconWrapperVariants = cva(
  "mb-4 rounded-full p-9 grow-0 self-start -mt-14 -ml-14",
  {
    variants: {
      variant: {
        purple: "bg-elcare-cream-50/30",
        cream: "bg-elcare-yellow-200/30",
      },
    },
    defaultVariants: {
      variant: "purple",
    },
  }
);

export const offerCardIconInnerVariants = cva("rounded-full p-5", {
  variants: {
    variant: {
      purple: "bg-elcare-cream-100/50",
      cream: "bg-elcare-yellow-200/50",
    },
  },
  defaultVariants: {
    variant: "purple",
  },
});

export const offerCardVariants = cva(
  "panel flex-1 min-w-[220px] max-w-lg border-transparent flex flex-col justify-between shadow-md transition-all duration-200 z-1",
  {
    variants: {
      variant: {
        purple: "bg-elcare-purple-100",
        cream: "bg-elcare-cream-100",
      },
      hover: {
        true: "hover:shadow-lg hover:scale-[1.03]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "purple",
      hover: true,
    },
  }
);
