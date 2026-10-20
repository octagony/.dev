'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { cn } from 'cn'

export default function NotFound() {
  return (
    <div className="flex min-h-[92vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="flex flex-col items-center gap-8"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-7xl md:text-9xl font-mono font-bold tracking-tighter text-muted-foreground select-none"
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="space-y-2"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Page not found
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is
              temporarily unavailable.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Link
            href="/"
            className={cn(
              'group inline-flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-6 py-3 text-sm font-medium text-foreground',
              'transition-all duration-300',
              'hover:bg-muted hover:border-border/80 hover:scale-[1.02]',
              'active:scale-[0.98]',
            )}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
