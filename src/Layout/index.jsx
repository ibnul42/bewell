import Header from './Header'
import Footer from './Footer'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
const Layout = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className={`flex flex-col ${open ? "h-screen overflow-y-hidden md:min-h-screen md:overflow-y-visible" : "min-h-screen"} overflow-y-auto overflow-x-hidden font-roboto`}>
      <div className="">
        <Header open={open} setOpen={setOpen} />
      </div>
      <div className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Layout