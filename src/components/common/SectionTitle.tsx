import { cn } from '@/utils/cn'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

const SectionTitle = ({
  label,
  title,
  subtitle,
  center = true,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {label && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--color-muted)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
