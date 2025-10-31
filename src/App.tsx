
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navigation from './components/Navigation'
import TaskManagementApp from './components/TaskManagementApp'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import KanbanBoard from './components/KanbanBoard'
import ProjectGrid from './components/ProjectGrid'
import ErrorReporter from './components/ErrorReporter'
import CommandPalette from './components/CommandPalette'
import VisualEditsMessenger from './visual-edits/VisualEditsMessenger'
import { toast } from './lib/toast'

function App() {
  const handleCreateTask = () => {
    // This will be handled by the individual views
    toast.info('Navigate to a view to create a task')
  }

  const handleCreateProject = () => {
    // This will be handled by the individual views  
    toast.info('Navigate to Projects to create a new project')
  }

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <ErrorReporter />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#121212',
              color: '#e0e0e0',
              border: '2px solid #fbe857',
              borderRadius: '0',
              padding: '16px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
            },
          }}
          richColors
        />
        <CommandPalette 
          onCreateTask={handleCreateTask}
          onCreateProject={handleCreateProject}
        />
        <Navigation />
        <Routes>
          <Route path="/" element={<TaskManagementApp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/projects" element={<ProjectGrid />} />
        </Routes>
        <VisualEditsMessenger />
      </div>
    </Router>
  )
}

export default App
