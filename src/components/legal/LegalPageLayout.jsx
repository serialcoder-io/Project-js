export function LegalPageLayout({ title, children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <div className="mt-8 space-y-6 text-base leading-7 text-muted-foreground">{children}</div>
    </div>
  )
}
