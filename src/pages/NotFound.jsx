import { Link } from 'react-router'

export default function NotFound() {
  return <div className="mx-auto max-w-6xl px-4 py-16"><h1 className="text-3xl font-semibold">Page not found</h1><Link to="/" className="mt-5 inline-block text-primary underline">Back to home</Link></div>
}
