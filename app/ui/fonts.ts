import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const mainFont = Montserrat({
  weight: ["300"],
  variable: "--font-monty-regular",
  subsets: ["latin"],
});

export const tableHeaderFont = Montserrat({
  weight: ["600"],
  variable: "--font-monty-regular",
  subsets: ["latin"],
});

export const tableContentFont = Montserrat({
  weight: ["400"],
  variable: "--font-monty-regular",
  subsets: ["latin"],
});
