import { LayoutDashboard, ListTodo, FolderOpen, Kanban, Calendar } from 'lucide-react'

interface MobileNavProps {
  activeView: string
  onViewChange: (view: "dashboard" | "tasks" | "projects" | "kanban" | "calendar") => void
  className?: string
}

const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'tasks', icon: ListTodo, label: 'Tasks' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'kanban', icon: Kanban, label: 'Kanban' },
  { id: 'calendar', icon: Calendar, label: 'Calendar' },
] as const

export default function MobileNav({ activeView, onViewChange, className = '' }: MobileNavProps) {
  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black z-40 md:hidden ${className}`}>
      <div className="flex items-center justify-around px-2 py-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as any)}
              className={`flex flex-col items-center justify-center gap-1 py-2 px-4 transition-all duration-200 ${
                isActive
                  ? 'text-black'
                  : 'text-gray-500'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className={`relative ${isActive ? 'scale-110' : ''} transition-transform duration-200`}>
                <Icon 
                  className="w-5 h-5" 
                  strokeWidth={isActive ? 3 : 2}
                />
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#fbe857] border border-black" />
                )}
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider ${
                isActive ? 'font-black' : 'font-medium'
              }`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
