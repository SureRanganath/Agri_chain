export default function CropRecommendations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Crop Recommendations</h1>
        <p className="text-[var(--color-text-secondary)] mt-1">
          Smart crop suggestions based on your location and weather conditions
        </p>
      </div>

      {/* Location prompt */}
      <div className="card p-6 text-center">
        <div className="py-8">
          <span className="text-5xl mb-4 block">🌱</span>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            No location set yet
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-md mx-auto">
            Set your location on the dashboard to receive personalized crop recommendations
            based on your local climate, soil conditions, and seasonal patterns.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '1',
              title: 'Analyze Climate',
              desc: 'We analyze temperature, rainfall, humidity, and seasonal data for your location.',
              icon: '🌡️',
            },
            {
              step: '2',
              title: 'Match Crops',
              desc: 'Our engine matches optimal crops based on growing requirements and local conditions.',
              icon: '🧬',
            },
            {
              step: '3',
              title: 'Get Recommendations',
              desc: 'Receive ranked crop suggestions with confidence scores and detailed growing guides.',
              icon: '📋',
            },
          ].map((item) => (
            <div key={item.step} className="text-center p-4">
              <span className="text-4xl mb-3 block">{item.icon}</span>
              <div className="w-8 h-8 rounded-full bg-farm-100 dark:bg-farm-900/30 text-farm-700 dark:text-farm-400 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                {item.step}
              </div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">{item.title}</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
