import { cn } from '@/utils/cn'

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        variant === 'primary' &&
          'bg-[var(--color-gold)] text-black hover:brightness-110',
        variant === 'outline' &&
          'border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black',
        variant === 'ghost' &&
          'text-[var(--color-muted)] hover:text-[var(--color-text)]',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {label}
    </button>
  )
}

export default Button
