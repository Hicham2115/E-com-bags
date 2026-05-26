import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import { LenisProvider } from "@/components/lenis-provider";
import LoadingScreen from "@/components/loading-screen";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "MAISON ORIA — Handcrafted Luxury",
  description:
    "Handcrafted luxury handbags. Full-grain vegetable-tanned leather, precision brass hardware, lifetime repairs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden antialiased">
        <LenisProvider>
          <CartProvider>
            <LoadingScreen />
            {children}
          </CartProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
