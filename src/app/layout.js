import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import {Poppins} from "next/font/google"

const poppins  = Poppins({
  subsets: ['latin'],
  weight:['300','400','500','600', '700', '800']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
