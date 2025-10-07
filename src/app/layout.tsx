import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pegasus WhatsApp Tracker Basic – Educational Edition",
  description: "Platform edukasi siber untuk mensimulasikan cara kerja spyware tingkat nasional seperti Pegasus — tanpa melakukan eksploitasi nyata atau melanggar privasi",
  keywords: ["Pegasus", "WhatsApp", "Tracker", "Educational", "Cybersecurity", "Spyware", "Simulation"],
  authors: [{ name: "Educational Cybersecurity Team" }],
  openGraph: {
    title: "Pegasus WhatsApp Tracker Basic – Educational Edition",
    description: "Platform edukasi siber untuk memahami ancaman digital modern melalui simulasi interaktif",
    url: "https://example.com",
    siteName: "Pegasus Educational Tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pegasus WhatsApp Tracker Basic – Educational Edition",
    description: "Platform edukasi siber untuk memahami ancaman digital modern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
