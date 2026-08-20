interface TexcraLogoProps {
  className?: string
}

export function TexcraLogo({ className = '' }: TexcraLogoProps) {
  return (
    <span
      aria-label="TexCra"
      className={`inline-flex items-center text-xl font-semibold tracking-[0.25em] ${className}`}
    >
      <span className="font-afacad text-muted">Tex</span>
      <span className="font-advent text-primary">Cra</span>
    </span>
  )
}
