import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Urgent Care',
    source: '/assets/urgent-care.png',
    desc: 'Allergies, Cold & Flu, Cough, COVID-19, Ear Pain, Headache, Insect Bites, Medication Refills, Pink Eye, Rash, Sinus Problems, Sore Throat,'
  },
  {
    title: 'Mental Health',
    source: '/assets/mental-health.png',
    desc: 'Anxiety Screening/Treatment, Depression Screening/Treatment, Bipolar Screening/Treatment, Grief & Loss, Life Changes,'
  },
  {
    title: 'Routine Care',
    source: '/assets/routine-care.png',
    desc: 'Annual Wellness, Preventative Screening, Naloxone for Opiate Overdose Prescription, Smoking Cessation, Restless Leg Syndrome'
  },
  {
    title: 'Medication Refill',
    source: '/assets/medication-refill.png',
    desc: 'Acid Reflux or GERD Medicine Refill, Anxiety, Stress, and Depression Prescription Refill, Diabetes Prescription Refill,'
  },
  {
    title: 'Testing and Screening',
    source: '/assets/testing-screening.png',
    desc: 'Blood Type Testing, HIV Testing, Sexually Transmitted Infection (STI) Testing, Pregnancy Testing, Tuberculosis (TB) Testing,'
  },
  {
    title: 'Skin and Hair',
    source: '/assets/skin-hair.png',
    desc: 'Acne Treatment and Prevention, Eczema Prescription Refill, Hair Loss Prevention and Regrowth, Rosacea Treatment,'
  },
  {
    title: 'Sexual Health',
    source: '/assets/sex-health.png',
    desc: 'Birth Control Prescription, Erectile Dysfunction, HIV Testing, Pregnancy Testing, Yeast Infection Treatment, Emergency Contraception'
  }
]

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="" />
      </Helmet>
      {/* ------------------  hero section ------------------ */}
      <section className="relative bg-gradient-to-r from-[#6EB4A8] to-[#95C2BB]">
        <img src="/assets/hero_bg.png" className='w-full min-h-[250px] md:min-h-[380px] max-h-[472px] object-cover xl:object-contain object-right lg:object-center' alt="" />
        <div className="relative bg-gradient-to-r from-[#6EB4A8] to-[#95C2BB] md:bg-none md:absolute top-0 w-full h-full">
          <div className="max-w-7xl mx-auto px-2 py-8 md:py-10 lg:py-16 flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-3xl md:text-4xl lg:text-5xl xl:text6xl font-semibold">
              <p className='text-white'>We provide total</p>
              <p className='text-[#FFDE17]'>health care solutions</p>
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-white">
              <p>“Life is not merely being alive, but being well.”</p>
              <p>– Marcus Aurelius</p>
            </div>
            <div className="flex justify-center md:justify-start gap-3 text-lg md:text-xl font-medium">
              <Link to="/" className='px-5 md:px-6 py-3 bg-white hover:bg-[rgba(255,255,255,0.8)] rounded'>Patient Portal</Link>
              <Link to="/" className='px-5 md:px-6 py-3 text-white border border-white hover:bg-white hover:text-black rounded'>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------  hero section ------------------ */}
      {/* ------------------  service section ------------------ */}
      <section className='max-w-7xl mx-auto px-2 py-12'>
        <div className="">
          <div className="w-full flex flex-col gap-2 items-center text-center my-8">
            <p className='text-3xl md:stext-5xl font-medium'>Our Services</p>
            <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-5">
            {services && services.map((service, index) => (
              <div key={index} className="min-w-[250px] max-w-[280px] h-[310px] rounded-lg shadow-lg hover:shadow-2xl border flex flex-col gap-2 items-center justify-between px-2 text-center my-10">
                <img src={service.source} className='w-24 h-24 -mt-12' alt={service.title} />
                <div className="w-full flex flex-col gap-1 items-center">
                  <p className='text-xl font-medium'>{service.title}</p>
                  <div className="bg-[#FFDE17] w-24 h-[2px] rounded"></div>
                </div>
                <p className='text-[#969696] my-3'>{service.desc}</p>
                <button className='bg-[#FFDE17] py-2 px-6 rounded -mb-5'>View All</button>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#6CB4A8] py-7 px-6 flex flex-col gap-3 md:flex-row justify-between items-center rounded-md text-white">
            <div className="text-3xl md:text-4xl font-medium text-center md:px-5">
              <p>Non-weight related</p>
              <p>telehealth visits!</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-end gap-3 md:gap-6">
              <button className='bg-[rgba(163,189,49,0.7)] hover:bg-[rgba(163,189,49,1)] border-4 border-white flex flex-col items-center py-4 md:px-10 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$99</span><span>New patient</span></button>
              <button className='bg-[rgba(219,150,0,0.7)] hover:bg-[rgba(219,150,0,1)] border-4 border-white flex flex-col items-center py-4 md:px-10 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$99</span><span>New patient</span></button>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------  service section ------------------ */}
    </div>
  )
}

export default Home