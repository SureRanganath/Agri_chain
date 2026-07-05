export default function Alerts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Weather Alerts</h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          Real-time weather warnings and notifications for your locations
        </p>
      </div>

      {/* Alert status */}
      <div className="card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-farm-100 dark:bg-farm-900/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-farm-600 dark:text-farm-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">All Clear</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              No active weather alerts for your locations. We'll notify you immediately when conditions change.
            </p>
          </div>
        </div>
      </div>

      {/* Alert types reference */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Alert Types</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { type: 'Heavy Rain', icon: '🌧️', severity: 'Warning', color: 'text-yellow-600 dark:text-yellow-400' },
            { type: 'Storm', icon: '⛈️', severity: 'Critical', color: 'text-red-600 dark:text-red-400' },
            { type: 'Cyclone', icon: '🌀', severity: 'Critical', color: 'text-red-600 dark:text-red-400' },
            { type: 'Heat Wave', icon: '🔥', severity: 'Warning', color: 'text-orange-600 dark:text-orange-400' },
            { type: 'Cold Wave', icon: '🥶', severity: 'Warning', color: 'text-blue-600 dark:text-blue-400' },
            { type: 'Strong Winds', icon: '💨', severity: 'Warning', color: 'text-yellow-600 dark:text-yellow-400' },
          ].map((alert) => (
            <div
              key={alert.type}
              className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)]"
            >
              <span className="text-2xl">{alert.icon}</span>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{alert.type}</p>
                <p className={`text-xs font-medium ${alert.color}`}>{alert.severity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification channels */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Notification Channels</h3>
        <div className="space-y-4">
          {[
            { channel: 'Dashboard Alerts', icon: '🖥️', status: 'Active', desc: 'Real-time alerts within the app' },
            { channel: 'Browser Notifications', icon: '🔔', status: 'Setup required', desc: 'Push notifications via your browser' },
            { channel: 'Email Notifications', icon: '📧', status: 'Coming soon', desc: 'Receive alerts via email' },
            { channel: 'SMS / WhatsApp', icon: '📱', status: 'Coming soon', desc: 'Instant alerts on your phone' },
          ].map((item) => (
            <div
              key={item.channel}
              className="flex items-center gap-4 p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)]"
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.channel}</p>
                <p className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                item.status === 'Active'
                  ? 'bg-farm-100 dark:bg-farm-900/30 text-farm-700 dark:text-farm-400'
                  : item.status === 'Setup required'
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
