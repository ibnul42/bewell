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
import EditStep from '../Pages/Admin/Dashboard/EditStep'
import CreateWeightlossFaq from '../Pages/Admin/Dashboard/CreateWeightlossFaq'
import EditWeightlossFaq from '../Pages/Admin/Dashboard/EditWeightlossFaq'
import EditGeneralFaq from '../Pages/Admin/Dashboard/EditGeneralFaq'
import CreateGeneralFaq from '../Pages/Admin/Dashboard/CreateGeneralFaq'
import EditService from '../Pages/Admin/Dashboard/EditService'
import Blog from '../Pages/Admin/Blog'
import CreateBlog from '../Pages/Admin/Blog/CreateBlog'
import EditBlog from '../Pages/Admin/Blog/EditBlog'
const Layout = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className={`flex flex-col ${open ? "h-screen overflow-y-hidden md:min-h-screen md:h-auto md:overflow-y-visible" : ""} min-h-screen overflow-y-auto overflow-x-hidden font-roboto`}>
      <div className="">
        <Header open={open} setOpen={setOpen} />
      </div>
      <div className="flex-1 h-full">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/admin/blog' element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path='/admin/blog/create' element={<ProtectedRoute><CreateBlog /></ProtectedRoute>} />
          <Route path='/admin/blog/:blog' element={<ProtectedRoute><EditBlog /></ProtectedRoute>} />
          <Route path='/admin/dashboard/:step' element={<ProtectedRoute><EditStep /></ProtectedRoute>} />
          <Route path='/admin/dashboard/loss-faq/create' element={<ProtectedRoute><CreateWeightlossFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/loss-faq/:id' element={<ProtectedRoute><EditWeightlossFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/general-faq/create' element={<ProtectedRoute><CreateGeneralFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/general-faq/:id' element={<ProtectedRoute><EditGeneralFaq /></ProtectedRoute>} />
          <Route path='/admin/dashboard/service/:id' element={<ProtectedRoute><EditService /></ProtectedRoute>} />
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