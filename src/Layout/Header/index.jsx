import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { name: "services", link: "/#services" },
  { name: "Weight Loss Subscription", link: "/#weight-loss" },
  { name: "contact us", link: "/#contact" },
  { name: "FAQ", link: "/#faq" },
]

const Header = ({ open, setOpen }) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      // color: isActive ? "#dba124" : "",
      // borderBottom: isActive ? "3px solid #6366f1" : null,
    }
  }
  return (
    <div className='bg-gradient-to-r from-[#84BFB5] to-[#A6CBC5] text-black'>
      <div className="max-w-6xl mx-auto px-2 py-2 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex w-full lg:w-auto justify-between">
          <div className="">
            <Link to="/"><img src="/assets/logo.png" className='w-2/5' alt="logo" /></Link>
          </div>

          <div
            className={`h-12 w-12 flex flex-col justify-between items-center rounded cursor-pointer md:hidden border ${open ? "p-2" : "p-3"
              } z-50`}
            onClick={() => setOpen(!open)}
          >
            <div
              className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "rotate-45 mt-4 block" : ""
                }`}
            ></div>
            <div
              className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "hidden mb-5" : ""
                }`}
            ></div>
            <div
              className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "-rotate-45 mb-3 inline-block" : ""
                }`}
            ></div>
          </div>
        </div>
        <div className={`flex flex-col gap-3 lg:flex-row items-start lg:items-center pt-10 lg:pt-0 justify-start lg:justify-center absolute left-0 lg:static w-full lg:h-auto lg:w-auto transition-all duration-500 ease-in ${
            open
              ? "opacity-100 top-[65px] bg-gradient-to-r from-[#84BFB5] to-[#A6CBC5] lg:bg-transparent h-[calc(100vh-65px)]"
              : "opacity-0 lg:opacity-100 top-[65px] left-[-500px]"
          } z-50`}>
          <ul className='flex flex-col lg:flex-row gap-6'>
            {links.map((link, i) => (
              <NavLink style={navLinkStyles} key={i} to={link.link} className='capitalize hover:text-white px-3 lg:px-0'>{link.name}</NavLink>
            ))}
          </ul>
          <Link to="/" className='bg-[#FFDE17] px-5 py-3 rounded'>Patient Portal</Link>
        </div>
      </div>
    </div>
  )
}

export default Header