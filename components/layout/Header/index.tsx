'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { cn } from 'cn';
import { ThemeToggle } from '@components/ui/ThemeToggler';
import { Octagon } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 border-b px-4 lg:px-8 ',
        scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm' : 'bg-transparent border-dashed',
      )}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-colors flex items-center"
          >
            <Octagon size={26} />
            <span>.dev</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
