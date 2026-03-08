import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import MatrixRain from "./components/MatrixRain"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <MatrixRain/>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )

}

export default App