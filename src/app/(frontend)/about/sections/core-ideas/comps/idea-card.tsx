interface IdeaCardProps {
  description: string
  motionSpec?: string
  number: string
  title: string
}

export function IdeaCard({ description, motionSpec, number, title }: IdeaCardProps) {
  return (
    <article
      className={`blueprint-panel flex min-h-[14rem] flex-col items-start gap-4 border border-primary/15 p-8`}
      data-gsap-reveal
    >
      <span className="font-geist-mono text-sm tracking-[0.285em] text-primary">{number}</span>
      <h3 className="font-afacad text-[1.75rem] leading-tight font-semibold tracking-[0.107em] text-[#f5f5f5]">
        {title}
      </h3>
      <p className="font-geist-mono text-[0.9375rem] leading-[1.625rem] text-ring">{description}</p>
      {motionSpec ? (
        <p className="mt-auto break-words font-geist-mono text-[0.625rem] leading-4 text-primary">
          {motionSpec}
        </p>
      ) : null}
    </article>
  )
}
