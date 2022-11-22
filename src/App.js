import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />  */}
      </Routes>
    </>
  )
}
