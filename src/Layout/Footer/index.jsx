import React from 'react'
import { Link } from 'react-router-dom'

import { BsMessenger, BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { NavHashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="w-full relative bg-[url('/assets/footer_bg.png')] bg-cover bg-center lg:bg-top py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col">
            <Link to="/"><img src="/assets/logo.png" className='w-2/5 my-3' alt="logo" /></Link>
            <div className="flex flex-col py-5 md:py-8">
              <p className='text-lg'>Follow Us</p>
              <div className="flex gap-3 my-2">
                <a href="https://www.facebook.com/profile.php?id=100094196923088&mibextid=LQQJ4d" rel="noreferrer" target='_blank'><img src="/assets/facebook.png" className='w-7 h-7' alt="facebook" /></a>
                <a href="https://instagram.com/beewell.live?igshid=OGQ5ZDc2ODk2ZA==" rel="noreferrer" target='_blank'><img src="/assets/instagram.png" className='w-7 h-7' alt="instagram" /></a>
              </div>
            </div>
          </div>
          <div className="">
            <p className='text-lg font-semibold'>Quick Links</p>
            <ul className='my-4 flex flex-col gap-2'>
              <NavHashLink smooth to="/#weight-loss" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Weight Loss</NavHashLink>
              <NavHashLink smooth to="/#services" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Services</NavHashLink>
              <NavHashLink smooth to="/#contact-us" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Contact</NavHashLink>
              <NavHashLink smooth to="/#faq" className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />FAQ&apos;s</NavHashLink>
              <Link to="https://app2.rxnt.com/patientbillpay/#" target='_blank' className='flex gap-2 items-center'><img src="/assets/angle-right.svg" className='w-3 h-3' alt="right" />Patient Portal</Link>
            </ul>
          </div>
          <div className="">
            <p className='text-lg font-semibold'>Contact Info</p>
            <ul className='my-4 flex flex-col gap-3'>
              <div className="flex gap-2">
                <Link to="https://www.facebook.com/profile.php?id=100094196923088&mibextid=LQQJ4d" target='_blank' ><BsMessenger /></Link>
              </div>
              <div className="">
                <div className="flex gap-2">
                  <BsTelephoneFill />
                  <p className='font-bold'>Phone</p>
                </div>
                <a href="tel:(386)507-3421">(386) 507-3421</a>
              </div>
              <div className="">
                <div className="flex gap-2">
                  <MdEmail />
                  <p className='font-bold'>Email</p>
                </div>
                <a href="mailto:info@beewell.health">info@beewell.health</a>
              </div>
            </ul>
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