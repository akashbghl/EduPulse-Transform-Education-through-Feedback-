import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

function Contacts() {

  let data = [
    {
      icon: MdEmail,
      title: "Email",
      line1: "info@edupulse.com",
      line2: " support@edupulse.com"
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      line1: "+1 (555) 123-4567",
      line2: " Mon-Fri, 9:00 AM - 5:00 PM EST"
    },
    {
      icon: FaLocationDot,
      title: "Office",
      line1: "123 Education Lane",
      line2: " San Francisco, CA 94105"
    },
    {
      icon: MdWatchLater,
      title: "Hours",
      line1: "Monday - Friday 9:00 AM - 5:00 PM",
      line2: " Saturday - Sunday Closed"
    }
  ]

  return (
    <>
      <div className='w-screen px-2 py-8'>
        <div className="heading w-full h-fit p-1 flex justify-center items-center gap-2 mb-14 flex-col">
          <h1 className='font-bold text-4xl'>Contact Us</h1>
          <p className='text-zinc-400 text-xl'>Have questions or feedback? We'd love to hear from you</p>
        </div>
        <div className="main w-full h-[130vh] flex justify-center items-center gap-6">
          <div className="left w-[45%] h-full border-1 border-zinc-300 p-4 rounded-lg">
            <div className="top my-2">
              <h1 className='text-3xl font-semibold'>Send Us a Message</h1>
              <p className='text-zinc-400 font-semibold text-sm'>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <div className="form my-6">
              <form className="contact-form text-xl font-semibold">
                <div className="row flex justify-start items-start flex-col gap-1">
                  FirstName <input className='w-full p-1 border-1 border-black' type="text" name="firstName" required />
                  LastName <input className='w-full p-1 border-1 border-black' type="text" name="lastName" required />
                </div>
                <div className="my-2">
                  Email <input className='w-full p-1 border-1 border-black' type="email" name="email" required />
                </div>
                <div>
                  Select <select name="subject" className='w-full p-1 my-1 border-1 border-black' required>
                    <option value="">Select Subject</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                    <option value="inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  Message <textarea className='  w-full border-1 border-zinc-400' name="message" rows={5} required />
                </div>
              </form>
            </div>
            <button className='w-full p-2 cursor-pointer rounded-md bg-black text-white font-semibold'>Send Message</button>
          </div>
          <div className="right w-[45%] h-full">
            <div className="info w-full flex flex-col gap-1 h-fit p-3 mb-8 rounded-lg border-1 border-zinc-300">
              <div className="head my-6">
                <h2 className='font-semibold text-3xl'>Contact Information</h2>
                <p className='text-zinc-400'>Reach out to us through any of these channel</p>
              </div>
              {data.map((item, index) => {
                return (
                  <div key={index} className=' w-full h-fit flex gap-1 my-2'>
                    <div className="icon p-1">
                      <item.icon size={25} />
                    </div>
                    <div className=''>
                      <h3 className='font-semibold text-xl'>{item.title}</h3>
                      <p className='text-zinc-400 text-md font-semibold '>{item.line1} <br /> {item.line2}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="question w-full h-fit rounded-lg border-1 border-zinc-300 p-1">
              <h2 className='text-3xl font-semibold my-6'>Frequently Asked Questions</h2>
              <div className='my-5'>
                <h2 className='text-xl font-semibold'>How do I get started with EduPulse</h2>
                <p className='text-zinc-400 text-md font-semibold tracking-wide'>Simply sign up for an account, choose your role(student or teacher), and follow the onboarding process </p>
              </div>
              <div className='my-5'>
                <h2 className='text-xl font-semibold'>How do I get started with EduPulse</h2>
                <p className='text-zinc-400 text-md font-semibold tracking-wide'>Simply sign up for an account, choose your role(student or teacher), and follow the onboarding process </p>
              </div>
              <div className='my-5'>
                <h2 className='text-xl font-semibold'>How do I get started with EduPulse</h2>
                <p className='text-zinc-400 text-md font-semibold tracking-wide'>Simply sign up for an account, choose your role(student or teacher), and follow the onboarding process </p>
              </div>
              <p className=' text-sm font-semibold tracking-wide  flex justify-center items-center'>View All FAQs <IoIosArrowRoundForward size={20} /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts