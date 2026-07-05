import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)] px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-farm-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Page not found</h1>
        <p className="text-[var(--color-text-secondary)] mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-farm-600 hover:bg-farm-700 text-white font-medium text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
