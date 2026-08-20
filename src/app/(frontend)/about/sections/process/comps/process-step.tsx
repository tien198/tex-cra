interface ProcessStepProps {
  className?: string
  description: string
  number: string
  title: string
}

export function ProcessStep({ className = '', description, number, title }: ProcessStepProps) {
  return (
    <article
      className={`step relative z-10 flex w-full items-start gap-5 border-b border-primary/15 py-8 sm:gap-8 ${className}`}
      data-pinned-reveal-item
    >
      <span className="shrink-0 font-afacad text-5xl leading-none font-semibold text-primary">
        {number}
      </span>
      <div className="min-w-0 flex-1 pt-2">
        <h3 className="break-words font-aldrich text-xl tracking-[0.14em] text-accent sm:text-2xl sm:tracking-[0.17em]">
          {title}
        </h3>
        <p className="mt-3 font-afacad text-base leading-[1.6875rem] text-ring">{description}</p>
      </div>
    </article>
  )
}
