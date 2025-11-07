import React, { useEffect } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const toastClass = cn(
    "fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg border",
    "transform transition-all duration-300 ease-in-out",
    "max-w-md min-w-[300px]",
    isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
    type === 'success' && (
      theme === "light" 
        ? "bg-green-50 border-green-200 text-green-800" 
        : "bg-green-900/20 border-green-700 text-green-400"
    ),
    type === 'error' && (
      theme === "light" 
        ? "bg-red-50 border-red-200 text-red-800" 
        : "bg-red-900/20 border-red-700 text-red-400"
    )
  );

  const IconComponent = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <div className={toastClass}>
      <IconComponent size={20} className="flex-shrink-0" />
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className={cn(
          "flex-shrink-0 rounded-full p-1 transition-colors duration-200",
          theme === "light" ? "hover:bg-slate-200" : "hover:bg-slate-700"
        )}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;