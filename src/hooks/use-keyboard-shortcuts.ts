import { useEffect } from 'react'

interface KeyboardShortcut {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  meta?: boolean
  callback: () => void
  description?: string
}

interface UseKeyboardShortcutsOptions {
  enabled?: boolean
}

export function useKeyboardShortcuts(
  shortcuts: KeyboardShortcut[],
  options: UseKeyboardShortcutsOptions = {}
) {
  const { enabled = true } = options

  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore shortcuts when typing in inputs, textareas, or contenteditable elements
      const target = event.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.contentEditable === 'true'
      ) {
        return
      }

      for (const shortcut of shortcuts) {
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase()
        const ctrlMatches = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey
        const shiftMatches = shortcut.shift ? event.shiftKey : !event.shiftKey
        const altMatches = shortcut.alt ? event.altKey : !event.altKey
        const metaMatches = shortcut.meta ? event.metaKey : !event.metaKey

        if (keyMatches && ctrlMatches && shiftMatches && altMatches && metaMatches) {
          event.preventDefault()
          shortcut.callback()
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [shortcuts, enabled])
}

// Pre-defined shortcut combinations
export const SHORTCUTS = {
  // Navigation
  DASHBOARD: { key: 'd', ctrl: true, description: 'Go to Dashboard' },
  TASKS: { key: 't', ctrl: true, description: 'Go to Tasks' },
  PROJECTS: { key: 'p', ctrl: true, description: 'Go to Projects' },
  KANBAN: { key: 'k', ctrl: true, description: 'Go to Kanban' },
  CALENDAR: { key: 'c', ctrl: true, description: 'Go to Calendar' },
  
  // Actions
  NEW_TASK: { key: 'n', ctrl: true, description: 'Create New Task' },
  SEARCH: { key: '/', description: 'Focus Search' },
  COMMAND_PALETTE: { key: 'k', ctrl: true, shift: true, description: 'Open Command Palette' },
  
  // General
  HELP: { key: '?', shift: true, description: 'Show Keyboard Shortcuts' },
  ESCAPE: { key: 'Escape', description: 'Close Modal/Cancel' },
} as const
