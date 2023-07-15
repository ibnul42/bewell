import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Accordion from '../../components/accordion'

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

const steps = [
  {
    title: 'Step 1',
    color: '#7C3EDA',
    name: 'Medical History',
    source: '/assets/Star2.png',
    desc: "Complete a simple medical history form so your provider can develop the best treatment plan for you. It's fast, easy, and free."
  },
  {
    title: 'Step 2',
    color: '#17CBBE',
    name: 'Online Visit',
    source: '/assets/Star3.png',
    desc: 'Speak to your new healthcare provider licensed to treat your condition with a simple online audio-visual appointment conversation.'
  },
  {
    title: 'Step 3',
    color: '#FF3755',
    name: 'Receive Medications',
    source: '/assets/Star4.png',
    desc: 'If medically appropriate, receive your medication every 30/60/90 days. All GLP-1 Plans come with free shipping directly to your door! Follow up with your provider any time you need assistance.'
  }
]

const weightlossfaq = [
  {
    serial: '01',
    title: 'How do I get my medication?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quam sapiente quod ex, ab, eligendi beatae autem cum vitae incidunt omnis ipsam iste voluptatibus dolor ratione. Non eius eaque praesentium."
  },
  {
    serial: '02',
    title: 'What if I am not approved for a medication?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quam sapiente quod ex, ab, eligendi beatae autem cum vitae incidunt omnis ipsam iste voluptatibus dolor ratione. Non eius eaque praesentium."
  },
  {
    serial: '03',
    title: 'Are there any hidden fees?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quam sapiente quod ex, ab, eligendi beatae autem cum vitae incidunt omnis ipsam iste voluptatibus dolor ratione. Non eius eaque praesentium."
  },
  {
    serial: '04',
    title: 'What if I need to cancel?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quam sapiente quod ex, ab, eligendi beatae autem cum vitae incidunt omnis ipsam iste voluptatibus dolor ratione. Non eius eaque praesentium."
  },
  {
    serial: '05',
    title: 'Do I have to pay for medication separately?',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quam sapiente quod ex, ab, eligendi beatae autem cum vitae incidunt omnis ipsam iste voluptatibus dolor ratione. Non eius eaque praesentium."
  }
]

const Home = () => {
  const handleColor = (step) => {
    const color = step.color;
    return `text-[${color}] font-bold text-4xl`;
  };
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
          <div className="flex flex-wrap justify-center gap-5">
            {services && services.map((service, index) => (
              <div key={index} className="min-w-[250px] max-w-[280px] h-[310px] rounded-lg shadow-lg hover:shadow-2xl border flex flex-col gap-2 items-center justify-between px-2 text-center my-10">
                <img src={service.source} className='w-24 h-24 -mt-12' alt={service.title} />
                <div className="w-full flex flex-col gap-1 items-center">
                  <p className='text-xl font-medium'>{service.title}</p>
                  <div className="bg-[#FFDE17] w-24 h-[2px] rounded"></div>
                </div>
                <p className='text-[#969696] my-3'>{service.desc}</p>
                <button className='bg-[#FFDE17] py-2 px-6 rounded -mb-5 font-extrabold'>View All</button>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#6CB4A8] py-7 px-6 flex flex-col gap-3 md:flex-row justify-between md:gap-10 md:justify-center items-center rounded-md text-white">
            <div className="text-3xl md:text-4xl font-medium text-center md:px-5">
              <p>Non-weight related</p>
              <p>telehealth visits!</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-end gap-3 md:gap-6">
              <button className='bg-[rgba(163,189,49,1)] border-4 border-white flex flex-col items-center py-4 md:px-10 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$99</span><span>New Patient</span></button>
              <button className='bg-[rgba(219,150,0,1)] border-4 border-white flex flex-col items-center py-4 md:px-10 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$80</span><span>Follow-up</span></button>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------  service section ------------------ */}
      {/* ------------------  weightloss section ------------------ */}
      <section className="w-full relative overflow-hidden bg-[url('/assets/weightloss_bg.png')] bg-cover bg-center bg-repeat py-10 space-y-5">
        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>Weight Loss Subscription</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <p className='text-[#666666] font-semibold text-xl text-center'>How Weight Loss Subscription Works</p>
        <div className="flex justify-center">
          <p className='text-lg text-center text-[#666666] max-w-2xl'>Bee Well Health offers healthcare subscription services to our clients, providing access to high-quality practitioners for a fixed monthly price, no insurance needed, and no hidden fees. Cancel anytime! </p>
        </div>
        <div className="py-5 md:py-7 lg:py-20 flex flex-wrap gap-8 justify-center">
          {steps && steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-[315px] md:w-[330px] lg:w-[350px] 2xl:w-[380px]">
                <img src={step.source} className='w-full' alt="star" />
              </div>
              <div className="absolute top-0 w-[315px] md:w-[330px] lg:w-[350px] 2xl:w-[380px] h-full space-y-2 px-6 py-5 text-center">
                <p className={handleColor(step)}>{step.title}</p>
                <p className='font-medium text-2xl'>{step.name}</p>
                <p className='text-[#666666] text-sm md:text-base'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>Weight Loss Plans</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-10">
          <div className="bg-[url('/assets/weightloss1.png')] bg-cover bg-center min-w-[280px] max-w-[350px] overflow-hidden rounded-lg py-8 px-5 md:px-8 flex flex-col gap-4 items-center">
            <p className='text-xl text-white font-bold'>GLP-1 Weight Management</p>
            <div className="w-full h-[1px] bg-white"></div>
            <p className='text-3xl text-white font-bold'>$280/month</p>
            <div className="py-10 mt-5">
              <p className=''>Includes personalized telehealth appointments with provider & medication + supplies <span className='text-[#14B0B0]'>shipped to your door</span></p>
            </div>
          </div>
          <div className="bg-[url('/assets/weightloss2.png')] bg-cover bg-center min-w-[280px] max-w-[350px] overflow-hidden rounded-lg py-8 px-5 md:px-8 flex flex-col gap-4 items-center">
            <p className='text-xl text-white font-bold'>Medical Weight Loss</p>
            <div className="w-full h-[1px] bg-white"></div>
            <p className='text-3xl text-white font-bold'>$80/month</p>
            <div className="py-10 mt-5">
              <p className=''>Includes personalized telehealth appointments with provider & electronically sent prescription <span className='text-[#FD9177]'>to the pharmacy of your choice</span></p>
            </div>
          </div>
        </div>


        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>Weight Loss FAQ</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <div className="space-y-3">
          <Accordion title="weightlossfaq" items={weightlossfaq} />
        </div>
        <div className="flex justify-center">
        <Link to="/" className='bg-[#FFDE17] px-5 md:px-8 lg:px-10 mx-3 py-3 rounded font-bold'>Patient Portal</Link>
        </div>
      </section>
      {/* ------------------  weightloss section ------------------ */}
    </div>
  )
}

export default Home