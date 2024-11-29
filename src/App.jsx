import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Testimonials from './Testimonials'

function App() {

  return (
    <div className='App'>
   <Navbar />
   <Banner />
   <Services/>
   <Testimonials/>
   <Contact/>
    </div>
  )
}

export default App
