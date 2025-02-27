import { Inter } from "next/font/google";
import ThemeRender from "./themeRender";
import "./globals.css";
import NavBar from './../Components/organisms/navbar/NavBar';
import Footer from "./../Components/organisms/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRender>
          <NavBar />
          {children}
          <Footer />
        </ThemeRender>
      </body>
    </html>
  );
}
