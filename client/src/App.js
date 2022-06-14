import axios from 'axios'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './styles/main.css'

// components
import Home from './components/Home'
// Auth components
import PageNavBar from './components/PageNavbar'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Profile from './components/Profile'
// Utility
import PageNotFound from './components/utilities/PageNotFound.js'




const App = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>


  )
}

export default App
