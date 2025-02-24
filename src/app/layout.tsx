import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
