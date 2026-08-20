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
      className={`card flex min-h-[13.5rem] w-[18.75rem] shrink-0 snap-start flex-col items-start gap-6 rounded-lg border border-primary/30 bg-primary p-10 text-[#f5f5f5] md:w-auto md:flex-1 ${className}`}
      data-gsap-reveal
    >
      <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
      <h3 className="font-aldrich text-xl tracking-[0.2em]">{title}</h3>
      <p className="font-afacad text-base leading-[1.6875rem]">{description}</p>
    </article>
  )
}
