import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Accordion from '../../components/accordion'
import DateSelector from '../../components/DateSelector'
import { NavHashLink } from 'react-router-hash-link'
import { toast } from 'react-toastify'

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
    desc: "We work with a third-party compounding pharmacy to process your prescription. Your medication will be mailed directly from the pharmacy to your address on file, unless otherwise specified/discussed."
  },
  {
    serial: '02',
    title: 'What if I am not approved for a medication?',
    desc: "Like a traditional clinic, payment is for the provider’s service and the providers time spent with you in a telehealth appointment. If you are not approved, your provider is often able to offer alternative therapies that you may be medically qualified for. "
  },
  {
    serial: '03',
    title: 'Are there any hidden fees?',
    desc: "No, the prices of all our plans are displayed on our website. All you pay per month is the flat-fee (as shown)."
  },
  {
    serial: '04',
    title: 'What if I need to cancel?',
    desc: "You can cancel anytime! It's that easy. Bee Well offers a month-to-month subscription for weight loss medications. We do not require you to sign up for any specific length of time."
  },
  {
    serial: '05',
    title: 'Do I have to pay for medication separately?',
    desc: "Program costs displayed on our website include the medication cost for the GLP-1 program. For your convenience, you are only billed once per month for the total cost of the program. If medication is sent to the pharmacy of your choice, the cost of medication will be discussed in the appointment."
  }
]

