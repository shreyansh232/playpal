import { Poppins, Open_Sans, Barlow, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";


const inter = Poppins({ weight:'500' , subsets: ["latin"] });

export const metadata = {
  title: "PlayPal",
  description: "Discover new games and make new friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-white bg-gray-900">
      <body className={`${inter.className}`}>
        {/* <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 items-center" style={{ background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' }}></div> */}
        <Provider>
          <Header />
            {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}