import { Poppins as FontSans, Montserrat as FontMono } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
})

export const fontPopp = FontSans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-popp",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
