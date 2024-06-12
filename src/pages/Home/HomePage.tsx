import Hero from "../../components/Hero/Hero"
import Nav from "../../components/Hero/Nav"
import AboutPage from "../About/AboutPage"
import BlogPage from "../Blog/BlogPage"

import ServicePage from "../Service/ServicePage"
import TeamPage from "../teams/TeamPage"

export default function HomePage() {
  return (
    <div className="bg-herobg font-kanit md:lg:bg-cover bg-center w-full min-h-screen  text-white ">
      <Nav />
      <Hero />
      <AboutPage />
      <TeamPage />
      <ServicePage />
      <BlogPage />
     
    </div>
  )
}
