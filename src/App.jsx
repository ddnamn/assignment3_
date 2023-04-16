import Navbar from'./components/Navbar'
import Experience from './pages/Experience'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Interest from './pages/interest'
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
    <Interest/>
    <Awards/>

    </>
  )
}

export default App
