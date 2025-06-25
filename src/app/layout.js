
import { Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";



export const metadata = {
  title: "Arif Basha",
  description: "My personal site",
};
const michroma = Michroma({
  subsets: ['latin'],
  weight: '400', // Michroma only supports 400
  variable: '--font-michroma',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-gsap="not-found" className={michroma.variable} >
      <body className="relative  max-w-screen mx-auto flex ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
