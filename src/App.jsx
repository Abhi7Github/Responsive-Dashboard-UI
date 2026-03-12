import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import DashboardLayout from './pages/Dashboard/DashboardLayout'
import { DashboardHome } from './pages/Dashboard/DashboardHome'
import Scan from './pages/Dashboard/Scan'
import { PageNotFound } from './pages/PageNotFound'

function App() {
  const [theme,setTheme]=useState("light")

  const darkMode = () => {
    setTheme("dark")
  }
  const lightMode = () => {
    setTheme("light")
  }

  useEffect(() => {
    document.documentElement.classList.remove("light","dark")
    document.documentElement.classList.add(theme)
  }, [theme])


  return (
    <>
      <ThemeProvider value={{theme, darkMode, lightMode}}>
        <BrowserRouter>
          <Routes>

            <Route path='' element={<Navigate to='/login' replace/>} />

            <Route path='/login' element={<Login />}  />

            <Route
                path='/dashboard'
                element={<DashboardLayout />}
            >
                <Route index element={<DashboardHome />}/>
                <Route path='scan' element={<Scan />} />
                <Route path='*' element={<PageNotFound />}/>
            </Route>



          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
