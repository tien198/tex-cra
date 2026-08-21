import type { ReactNode } from 'react'

interface WorkCardProps {
  name: ReactNode
  tag: ReactNode
  thumbnailLabel: ReactNode
}

export function WorkCard({ name, tag, thumbnailLabel }: WorkCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-lg border border-border bg-primary-muted"
      data-gsap-reveal
    >
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-blueprint-grid opacity-35 [background-size:28px_28px]" />
        <span className="relative font-abel text-lg tracking-[0.11em] text-primary transition-transform duration-300 group-hover:scale-105">
          {thumbnailLabel}
        </span>
      </div>
      <div className="flex flex-col items-start gap-2 p-5">
        <p className="font-geist-mono text-[0.6875rem] tracking-[0.16em] text-primary">{tag}</p>
        <h3 className="font-afacad text-xl tracking-[0.025em] text-foreground">{name}</h3>
      </div>
    </article>
  )
}
