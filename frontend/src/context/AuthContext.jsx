import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import api from '../services/api'

const AuthContext = createContext(undefined)

const TOKEN_KEY = 'werfarm-token'
const USER_KEY = 'werfarm-user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(USER_KEY)
    return stored ? JSON.parse(stored) : null
  })
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
  const [isLoading, setIsLoading] = useState(false)

  const isAuthenticated = !!token && !!user

  const login = useCallback(async (email, password) => {
    setIsLoading(true)
    try {
      const response = await api.post('/api/auth/login', { email, password })
      const { token: newToken, user: userData } = response.data
      localStorage.setItem(TOKEN_KEY, newToken)
      localStorage.setItem(USER_KEY, JSON.stringify(userData))
      setToken(newToken)
      setUser(userData)
      return userData
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(async (data) => {
    setIsLoading(true)
    try {
      const response = await api.post('/api/auth/register', data)
      const { token: newToken, user: userData } = response.data
      localStorage.setItem(TOKEN_KEY, newToken)
      localStorage.setItem(USER_KEY, JSON.stringify(userData))
      setToken(newToken)
      setUser(userData)
      return userData
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    setToken(null)
    setUser(null)
  }, [])

  const updateProfile = useCallback(async (data) => {
    const response = await api.patch('/api/users/profile', data)
    const updatedUser = response.data
    localStorage.setItem(USER_KEY, JSON.stringify(updatedUser))
    setUser(updatedUser)
    return updatedUser
  }, [])

  // Set auth header on api instance
  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete api.defaults.headers.common['Authorization']
    }
  }, [token])

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, isLoading, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
