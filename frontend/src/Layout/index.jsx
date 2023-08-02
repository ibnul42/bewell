import Header from './Header'
import Footer from './Footer'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BlogPage from '../Pages/Blog'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Dashboard from '../Pages/Admin/Dashboard/indes'
import { useDispatch } from 'react-redux'
import { getUser } from '../features/auth/authSlice'
import ProtectedRoute from '../utils/ProtectedRoute'
const Layout = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className={`flex flex-col ${open ? "h-screen overflow-y-hidden md:min-h-screen md:overflow-y-visible" : "min-h-screen"} overflow-y-auto overflow-x-hidden font-roboto`}>
      <div className="">
        <Header open={open} setOpen={setOpen} />
      </div>
      <div className="flex-1 h-full">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/login' element={<Login />} />
          {/* <ProtectedRoute path="/admin/dashboard" element={<Dashboard />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
      <div className="">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Layout