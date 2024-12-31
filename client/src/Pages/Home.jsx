import React from 'react'
import OurClient from '../Componets/Home/OurClinet'
import OurPatners from '../Componets/Home/OurPatners'
import WhyChooseUs from '../Componets/Home/WhyChooseUs'
import ClientTestimonials from '../Componets/Home/ClientTestimonials'
import HeroSection from '../Componets/Home/HeroSection'
import OurPortfolioScrollRight from '../Componets/Home/OurPortfolioScrollRight'
import ScrolingCard from '../Componets/Home/ScrolingCard'

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <OurClient/>
    <ScrolingCard/>
    <OurPortfolioScrollRight/>
    <WhyChooseUs/>
    <OurPatners/>
    <ClientTestimonials/>  
    </div>
  )
}