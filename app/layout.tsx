import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/ThemeMode";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark mode switch",
  description:
    "Dark mode switch component. Including detection of system dark/light mode settings, saving to local storage. Tech: NextJS, TypeScript, TailwindCSS,  HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-center h-dvh bg-white text-black dark:bg-black dark:text-white`}
      >
        <ThemeContextProvider>
          <ThemeSwitch />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
