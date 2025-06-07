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

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dmtheme">
      <body
        className={cormorantFont.className}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
