import { useState, useMemo } from 'react'
import { Plus, Search, ListTodo } from 'lucide-react'
import FilterBar, { FilterOptions } from './FilterBar'
import TaskCard from './TaskCard'
import EmptyState from './EmptyState'
import { TaskCardSkeleton } from './LoadingSkeleton'
import { Button } from './ui/button'
import { Task } from '@/types'

interface TasksViewProps {
  tasks?: Task[]
  onTaskClick?: (task: Task) => void
  onAddTask?: () => void
  isLoading?: boolean
  className?: string
}

export default function TasksView({ 
  tasks = [],
  onTaskClick,
  onAddTask,
  isLoading = false,
  className = ""
}: TasksViewProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    status: 'all',
    priority: 'all',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  })

  // Filter and sort tasks
  const filteredTasks = useMemo(() => {
    let result = [...tasks]

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      result = result.filter(task => 
        task.title.toLowerCase().includes(query) ||
        task.description?.toLowerCase().includes(query)
      )
    }

    // Status filter
    if (filters.status !== 'all') {
      result = result.filter(task => task.status === filters.status)
    }

    // Priority filter
    if (filters.priority !== 'all') {
      result = result.filter(task => task.priority === filters.priority)
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0

      switch (filters.sortBy) {
        case 'title':
          comparison = a.title.localeCompare(b.title)
          break
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          comparison = priorityOrder[b.priority] - priorityOrder[a.priority]
          break
        case 'dueDate':
          comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
          break
        case 'createdAt':
        default:
          // Assuming tasks are already sorted by creation date, or use task.id
          comparison = a.id.localeCompare(b.id)
          break
      }

      return filters.sortOrder === 'asc' ? comparison : -comparison
    })

    return result
  }, [tasks, filters])

  if (isLoading) {
    return (
      <div className={`p-6 space-y-6 ${className}`}>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black font-mono tracking-wider uppercase">TASKS</h1>
          <Button
            disabled
            className="border-2 border-black bg-[#fbe857] font-mono uppercase text-sm font-black h-12 px-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            NEW TASK
          </Button>
        </div>
        
        <FilterBar 
          filters={filters}
          onFilterChange={setFilters}
          placeholder="SEARCH TASKS..."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <TaskCardSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`p-6 space-y-6 min-h-screen bg-[#e0e0e0] ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black font-mono tracking-wider uppercase text-black">
            TASKS
          </h1>
          <p className="text-sm font-mono text-gray-600 mt-1 uppercase tracking-wide">
            {filteredTasks.length} TASK{filteredTasks.length !== 1 ? 'S' : ''} FOUND
          </p>
        </div>
        <Button
          onClick={onAddTask}
          className="border-2 border-black bg-[#fbe857] hover:bg-black hover:text-white font-mono uppercase text-sm font-black h-12 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <Plus className="w-5 h-5 mr-2" />
          NEW TASK
        </Button>
      </div>

      {/* Filter Bar */}
      <FilterBar 
        filters={filters}
        onFilterChange={setFilters}
        placeholder="SEARCH TASKS..."
      />

      {/* Tasks Grid */}
      {filteredTasks.length === 0 ? (
        <EmptyState
          icon={filters.searchQuery || filters.status !== 'all' || filters.priority !== 'all' ? Search : ListTodo}
          title={
            filters.searchQuery || filters.status !== 'all' || filters.priority !== 'all'
              ? "NO TASKS FOUND"
              : "NO TASKS YET"
          }
          description={
            filters.searchQuery || filters.status !== 'all' || filters.priority !== 'all'
              ? "Try adjusting your filters"
              : "Create your first task to get started"
          }
          actionLabel={
            filters.searchQuery || filters.status !== 'all' || filters.priority !== 'all'
              ? "CLEAR FILTERS"
              : "CREATE TASK"
          }
          onAction={
            filters.searchQuery || filters.status !== 'all' || filters.priority !== 'all'
              ? () => setFilters({
                  searchQuery: '',
                  status: 'all',
                  priority: 'all',
                  sortBy: 'createdAt',
                  sortOrder: 'desc',
                })
              : onAddTask
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map(task => (
            <div
              key={task.id}
              onClick={() => onTaskClick?.(task)}
              className="cursor-pointer"
            >
              <TaskCard
                task={{
                  ...task,
                  dueDate: task.dueDate ? new Date(task.dueDate) : undefined
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
