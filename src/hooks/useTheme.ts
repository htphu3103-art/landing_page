import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'helioring-theme'

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return getSystemTheme()
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')

    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
  }
}

export default useTheme
