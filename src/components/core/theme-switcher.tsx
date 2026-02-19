'use client'

import React, { useState } from 'react'
import { THEMES, useTheme } from '@/context/ThemeContext'
import styles from './theme-switcher.module.css'

export function ThemeSwitcher (): JSX.Element {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const current = THEMES.find(t => t.id === theme) ?? THEMES[0]

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => { setOpen(o => !o) }}
        aria-label="Switch theme"
        title="Switch theme"
      >
        <span>{current.emoji}</span>
        <span className={styles.label}>{current.label}</span>
        <span className={styles.caret}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          {THEMES.map(t => (
            <li
              key={t.id}
              role="option"
              aria-selected={t.id === theme}
              className={`${styles.item} ${t.id === theme ? styles.active : ''}`}
              onClick={() => { setTheme(t.id); setOpen(false) }}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
