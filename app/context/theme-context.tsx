"use client";
import { useState, useEffect, createContext, useContext } from "react";

type ThemeType = "light" | "dark";
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  currentTheme: ThemeType;
  handleSetCurrentTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

  const handleSetCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setCurrentTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeType | null;
    if (localTheme) {
      setCurrentTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark").matches) {
      setCurrentTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, handleSetCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContectProvider");
  }

  return context;
}
