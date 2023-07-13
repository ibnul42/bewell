import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="w-full relative bg-[url('/assets/footer_bg.png')] bg-cover bg-center lg:bg-top py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col">
            <Link to="/"><img src="/assets/logo.png" className='w-2/5 my-3' alt="logo" /></Link>
            <div className="flex flex-col">
              <p>Follow Us</p>
              <div className="flex gap-2 my-2">
                <a href="/" target='_blank'><img src="/assets/facebook.png" className='w-4 h-4' alt="facebook" /></a>
                <a href="/" target='_blank'><img src="/assets/instagram.png" className='w-4 h-4' alt="instagram" /></a>
              </div>
            </div>
          </div>
          <div className="">
            <p className='text-lg font-semibold'>Quick Links</p>
            <ul className='my-4 flex flex-col gap-2'>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Weight Loss</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Services</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Contact</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />FAQ&apos;s</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Patient Portal</Link>
            </ul>
          </div>
          <div className="">
            <p className='text-lg font-semibold'>Contact Info</p>
            {/* <ul className='my-4 flex flex-col gap-2'>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Weight Loss</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Services</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Contact</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />FAQ&apos;s</Link>
              <Link to="/" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Patient Portal</Link>
            </ul> */}
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <p className='text-center py-4'>Copyright 2021 &copy; All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer