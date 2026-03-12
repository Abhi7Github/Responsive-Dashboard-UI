import React from 'react'
import { useTheme } from '../../context/themeContext'

const ThemeButton = () => {
    const {darkMode,lightMode} = useTheme()


  return (
    <div className='flex gap-2'>
        <button onClick={darkMode} className='bg-blue-500 text-white p-2 rounded-md'>Dark Mode</button>
        <button onClick={lightMode} className='bg-blue-500 text-white p-2 rounded-md'>Light Mode</button>
    </div>
  )
}

export default ThemeButton