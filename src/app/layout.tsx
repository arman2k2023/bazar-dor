import type { Metadata } from "next";
import "./globals.css";

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
            <body>{children}</body>
        </html>
    );
}
