import Navbar from'./components/Navbar'
import Experience from './pages/Experience'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Interests from './pages/Interests'
import Awards from './pages/Awards'

function App() {

  return (
    < >
    {/* navbar */}
    <Navbar />
    
    {/* pages */}
    <Home />
    <About/>
    <Experience/>
    <Skills/>
    <Interests/>
    <Awards/>

    </>
  )
}

export default App
