import Header from "@/components/global/header/header";
import Sidebar from "@/components/global/sidebar/sidebar";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-6 w-screen h-screen`}
      >
        <div className="grid grid-rows-6 h-full w-full">
          <div className="row-span-1 bg-red-500">
            <Header />
          </div>
          <div className="row-span-5 bg-purple-500 h-full">
            <div className="grid grid-cols-3 w-full h-full">
              <div className="col-span-1 bg-pink-500">
                <Sidebar />
              </div>
              <div className="col-span-2 bg-purple-500">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
