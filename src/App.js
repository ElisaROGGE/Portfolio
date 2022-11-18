import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Layout from './components/Layout'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />  */}
        </Route>
      </Routes>
    </>
  )
}
