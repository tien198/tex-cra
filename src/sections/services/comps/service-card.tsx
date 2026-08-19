interface ServiceCardProps {
  description: string
  number: string
  title: string
}

export function ServiceCard({ description, number, title }: ServiceCardProps) {
  return (
    <article className="flex min-h-[13.75rem] flex-col items-start gap-4 rounded-lg border border-border bg-neon-bg p-7">
      <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-primary">{number}</span>
      <span className="h-0.5 w-8 bg-primary" />
      <h3 className="font-display text-[1.375rem] tracking-[0.025em] text-primary-foreground">
        {title}
      </h3>
      <p className="whitespace-pre-line font-mono text-[0.8125rem] leading-[1.375rem] text-chart-1">
        {description}
      </p>
    </article>
  )
}
