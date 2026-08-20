interface AboutStatProps {
  caption: string
  countTo: number
  label: string
  value: string
}

export function AboutStat({ caption, countTo, label, value }: AboutStatProps) {
  return (
    <article
      className="flex w-[18.75rem] shrink-0 snap-start flex-col items-center gap-3 rounded-lg border border-primary/20 px-6 py-10 text-center md:w-auto md:flex-1 md:rounded-none md:border-y-0 md:border-l-0 md:last:border-r-0"
      data-gsap-reveal
    >
      <strong
        className="font-afacad text-[4rem] leading-none font-semibold text-[#f5f5f5]"
        data-about-count
        data-count-to={countTo}
        data-final-value={value}
      >
        {value}
      </strong>
      <h3 className="font-aldrich text-[0.8125rem] tracking-[0.23em] text-primary">{label}</h3>
      <p className="font-geist-mono text-xs text-ring">{caption}</p>
    </article>
  )
}
