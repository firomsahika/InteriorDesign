import Hero from "../../components/Hero/Hero"
import Nav from "../../components/Hero/Nav"
import AboutPage from "../About/AboutPage"

export default function HomePage() {
  return (
    <div className="font-kanit bg-herobg md:lg:bg-cover bg-center w-full h-screen  text-white">
      <Nav />
      <Hero />
      
    </div>
  )
}
