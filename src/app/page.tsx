"use client"
import React from 'react'
import Hero from '../components/Hero'
import AboutUs from  '../components/AboutUs'
import VisionSection from '@/components/Vision'
import Project from '@/components/Projects'

const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <VisionSection />
      <Project/>
    </div>
  )
}

export default page
