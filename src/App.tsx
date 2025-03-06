import { Blogs } from "./components/Blogs"
import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { How } from "./components/How"
import { Testimonials } from "./components/Testimonials"

function App() {

  return (
    <div className="font-lexend text-myBlack">
      <Header />
      <Hero />
      <How />
      <Features />
      <Testimonials />
      <Blogs />
    </div>
  )
}

export default App
