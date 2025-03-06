import { Features } from "./components/Features"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { How } from "./components/How"

function App() {

  return (
    <div className="font-lexend text-myBlack">
      <Header />
      <Hero />
      <How />
      <Features />
    </div>
  )
}

export default App
