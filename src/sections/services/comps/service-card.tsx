import type { ReactNode } from 'react'

interface ServiceCardProps {
  description: ReactNode
  number: ReactNode
  title: ReactNode
}

export function ServiceCard({ description, number, title }: ServiceCardProps) {
  return (
    <article
      className="flex min-h-[13.75rem] flex-col items-start gap-4 rounded-lg border border-border bg-neon-bg p-7"
      data-gsap-reveal
    >
      <span className="font-geist-mono text-[0.6875rem] tracking-[0.18em] text-primary">
        {number}
      </span>
      <span className="h-0.5 w-8 bg-primary" />
      <h3 className="font-afacad text-[1.375rem] tracking-[0.025em] text-primary-foreground">
        {title}
      </h3>
      <p className="whitespace-pre-line font-geist-mono text-[0.8125rem] leading-[1.375rem] text-chart-1">
        {description}
      </p>
    </article>
  )
}
