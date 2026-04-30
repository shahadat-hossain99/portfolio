import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Shahadat Hossain | Portfolio",
  description: "Full-stack developer dedicated to building responsive, high-performance web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme') || 'shahadat';
                document.documentElement.setAttribute('data-theme', savedTheme);
                if (savedTheme === 'shahadat-dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })()
          `
        }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
