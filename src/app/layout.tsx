import type { Metadata } from "next";
import "./globals.css";


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToasterProvider from "@/components/ui/ToasterProvider";

export const metadata: Metadata = {
    title: "বাজার দর",
    description: "নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="bn">
            <body className="flex min-h-screen flex-col">
                <Navbar />

                <ToasterProvider />

                <div className="flex flex-1 flex-col">
                    {children}
                </div>

                <Footer />
            </body>
        </html>
    );
}
