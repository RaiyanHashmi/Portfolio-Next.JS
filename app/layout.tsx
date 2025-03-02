import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raiyan's Portfolio",
  description: "A showcase of my expertise as a Full Stack Developer, specializing in modern JavaScript frameworks and technologies. From intuitive front-end interfaces built with React and Tailwind CSS to robust back-end systems powered by Node.js and databases like MongoDB and MySQL, this portfolio highlights my ability to create scalable, high-performance web applications. With a focus on clean code, minimalistic design, and seamless user experience, I bring ideas to life with efficiency and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/#" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
