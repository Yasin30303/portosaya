import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { NeverEnoughBackground } from "@/components/layout/NeverEnoughBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

const departureMono = localFont({
  src: "../node_modules/@proj-airi/font-departure-mono/dist/files/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  display: "swap",
});

const commitMono = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/commit-mono/files/commit-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/commit-mono/files/commit-mono-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-commit-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuainay.vercel.app"),
  title: {
    default: `${profileData.name} | ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.headline,
  keywords: [
    "Muhammad Nuaina Yasin",
    "Full-Stack Developer",
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
    url: "https://nuainay.vercel.app",
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
    canonical: "https://nuainay.vercel.app",
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
      className={`${departureMono.variable} ${commitMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-white relative">
        {/* Skip to Content for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-accent focus:text-white focus:font-mono focus:text-xs focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content / Lewati ke konten
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <NeverEnoughBackground />
            <Navbar />
            <main id="main-content" className="flex-1 relative z-10">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
