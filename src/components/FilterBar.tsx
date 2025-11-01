import React from 'react'
import { Search, X, Filter, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export interface FilterOptions {
  searchQuery: string
  status: string
  priority: string
  sortBy: string
  sortOrder: 'asc' | 'desc'
}

interface FilterBarProps {
  filters: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
  showStatus?: boolean
  showPriority?: boolean
  showSort?: boolean
  placeholder?: string
  className?: string
}

export default function FilterBar({
  filters,
  onFilterChange,
  showStatus = true,
  showPriority = true,
  showSort = true,
  placeholder = "Search...",
  className = "",
}: FilterBarProps) {
  const activeFilterCount = [
    filters.searchQuery,
    filters.status !== 'all',
    filters.priority !== 'all',
  ].filter(Boolean).length

  const handleClearFilters = () => {
    onFilterChange({
      searchQuery: '',
      status: 'all',
      priority: 'all',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    })
  }

  const hasActiveFilters = activeFilterCount > 0

  return (
    <div className={`bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      <div className="flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            type="text"
            placeholder={placeholder}
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
            className="pl-10 pr-10 border-2 border-black bg-white font-mono uppercase tracking-wide text-sm h-12"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-black hover:text-white p-1 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="font-mono uppercase text-xs font-bold tracking-wider">FILTERS:</span>
          </div>

          {/* Status Filter */}
          {showStatus && (
            <Select
              value={filters.status}
              onValueChange={(value) => onFilterChange({ ...filters, status: value })}
            >
              <SelectTrigger className="w-[140px] border-2 border-black bg-white font-mono uppercase text-xs h-10">
                <SelectValue placeholder="STATUS" />
              </SelectTrigger>
              <SelectContent className="border-2 border-black bg-white font-mono">
                <SelectItem value="all" className="uppercase text-xs">ALL STATUS</SelectItem>
                <SelectItem value="todo" className="uppercase text-xs">TO-DO</SelectItem>
                <SelectItem value="inprogress" className="uppercase text-xs">IN PROGRESS</SelectItem>
                <SelectItem value="complete" className="uppercase text-xs">COMPLETED</SelectItem>
              </SelectContent>
            </Select>
          )}

          {/* Priority Filter */}
          {showPriority && (
            <Select
              value={filters.priority}
              onValueChange={(value) => onFilterChange({ ...filters, priority: value })}
            >
              <SelectTrigger className="w-[140px] border-2 border-black bg-white font-mono uppercase text-xs h-10">
                <SelectValue placeholder="PRIORITY" />
              </SelectTrigger>
              <SelectContent className="border-2 border-black bg-white font-mono">
                <SelectItem value="all" className="uppercase text-xs">ALL PRIORITY</SelectItem>
                <SelectItem value="low" className="uppercase text-xs">LOW</SelectItem>
                <SelectItem value="medium" className="uppercase text-xs">MEDIUM</SelectItem>
                <SelectItem value="high" className="uppercase text-xs">HIGH</SelectItem>
              </SelectContent>
            </Select>
          )}

          {/* Sort By */}
          {showSort && (
            <>
              <div className="flex items-center gap-2 ml-4">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="font-mono uppercase text-xs font-bold tracking-wider">SORT BY:</span>
              </div>
              <Select
                value={filters.sortBy}
                onValueChange={(value) => onFilterChange({ ...filters, sortBy: value })}
              >
                <SelectTrigger className="w-[140px] border-2 border-black bg-white font-mono uppercase text-xs h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-2 border-black bg-white font-mono">
                  <SelectItem value="createdAt" className="uppercase text-xs">DATE CREATED</SelectItem>
                  <SelectItem value="title" className="uppercase text-xs">TITLE</SelectItem>
                  <SelectItem value="priority" className="uppercase text-xs">PRIORITY</SelectItem>
                  <SelectItem value="dueDate" className="uppercase text-xs">DUE DATE</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => onFilterChange({ ...filters, sortOrder: filters.sortOrder === 'asc' ? 'desc' : 'asc' })}
                className="border-2 border-black bg-white hover:bg-black hover:text-white font-mono uppercase text-xs h-10 px-3"
              >
                {filters.sortOrder === 'asc' ? '↑ ASC' : '↓ DESC'}
              </Button>
            </>
          )}

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="ml-auto border-2 border-black bg-[#fbe857] hover:bg-black hover:text-white font-mono uppercase text-xs h-10 px-4 font-bold"
            >
              <X className="w-4 h-4 mr-1" />
              CLEAR ALL
            </Button>
          )}

          {/* Active Filter Count Badge */}
          {hasActiveFilters && (
            <Badge className="bg-black text-white border-0 font-mono text-xs h-6 px-2">
              {activeFilterCount} ACTIVE
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
