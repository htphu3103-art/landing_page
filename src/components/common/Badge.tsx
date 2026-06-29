import { cn } from '@/utils/cn'

interface BadgeProps {
  label: string
  className?: string
}

const Badge = ({ label, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-3 py-1 text-xs font-medium text-[var(--color-gold)]',
        className,
      )}
    >
      {label}
    </span>
  )
}

export default Badge
