import { Moon, Sun } from 'lucide-react'

import { cn } from '@/utils/cn'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
  className?: string
}

const ThemeToggle = ({ isDark, onToggle, className }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'rounded-full p-2 transition-colors duration-300',
        'border border-white/10 hover:border-[var(--color-gold)]/50',
        'text-[var(--color-muted)] hover:text-[var(--color-gold)]',
        className,
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
