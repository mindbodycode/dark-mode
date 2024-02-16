"use client";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/app/context/theme-context";

const ThemeSwitch = () => {
  const { currentTheme, handleSetCurrentTheme } = useTheme();

  return (
    <button
      className=" bg-white h-[3rem] w-[3rem] m-3 bg-opacity-80 backdrop-blur-[0.5rem] border border-purple-700 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.20] active:scale-110 transition-all"
      onClick={handleSetCurrentTheme}
    >
      {currentTheme === "light" ? <BsSun size={30} /> : <BsMoon size={30} />}
    </button>
  );
};

export default ThemeSwitch;
