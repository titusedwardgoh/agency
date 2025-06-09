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
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon3.png",
  }
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
