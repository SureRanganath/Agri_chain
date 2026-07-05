import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    // Will connect to API later
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Profile Settings</h1>
        <p className="text-[var(--color-text-secondary)] mt-1">Manage your account and preferences</p>
      </div>

      {/* Account info */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Account Information</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label htmlFor="profile-name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
              Name
            </label>
            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-farm-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ''}
              disabled
              className="w-full px-3 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] cursor-not-allowed"
            />
            <p className="text-xs text-[var(--color-text-tertiary)] mt-1">Email cannot be changed</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-farm-600 hover:bg-farm-700 text-white text-sm font-medium transition-colors"
            >
              Save Changes
            </button>
            {saved && (
              <span className="text-sm text-farm-600 dark:text-farm-400 font-medium">
                ✓ Changes saved
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Preferences */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Preferences</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-3 rounded-lg border border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-bg-tertiary)] transition-colors">
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Temperature Unit</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">Choose between Celsius and Fahrenheit</p>
            </div>
            <select className="text-sm bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-farm-500">
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </select>
          </label>

          <label className="flex items-center justify-between p-3 rounded-lg border border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-bg-tertiary)] transition-colors">
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Browser Notifications</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">Receive weather alerts via browser</p>
            </div>
            <input type="checkbox" className="w-4 h-4 rounded border-[var(--color-border)] text-farm-600 focus:ring-farm-500" />
          </label>
        </div>
      </div>

      {/* Danger zone */}
      <div className="card p-6 border-red-200 dark:border-red-900">
        <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">Danger Zone</h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <div className="flex gap-3">
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            Sign Out
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
