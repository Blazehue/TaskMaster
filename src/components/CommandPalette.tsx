import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  LayoutDashboard,
  FolderOpen,
  Calendar,
  Columns3,
  Plus,
  Search,
  Keyboard,
} from 'lucide-react'

interface CommandPaletteProps {
  onCreateTask?: () => void
  onCreateProject?: () => void
}

export default function CommandPalette({ onCreateTask, onCreateProject }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // Toggle command palette with Cmd/Ctrl + K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleNavigate = useCallback((path: string) => {
    navigate(path)
    setOpen(false)
  }, [navigate])

  const handleCreateTask = useCallback(() => {
    onCreateTask?.()
    setOpen(false)
  }, [onCreateTask])

  const handleCreateProject = useCallback(() => {
    onCreateProject?.()
    setOpen(false)
  }, [onCreateProject])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => handleNavigate('/dashboard')}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem onSelect={() => handleNavigate('/projects')}>
            <FolderOpen className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => handleNavigate('/kanban')}>
            <Columns3 className="mr-2 h-4 w-4" />
            <span>Kanban Board</span>
          </CommandItem>
          <CommandItem onSelect={() => handleNavigate('/calendar')}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem onSelect={handleCreateTask}>
            <Plus className="mr-2 h-4 w-4" />
            <span>Create New Task</span>
            <span className="ml-auto text-xs text-muted-foreground">N</span>
          </CommandItem>
          <CommandItem onSelect={handleCreateProject}>
            <Plus className="mr-2 h-4 w-4" />
            <span>Create New Project</span>
            <span className="ml-auto text-xs text-muted-foreground">Shift+N</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Help">
          <CommandItem onSelect={() => setOpen(false)}>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard Shortcuts</span>
            <span className="ml-auto text-xs text-muted-foreground">?</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <Search className="mr-2 h-4 w-4" />
            <span>Search Tasks</span>
            <span className="ml-auto text-xs text-muted-foreground">/</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
