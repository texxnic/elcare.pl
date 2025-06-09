export const colors = {
  elcareCream: {
    50: "#FFFCF8", // lightest
    100: "#FDF8F1", // base background
    200: "#F7EEDD",
    300: "#F0E4C9", // slightly darker cream
    DEFAULT: "#FDF8F1", // default shade
  },
  elcarePurple: {
    50: "#F4F2F9",
    100: "#E3DDF5",
    200: "#CFC4F4",
    300: "#B7A5EC",
    400: "#8A7AD3",
    500: "#5D4D8A", // primary deep purple
    600: "#443772", // darker text
    DEFAULT: "#5D4D8A", // default shade
  },
  elcareYellow: {
    100: "#FFF8E3",
    200: "#FCE6A6",
    300: "#F8C25A", // main accent
    400: "#E6AA42",
    DEFAULT: "#E6AA42", // default shade
  },
  elcarePeach: {
    100: "#FFEAE5",
    200: "#FDD4C6",
    300: "#EDA89A", // peach button
    400: "#DB8471",
    DEFAULT: "#DB8471", // default shade
  },
} as const;

// Type for the color values
export type ColorValue =
  (typeof colors)[keyof typeof colors][keyof (typeof colors)[keyof typeof colors]];

// Helper function to get color value
export const getColor = (color: ColorValue): string => color;
