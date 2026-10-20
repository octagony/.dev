'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from 'cn'
import { IconSwap, IconSwapItem } from '@components/ui/icon-swap'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  if (!isMounted) {
    return <div className="flex h-8 w-24" />
  }

  const handleSetTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    document.startViewTransition(() => setTheme(newTheme))
  }

  return (
    <button
      onClick={handleSetTheme}
      className={cn(
        'relative inline-flex h-8 w-8 items-center justify-center rounded-lg',
        'border border-border bg-background/50 text-foreground',
        'transition-all hover:border-border/80 hover:scale-105',
        'active:scale-95',
        'cursor-pointer',
      )}
      aria-label="Toggle theme"
    >
      <IconSwap>
        <IconSwapItem key={theme === 'dark' ? 'dark' : 'light'}>
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </IconSwapItem>
      </IconSwap>
    </button>
  )
}
