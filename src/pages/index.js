import React from "react"
import FeaturedListings from "../Components/Home/FeaturedListings"
import HeroSection from "../Components/Home/Hero"
import ImageGallery from "../Components/Home/ImageGallery"
import Layout from "../Components/Layout"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedListings />
      <ImageGallery />
    </Layout>
  )
}
