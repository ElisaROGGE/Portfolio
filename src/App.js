import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

export default function App() {
  return (
    <>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
