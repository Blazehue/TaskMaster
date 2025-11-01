import { X, Keyboard } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface KeyboardShortcut {
  category: string
  shortcuts: Array<{
    keys: string[]
    description: string
  }>
}

interface KeyboardShortcutsModalProps {
  isOpen: boolean
  onClose: () => void
}

const shortcuts: KeyboardShortcut[] = [
  {
    category: 'Navigation',
    shortcuts: [
      { keys: ['Ctrl', 'D'], description: 'Go to Dashboard' },
      { keys: ['Ctrl', 'T'], description: 'Go to Tasks' },
      { keys: ['Ctrl', 'P'], description: 'Go to Projects' },
      { keys: ['Ctrl', 'K'], description: 'Go to Kanban Board' },
      { keys: ['Ctrl', 'C'], description: 'Go to Calendar' },
    ],
  },
  {
    category: 'Actions',
    shortcuts: [
      { keys: ['Ctrl', 'N'], description: 'Create New Task' },
      { keys: ['Ctrl', 'Shift', 'N'], description: 'Create New Project' },
      { keys: ['Ctrl', 'K'], description: 'Open Command Palette' },
      { keys: ['/'], description: 'Focus Search Bar' },
    ],
  },
  {
    category: 'General',
    shortcuts: [
      { keys: ['?'], description: 'Show Keyboard Shortcuts' },
      { keys: ['Esc'], description: 'Close Modal/Dialog' },
      { keys: ['Ctrl', 'S'], description: 'Save Changes' },
    ],
  },
]

function KeyBadge({ keyName }: { keyName: string }) {
  return (
    <kbd className="px-2 py-1 text-xs font-mono font-bold bg-black text-white border-2 border-black inline-block min-w-[2rem] text-center">
      {keyName}
    </kbd>
  )
}

export default function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white border-4 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <DialogHeader className="bg-black text-white p-6 relative">
          <div className="flex items-center gap-3">
            <Keyboard className="w-6 h-6" />
            <DialogTitle className="text-2xl font-black font-mono uppercase tracking-wider">
              KEYBOARD SHORTCUTS
            </DialogTitle>
          </div>
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 hover:bg-white hover:text-black border-2 border-white transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
          {shortcuts.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-black font-mono uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.shortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border-2 border-black bg-[#e0e0e0] hover:bg-white transition-colors"
                  >
                    <span className="font-mono text-sm font-medium">
                      {shortcut.description}
                    </span>
                    <div className="flex items-center gap-2">
                      {shortcut.keys.map((key, keyIndex) => (
                        <div key={keyIndex} className="flex items-center gap-1">
                          <KeyBadge keyName={key} />
                          {keyIndex < shortcut.keys.length - 1 && (
                            <span className="text-gray-600 font-mono text-xs">+</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer Note */}
          <div className="border-2 border-black bg-[#fbe857] p-4">
            <p className="font-mono text-xs uppercase tracking-wide">
              <span className="font-black">PRO TIP:</span> Press{' '}
              <KeyBadge keyName="?" /> anywhere to open this help menu
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
