import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { ModeToggle } from "@/components/mode-toggler";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import { Carousel } from "@/components/carousel";
import Image from "next/image";

const font = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Aljefri",
  description:
    "Fullstack Web Developer. Passionate about startups, open source, and crafting captivating digital experiences.",
  keywords: [
    "Reactjs Developer",
    "Frontend Developer",
    "Tech Lead",
    "Nextjs Developer",
    "Typescript Developer",
    "Open source Developer",
  ],
};

const social = [
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mhmdaljefri/",
  },
  {
    icon: "github",
    link: "https://github.com/mhmdaljefri/",
  },
  {
    icon: "x",
    link: "https://twitter.com/mhmdaljefri",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <div className="container flex items-center justify-between py-6">
              <nav>
                <Link
                  title="Mohammed Aljefri"
                  href="/"
                  className="flex gap-2 items-center"
                >
                  <svg
                    className="border-4 border-black dark:border-white rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width="40"
                    height="40"
                  >
                    <rect x="0" y="0" width="20" height="40" fill="white" />
                    <rect x="20" y="0" width="20" height="40" fill="black" />
                  </svg>
                  <Text black>MHMDAljefri</Text>
                </Link>
              </nav>
              <ModeToggle />
            </div>
          </header>
          {children}

          <Carousel />

          <footer className="pt-20 pb-4">
            <div className="container">
              <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-4">
                <div className="flex items-center  gap-4">
                  <svg
                    className="border-4 border-black min-w-10 dark:border-white rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width="40"
                    height="40"
                  >
                    <rect x="0" y="0" width="20" height="40" fill="white" />
                    <rect x="20" y="0" width="20" height="40" fill="black" />
                  </svg>
                  <Text size={0}>
                    All rights reserved © Mohammed Aljefri{" "}
                    {new Date().getFullYear()}
                  </Text>
                </div>
                <div className="flex gap-4 items-center">
                  {social.map(({ icon, link }) => (
                    <a
                      key={icon}
                      href={link}
                      className="relative block dark:invert w-6 md:w-8 aspect-square"
                    >
                      <Image fill src={`/logos/${icon}.png`} alt={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
