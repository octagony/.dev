'use client'

import { motion } from 'motion/react'
import { ArrowUp, Code2, Heart } from 'lucide-react'
import { Container } from '@components/layout/Container'
import { cn } from 'cn'
import { Icon } from '@components/ui/Icon'
import { NextIcon } from '@components/ui/Icon/NextIcon'
import { TailwindIcon } from '@components/ui/Icon/TailwindIcon'
import { MotionIcon } from '@components/ui/Icon/MotionIcon'

export function Footer() {
  const currentYear = new Date().getFullYear().toString()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-dashed bg-background/50 backdrop-blur-sm">
      <Container className="py-4 md:py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p className="text-sm font-mono text-muted-foreground">
              © {currentYear} Octagony. All rights reserved.
            </p>
            <p className="text-xs font-mono text-muted-foreground/60 flex items-center gap-1.5">
              Designed & Built with
              <Heart className="h-3 w-3 text-red-500 fill-red-500/20" />
              and lots of
              <Code2 className="h-3 w-3" />
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-muted-foreground/60">
              <Icon as={NextIcon} />
              <Icon as={TailwindIcon} />
              <Icon as={MotionIcon} />
            </div>

            <button
              onClick={scrollToTop}
              className={cn(
                'group inline-flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer',
                'border border-border bg-muted/30 text-muted-foreground',
                'text-xs font-mono uppercase tracking-wider',
                'transition-all duration-300',
                'hover:bg-muted hover:text-foreground hover:border-border/80 hover:-translate-y-0.5',
                'active:translate-y-0 active:scale-95',
              )}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
