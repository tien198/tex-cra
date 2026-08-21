import type { ReactNode } from 'react'

interface StatItemProps {
  label: ReactNode
  value: ReactNode
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 px-4 py-7 text-center lg:px-10 lg:py-0"
      data-gsap-reveal
    >
      <div className="font-aldrich text-[clamp(2rem,3.9vw,3.5rem)] font-normal tracking-[0.02em] text-primary-foreground drop-shadow-neon-metric">
        {value}
      </div>
      <span className="font-geist-mono text-[0.6875rem] tracking-[0.16em] text-chart-1 sm:text-xs">
        {label}
      </span>
    </div>
  )
}
