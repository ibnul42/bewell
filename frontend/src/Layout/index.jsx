import Header from './Header'
import Footer from './Footer'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import BlogPage from '../Pages/Blog'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Dashboard from '../Pages/Admin/Dashboard/indes'
import ProtectedRoute from '../utils/ProtectedRoute'
import EditService from '../Pages/Admin/Dashboard/EditService'
import CreateWeightlossFaq from '../Pages/Admin/Dashboard/CreateWeightlossFaq'
import EditWeightlossFaq from '../Pages/Admin/Dashboard/EditWeightlossFaq'
import EditGeneralFaq from '../Pages/Admin/Dashboard/EditGeneralFaq'
import CreateGeneralFaq from '../Pages/Admin/Dashboard/CreateGeneralFaq'
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
          <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/admin/dashboard/:step' element={<ProtectedRoute><EditService /></ProtectedRoute>} />
          <Route path='/admin/dashboard/loss-faq/create' element={<ProtectedRoute><CreateWeightlossFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/loss-faq/:id' element={<ProtectedRoute><EditWeightlossFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/general-faq/create' element={<ProtectedRoute><CreateGeneralFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/general-faq/:id' element={<ProtectedRoute><EditGeneralFaq /></ProtectedRoute>} />
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