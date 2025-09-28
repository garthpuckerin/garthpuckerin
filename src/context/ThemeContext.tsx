import { createContext, useContext } from "react";

export type Theme = "original" | "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeContext provider");
  }
  return ctx;
};
