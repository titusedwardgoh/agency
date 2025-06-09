import { Cormorant, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cormorantFont = Cormorant({
  display: "swap",
  subsets: ["latin"],
});

export const roboto = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
});


export const metadata = {
  title: "Digital Marketing",
  description: "Change description",
  icons: {
    icon: "/favicon3.png",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dmtheme" className="overflow-x-hidden">
      <body
        className={`${cormorantFont.className} overflow-x-hidden`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
