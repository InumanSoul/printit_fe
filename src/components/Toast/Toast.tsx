'use client'

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface ToastProps {
  children: React.ReactNode;
  type: 'success' | 'error' | 'warning' | 'info';
}

const Toast = ({ children, type }: ToastProps) => {
  const [display, setDisplay] = useState(true)
  const ToastTypes = {
    success: 'bg-green-100 text-green-500 dark:bg-green-500 dark:text-white',
    error: 'bg-red-100 text-red-500 dark:bg-red-500 dark:text-white',
    warning: 'bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white',
    info: 'bg-blue-100 text-blue-500 dark:bg-blue-500 dark:text-white',
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className={`fixed bottom-4 right-4 p-3 rounded-md shadow-lg ${display ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-5 opacity-0 pointer-events-none'} ${ToastTypes[type]}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mx-2">
            {children}
          </div>
        </div>
        <button onClick={() => setDisplay(false)} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default Toast
