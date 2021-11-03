import React from "react"
import FeaturedListings from "../Components/Home/FeaturedListings"
import HeroSection from "../Components/Home/Hero"
import Layout from "../Components/Layout"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedListings />
    </Layout>
  )
}
