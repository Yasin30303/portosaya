import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Preloader } from "@/components/ui/Preloader";
import { NeverEnoughBackground } from "@/components/layout/NeverEnoughBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-yasin.dev"),
  title: {
    default: `${profileData.name} | ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.headline,
  keywords: [
    "Muhammad Nuaina Yasin",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Computer Vision",
    "Deep Learning",
    "PyTorch",
    "Next.js",
    "TypeScript",
    "Bandung",
    "Software Engineer",
  ],
  authors: [{ name: profileData.name, url: profileData.github }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://muhammad-yasin.dev",
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.headline,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/images/cmiygl-scenery.webp",
        width: 1376,
        height: 768,
        alt: `${profileData.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.role}`,
    description: profileData.headline,
    images: ["/images/cmiygl-scenery.webp"],
  },
  alternates: {
    canonical: "https://muhammad-yasin.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-white relative">
        <ThemeProvider>
          <LanguageProvider>
            <NeverEnoughBackground />
            <Preloader />
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
