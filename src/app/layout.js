import { Audiowide } from "next/font/google";
import "./globals.css";
import AnimatedDots from "./components/AnimatedDots";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
});

export const metadata = {
  title: "Manuel F. Venegas | Frontend Developer Portfolio",
  description:
    "Portfolio of Manuel F. Venegas, a passionate frontend developer specializing in modern web experiences with React, Next.js, and more.",
  keywords: [
    "Manuel F. Venegas",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Manuel F. Venegas" }],
  creator: "Manuel F. Venegas",
  metadataBase: new URL("https://my-portfolio-hazel-kappa-55.vercel.app/"),
  openGraph: {
    title: "Manuel Venegas | Portfolio",
    description: "Frontend developer portfolio for Manuel Venegas.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Venegas | Portfolio",
    description: "Frontend developer portfolio for Manuel Venegas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`
          ${audiowide.variable} antialiased
          min-h-screen
          bg-background
          overflow-x-hidden
        `}
        style={{
          boxSizing: "border-box",
        }}
      >
        <AnimatedDots />
        <div className="w-full min-h-screen">{children}</div>
      </body>
    </html>
  );
}
