import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, X, CheckSquare, FolderPlus } from 'lucide-react'

interface QuickActionFABProps {
  onNewTask: () => void
  onNewProject?: () => void
  className?: string
}

export default function QuickActionFAB({ 
  onNewTask, 
  onNewProject,
  className = '' 
}: QuickActionFABProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleAction = (action: () => void) => {
    action()
    setIsOpen(false)
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* FAB Container */}
      <div className={`fixed bottom-20 right-4 z-50 md:hidden ${className}`}>
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 mb-3"
            >
              {/* New Task Button */}
              <motion.button
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                exit={{ scale: 0, x: 20 }}
                transition={{ delay: 0.05, duration: 0.2 }}
                onClick={() => handleAction(onNewTask)}
                className="flex items-center gap-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 px-4 py-3 font-mono uppercase text-sm font-black whitespace-nowrap"
              >
                <CheckSquare className="w-5 h-5" />
                NEW TASK
              </motion.button>

              {/* New Project Button */}
              {onNewProject && (
                <motion.button
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: 20 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  onClick={() => handleAction(onNewProject)}
                  className="flex items-center gap-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 px-4 py-3 font-mono uppercase text-sm font-black whitespace-nowrap"
                >
                  <FolderPlus className="w-5 h-5" />
                  NEW PROJECT
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          animate={{ 
            rotate: isOpen ? 45 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          onClick={toggleMenu}
          className="w-14 h-14 bg-[#fbe857] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 flex items-center justify-center"
          aria-label={isOpen ? 'Close menu' : 'Open quick actions'}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 stroke-[3]" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-6 h-6 stroke-[3]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