const generalfaq = [
  {
    serial: `01`,
    title: `How do I pay my bill?`,
    desc: `Bill pay will be directly through our electronic medical record platform via the`,
    link: `https://app2.rxnt.com/patientbillpay/#/`,
    linktitle: `patient portal`
  },
  {
    serial: `02`,
    title: `How will I contact my healthcare provider?`,
    desc: `After completing the medical intake forms - you will be prompted to set up a patient portal through our electronic medical record platform. Here you will have access to direct messaging and scheduling with your provider. `
  },
  {
    serial: `03`,
    title: `Does Health Bee Well accept insurance?`,
    desc: `We do not accept any public or private health insurance plans, cost-sharing, or any other similar methods of payments. Clients are solely responsible for the cost of the service.
    `
  },
  {
    serial: `04`,
    title: `Who can use Health Bee Well?`,
    desc: `You must be 18 years or older. You must be a resident or physically located in Florida. You must have a demonstrated need for treatment.`
  },
  {
    serial: `05`,
    title: `Do medication, labs, and imaging orders count towards my deductible?`,
    desc: `All medications, labs, and imaging orders that your insurance is billed for will count towards your insurance deductible.`
  },
  {
    serial: `06`,
    title: `Can Bee Well Health order referrals?`,
    desc: `If medically necessary, Bee Well Health can order referrals for physical therapy, occupation therapy, social services, and specialists. Schedule an appointment to discuss with your provider!`
  }
]

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedData, setSelectedData] = useState({
    year: '',
    month: '',
    day: '',
  })
  const handleColor = (step) => {
    const color = step.color;
    return `text-[${color}] font-bold text-4xl`;
  };

  const submitHandler = (e) => {
    e.preventDefault()
    toast.success('Hive Five!')
    console.log(selectedData)
  }

  const viewClickHandler = (item, index) => {
    setSelectedItem(index)
  }
  return (
    <div className='scroll-smooth'>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="" />
      </Helmet>
      {/* ------------------  hero section ------------------ */}
      <section id='home' className="relative bg-gradient-to-r from-[#6BB3A7] to-[#95C2BB] lg:hidden">
        <div className="w-full py-5">
          <img src="/assets/hero_mobile.svg" className='lg:hidden w-full' alt="hero" />
        </div>
        <div className="lg:absolute top-0 w-full h-full py-5">
          <div className="max-w-7xl mx-auto px-2 py-8 flex flex-col gap-6 lg:gap-10">
            <div className="flex flex-col gap-2 text-3xl font-semibold">
              <p className='text-white'>We provide total</p>
              <p className='text-[#FFDE17]'>health care solutions</p>
            </div>
            <div className="text-white">
              <p className='text-lg'>“Life is not merely being alive, but being well.”</p>
              <p className='text-sm font-light'>– Marcus Aurelius</p>
            </div>
            <div className="flex justify-center md:justify-start gap-3 text-lg md:text-xl font-medium">
              <Link to="https://app2.rxnt.com/phr/#/" target='_blank' className='px-5 md:px-6 py-3 bg-white hover:bg-[rgba(255,255,255,0.8)] rounded'>Patient Portal</Link>
              <NavHashLink to="/#contact-us" smooth className='px-5 md:px-6 py-3 text-white border border-white hover:bg-white hover:text-black rounded'>Contact Us</NavHashLink>
            </div>
          </div>
        </div>
      </section>
      <section id='home' className='hidden lg:block bg-gradient-to-r from-[#6BB3A7] to-[#95C2BB] py-5 xl:py-20 relative'>
        <div className="max-w-7xl mx-auto flex justify-end relative">
          <div className="absolute w-full h-full">
            <div className="py-7 xl:py-9 flex flex-col justify-between px-2 h-full">
              <div className="flex flex-col gap-2 text-3xl xl:text-5xl font-semibold">
                <p className='text-white'>We provide total</p>
                <p className='text-[#FFDE17]'>health care solutions</p>
              </div>
              <div className="text-white">
                <p className='text-lg xl:text-xl'>“Life is not merely being alive, but being well.”</p>
                <p className='text-sm font-light'>– Marcus Aurelius</p>
              </div>
              <div className="flex justify-center md:justify-start gap-3 text-lg md:text-xl font-medium z-10">
                <Link to="https://app2.rxnt.com/phr/#/" target='_blank' className='px-5 md:px-6 py-3 bg-white hover:bg-[rgba(255,255,255,0.8)] rounded'>Patient Portal</Link>
                <NavHashLink to="/#contact-us" smooth className='px-5 md:px-6 py-3 text-white border border-white hover:bg-white hover:text-black rounded'>Contact Us</NavHashLink>
              </div>
            </div>
          </div>
          <div className="h-[280px] xl:h-[380px]">
            <img src="/assets/hero_bg.svg" className='h-full' alt="hero" />
          </div>
        </div>
        <div className="hidden absolute w-full h-full top-0 xl:flex justify-center">
          <div className="flex-1"></div>
          <div className="w-[1280px]"></div>
          <div className="flex-1 py-[118px] flex items-end">
            <div className="h-[2px] w-full bg-white"></div>
          </div>
        </div>
      </section>

      {/* ------------------  hero section ------------------ */}
      {/* ------------------  service section ------------------ */}
      <section id='services' className='max-w-7xl mx-auto px-2 py-12'>
        <div className="">
          <div className="w-full flex flex-col gap-2 items-center text-center my-8">
            <p className='text-3xl md:stext-5xl font-medium'>Our Services</p>
            <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {services && services.map((service, index) => (
              <div key={index} className="min-w-[250px] max-w-[280px] rounded-lg shadow-lg hover:shadow-2xl border flex flex-col gap-2 items-center justify-between px-2 text-center my-10">
                <img src={service.source} className='w-24 h-24 -mt-12' alt={service.title} />
                <div className="w-full flex flex-col gap-1 items-center">
                  <p className='text-xl font-medium'>{service.title}</p>
                  <div className="bg-[#FFDE17] w-24 h-[2px] rounded"></div>
                </div>
                <p className={`text-[#969696] my-3 ${selectedItem === index ? '' : 'line-clamp-3'}`}>{service.desc}</p>
                <button onClick={() => viewClickHandler(service, index)} className='bg-[#FFDE17] py-2 px-6 rounded -mb-5 font-extrabold'>View All</button>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#6CB4A8] py-7 px-3 flex flex-col gap-3 md:flex-row justify-between md:gap-10 md:justify-center items-center rounded-md text-white">
            <div className="flex-shrink-0 text-3xl font-medium text-center md:px-5">
              <p>Non-weight related</p>
              <p>telehealth visits!</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-end gap-3 md:gap-6">
              <button className='bg-[rgba(163,189,49,1)] border-4 border-white flex flex-col items-center py-4 md:px-5 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$99</span><span>New Patient</span></button>
              <button className='bg-[rgba(219,150,0,1)] border-4 border-white flex flex-col items-center py-4 md:px-5 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$80</span><span>Follow-up</span></button>
              <button className='bg-[rgba(239,80,0,1)] border-4 border-white flex flex-col items-center py-4 md:px-5 rounded-md text-4xl font-medium text-center min-w-[280px]'><span>$65</span><span>Urgent Care</span></button>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------  service section ------------------ */}
      {/* ------------------  weightloss section ------------------ */}
      <section id='weight-loss' className="w-full relative overflow-hidden bg-[url('/assets/weightloss_bg.png')] bg-cover bg-center bg-repeat py-10 space-y-5">
        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>Weight Loss Subscription</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <p className='text-[#666666] font-semibold text-xl text-center'>How weight loss subscription works</p>
        <div className="flex justify-center">
          <p className='text-lg text-center text-[#666666] max-w-2xl'>Bee Well Health offers healthcare subscription services to our clients, providing access to high-quality practitioners for a fixed monthly price, no insurance needed, and no hidden fees. Cancel anytime! </p>
        </div>
        <div className="py-5 md:py-7 lg:py-20 flex flex-wrap gap-8 justify-center">
          {steps && steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-[300px] md:w-[330px]">
                <img src={step.source} className='w-full' alt="star" />
              </div>
              <div className="absolute top-0 w-[300px] md:w-[330px] h-full space-y-2 px-6 py-5 text-center">
                <p className={`font-bold text-4xl`} style={{ color: step.color }}>{step.title}</p>
                <p className='font-medium text-2xl'>{step.name}</p>
                <p className='text-[#666666] text-[13px] md:text-base px-3'>{step.desc}</p>
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
            <p className='text-3xl text-white font-bold'>$399/month</p>
            <div className="py-10 mt-5">
              <p className='text-center'>Includes personalized telehealth appointments with provider & medication + supplies {` `}
              <span className='text-[#14B0B0]'>Semaglutide (Ozempic/Wegovy)</span>
              {/* <span className='text-[#14B0B0]'>shipped to your door</span> */}
              </p>
            </div>
          </div>
          <div className="bg-[url('/assets/weightloss2.png')] bg-cover bg-center min-w-[280px] max-w-[350px] overflow-hidden rounded-lg py-8 px-5 md:px-8 flex flex-col gap-4 items-center">
            <p className='text-xl text-white font-bold'>Medical Weight Loss</p>
            <div className="w-full h-[1px] bg-white"></div>
            <p className='text-3xl text-white font-bold'>$80/month</p>
            <div className="py-10 mt-5">
              <p className='text-center'>Includes personalized telehealth appointments with provider & electronically sent prescription {` `}
              <span className='text-[#FD9177]'>Phentermine, Contrave, Plenty</span>
              {/* <span className='text-[#FD9177]'>to the pharmacy of your choice</span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>Weight Loss FAQ</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <div className="space-y-3">
          <Accordion slColor="#6CB4A8" items={weightlossfaq} />
        </div>
        <div className="flex justify-center">
          <Link to="https://app2.rxnt.com/phr/#/" target="_blank" className='bg-[#FFDE17] px-5 md:px-8 lg:px-10 mx-3 py-3 rounded font-bold'>Patient Portal</Link>
        </div>
      </section>
      {/* ------------------  weightloss section ------------------ */}
      {/* ------------------  contact section ------------------ */}
      <section id='contact-us' className='max-w-7xl mx-auto px-2 py-10'>
        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>Contact Us</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <form onSubmit={submitHandler} className='px-5 md:px-7 lg:px-14 xl:px-20 py-4 bg-[#F6F6F6] grid grid-cols-2 gap-x-5 lg:gap-x-12 xl:gap-x-20 gap-y-5 rounded'>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name='firstName' className='border border-[#969696] py-2 px-2 rounded-md focus-within:border-blue-500 focus-within:outline-0' />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name='lastName' className='border border-[#969696] py-2 px-2 rounded-md focus-within:border-blue-500 focus-within:outline-0' />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="birthdate">Birthdate</label>
            <DateSelector setSelectedData={setSelectedData} />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="text" name='email' className='border border-[#969696] py-2 px-2 rounded-md focus-within:border-blue-500 focus-within:outline-0' />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="phone">Phone</label>
            <input type="text" name='phone' className='border border-[#969696] py-2 px-2 rounded-md focus-within:border-blue-500 focus-within:outline-0' />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <label htmlFor="appointment">Ideal Appointment Date/Time</label>
            <input type="text" name='appointment' className='border border-[#969696] py-2 px-2 rounded-md focus-within:border-blue-500 focus-within:outline-0' />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea className='border border-[#969696] py-2 px-2 rounded-md focus-within:border-blue-500 focus-within:outline-0' name="message" id="" cols="5" rows="5"></textarea>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <input type="submit" value="SUBMIT" className='bg-[#FFDE17] py-3 px-12 rounded-md max-w-max cursor-pointer' />
          </div>

        </form>
      </section>
      {/* ------------------  contact section ------------------ */}
      {/* ------------------  general faq section ------------------ */}
      <section id='faq' className='max-w-7xl mx-auto px-2 py-10'>
        <div className="w-full flex flex-col gap-2 items-center text-center my-8">
          <p className='text-3xl md:stext-5xl font-medium'>General FAQ</p>
          <div className="bg-[#FFDE17] w-24 h-1 rounded"></div>
        </div>
        <Accordion slColor="#FFDE17" items={generalfaq} />
      </section>
      {/* ------------------  general faq section ------------------ */}
    </div>
  )
}

export default Home