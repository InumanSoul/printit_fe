'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'm') {
        handleThemeChange()
      }
    })

    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'm') {
          handleThemeChange()
        }
      })
    }
  })

  function handleThemeChange() {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <>
      <button type="button" className="py-1 px-2 flex gap-1 hover:opacity-80 duration-200 ease-linear" onClick={handleThemeChange}>
        {resolvedTheme === 'dark' ? (<MoonIcon className='size-5' />) : (<SunIcon className='size-5' />)}
      </button>
    </>
  )
}

export default ThemeSwitch