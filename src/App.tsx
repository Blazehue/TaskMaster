
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import { AnimatePresence, motion } from 'motion/react'
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

function AnimatedRoutes() {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 20,
    },
  }

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.3,
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TaskManagementApp />
            </motion.div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Dashboard />
            </motion.div>
          }
        />
        <Route
          path="/calendar"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Calendar />
            </motion.div>
          }
        />
        <Route
          path="/kanban"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <KanbanBoard />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ProjectGrid />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

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
        <AnimatedRoutes />
        <VisualEditsMessenger />
      </div>
    </Router>
  )
}

export default App
