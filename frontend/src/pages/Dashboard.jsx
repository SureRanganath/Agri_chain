import { useAuth } from '../context/AuthContext'

const weatherMetrics = [
  { label: 'Temperature', value: '--°C', icon: '🌡️' },
  { label: 'Humidity', value: '--%', icon: '💧' },
  { label: 'Wind Speed', value: '-- km/h', icon: '🌬️' },
  { label: 'Air Pressure', value: '-- hPa', icon: '🔵' },
  { label: 'UV Index', value: '--', icon: '☀️' },
  { label: 'Visibility', value: '-- km', icon: '👁️' },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Welcome{user?.name ? `, ${user.name}` : ''}
        </h1>
        <p className="text-[var(--color-text-secondary)] mt-1">Here's your weather overview</p>
      </div>

      {/* Location input prompt */}
      <div className="card p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-farm-50 dark:bg-farm-900/30 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-farm-600 dark:text-farm-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Set Your Location</h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Enable GPS or search for your village, city, or PIN code to get started with weather data and crop recommendations.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 rounded-lg bg-farm-600 hover:bg-farm-700 text-white text-sm font-medium transition-colors">
                Use Current Location
              </button>
              <button className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-bg-tertiary)] transition-colors">
                Search Location
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Current weather metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {weatherMetrics.map((metric) => (
          <div key={metric.label} className="card p-4 text-center hover:border-farm-200 dark:hover:border-farm-800 transition-colors">
            <span className="text-2xl mb-2 block">{metric.icon}</span>
            <p className="text-2xl font-bold text-[var(--color-text-primary)]">{metric.value}</p>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-1">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Sunrise & Sunset + placeholder rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-5">
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Sunrise & Sunset</h3>
          <div className="flex items-center justify-center gap-8 py-4">
            <div className="text-center">
              <p className="text-3xl">🌅</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)] mt-1">--:--</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">Sunrise</p>
            </div>
            <div className="text-center">
              <p className="text-3xl">🌇</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)] mt-1">--:--</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">Sunset</p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Air Quality</h3>
          <div className="flex items-center justify-center py-4">
            <div className="text-center">
              <p className="text-4xl mb-2">🌫️</p>
              <p className="text-lg font-semibold text-[var(--color-text-primary)]">--</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">AQI — No data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
