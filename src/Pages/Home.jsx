import React from 'react'
import Hero from '../components/Hero'
import Home_Shirt from '../components/Home_Shirt'
import FeaturedProducts from '../components/FeatureProduct'
import CustomerReviews from '../components/CustomerReviews'
import Contact from '../components/Contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
        <Hero />
        <Home_Shirt />
        <FeaturedProducts />
        <CustomerReviews />
        <Contact />
        <Footer />
    </div>
  )
}
