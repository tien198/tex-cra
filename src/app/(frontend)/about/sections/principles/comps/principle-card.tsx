import type { LucideIcon } from 'lucide-react'

interface PrincipleCardProps {
  className?: string
  description: string
  icon: LucideIcon
  title: string
}

export function PrincipleCard({
  className = '',
  description,
  icon: Icon,
  title,
}: PrincipleCardProps) {
  return (
    <article
      className={`card flex min-h-[13.5rem] w-full flex-col items-start gap-6 rounded-lg border border-primary/30 bg-primary p-10 text-accent ${className}`}
      data-pinned-reveal-item
    >
      <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
      <h3 className="font-aldrich text-xl tracking-[0.2em]">{title}</h3>
      <p className="font-afacad text-base leading-[1.6875rem]">{description}</p>
    </article>
  )
}
