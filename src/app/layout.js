import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Comic_Neue } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Comic_Neue({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "HridoyHost",
  description: "Unlimited spcae for your Memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#ffff00" showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
