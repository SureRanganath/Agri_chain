const forecastDays = Array.from({ length: 5 }, (_, i) => ({
  day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][i],
  date: null,
  tempHigh: '--',
  tempLow: '--',
  humidity: '--',
  windSpeed: '--',
  rainProb: '--',
  icon: '🌤️',
}))

export default function Forecast() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">5-Day Forecast</h1>
        <p className="text-[var(--color-text-secondary)] mt-1">Detailed weather outlook for your location</p>
      </div>

      {/* Location required placeholder */}
      <div className="card p-6 text-center">
        <div className="py-8">
          <span className="text-5xl mb-4 block">📍</span>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Set a location to see the forecast</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-md mx-auto">
            Please set your location on the dashboard to enable 5-day weather forecasting with temperature trends, rain probability, and wind data.
          </p>
        </div>
      </div>

      {/* Forecast cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastDays.map((day) => (
          <div key={day.day} className="card p-5 text-center hover:border-farm-200 dark:hover:border-farm-800 transition-all">
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">{day.day}</p>
            <p className="text-4xl my-4">{day.icon}</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-lg font-bold text-[var(--color-text-primary)]">{day.tempHigh}°</span>
              <span className="text-sm text-[var(--color-text-tertiary)]">{day.tempLow}°</span>
            </div>
            <div className="space-y-1.5 text-xs text-[var(--color-text-tertiary)]">
              <p>💧 {day.humidity}% Humidity</p>
              <p>🌬️ {day.windSpeed} km/h</p>
              <p>🌧️ {day.rainProb}% Rain</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="card p-6">
        <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-4">Temperature Trend</h3>
        <div className="h-48 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl mb-2 block">📊</span>
            <p className="text-sm text-[var(--color-text-tertiary)]">Chart will render here with Recharts</p>
          </div>
        </div>
      </div>
    </div>
  )
}
