import React from 'react'
import Hero from './Home/Hero'
import Work from './Home/Work'
import StuTeacher from './Home/StuTeacher'
import ExperienceSection from './Home/ExperienceSection'
import Footer from './Home/Footer'

function home() {

  return (
    <div>
      <Hero/>
      <Work />
      <StuTeacher />  
      <ExperienceSection />
      <Footer />
    </div>
  )
}

export default home
