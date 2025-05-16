import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import News from './pages/News'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import HealthCare from './pages/HealthCare'
import SingleService from './pages/SingleService'


const App = () => {
  return (
    <div> 
      <Header/>
      <Router>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/singleservice" element={<SingleService />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/" element={<News />} />
          <Route path="/news/healthcare" element={<HealthCare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
     </div>
  )
}

export default App



