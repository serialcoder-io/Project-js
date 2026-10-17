import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">Page not found</h1>
      <Link className="mt-4 inline-block text-primary hover:underline" to="/">Return home</Link>
    </div>
  )
}
