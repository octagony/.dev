import type { Metadata } from 'next';
import { Caveat, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@lib/utils';
import { ThemeProvider } from 'next-themes';
import { Header } from '@components/layout/Header';
import { Footer } from "@components/layout/Footer";

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
});

const caveatMono = Caveat({
  variable: '--font-caveat-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Octagony Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased selection:bg-zinc-800 selection:text-zinc-100',
          jetBrainsMono.variable,
          caveatMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
