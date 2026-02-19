'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'cyberpunk' | 'light' | 'forest' | 'terminal'

export const THEMES: Array<{ id: Theme, label: string, emoji: string }> = [
  { id: 'dark', label: 'Dark', emoji: '🌑' },
  { id: 'cyberpunk', label: 'Cyberpunk', emoji: '🟣' },
  { id: 'light', label: 'Light', emoji: '☀️' },
  { id: 'forest', label: 'Forest', emoji: '🌿' },
  { id: 'terminal', label: 'Terminal', emoji: '💻' }
]

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {}
})

export function ThemeProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme | null) ?? 'dark'
    setThemeState(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const setTheme = (t: Theme): void => {
    setThemeState(t)
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('theme', t)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme (): ThemeContextValue {
  return useContext(ThemeContext)
}
