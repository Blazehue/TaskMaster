import { toast as sonnerToast } from 'sonner';

// Custom toast wrapper with brutalist styling
export const toast = {
  success: (message: string) => {
    sonnerToast.success(message, {
      duration: 3000,
      className: 'brutalist-toast',
    });
  },
  
  error: (message: string) => {
    sonnerToast.error(message, {
      duration: 4000,
      className: 'brutalist-toast',
    });
  },
  
  info: (message: string) => {
    sonnerToast.info(message, {
      duration: 3000,
      className: 'brutalist-toast',
    });
  },
  
  taskCompleted: (xp: number) => {
    sonnerToast.success(`Task completed! 🎉 +${xp} XP`, {
      duration: 4000,
      className: 'brutalist-toast',
    });
  },
  
  taskCreated: () => {
    sonnerToast.success('Task created successfully! ✅', {
      duration: 3000,
      className: 'brutalist-toast',
    });
  },
  
  taskDeleted: () => {
    sonnerToast.info('Task deleted', {
      duration: 2000,
      className: 'brutalist-toast',
    });
  },
  
  taskMoved: (status: string) => {
    sonnerToast.info(`Task moved to ${status}`, {
      duration: 2000,
      className: 'brutalist-toast',
    });
  },
  
  projectCreated: () => {
    sonnerToast.success('Project created successfully! 🚀', {
      duration: 3000,
      className: 'brutalist-toast',
    });
  },
  
  projectDeleted: () => {
    sonnerToast.info('Project deleted', {
      duration: 2000,
      className: 'brutalist-toast',
    });
  },
  
  levelUp: (level: number) => {
    sonnerToast.success(`🎊 Level Up! You're now Level ${level}!`, {
      duration: 5000,
      className: 'brutalist-toast level-up-toast',
    });
  },
};
