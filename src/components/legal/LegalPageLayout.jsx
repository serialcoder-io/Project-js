export function LegalPageLayout({ title, children }) {
  return <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 leading-7 sm:px-6"><h1 className="font-heading text-3xl font-semibold tracking-tight">{title}</h1>{children}</article>
}
