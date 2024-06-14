import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="project-background">
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App;