import { BrowserRouter, Routes, Route  } from "react-router-dom"
import About from "./pages/About"
import Layout from "./componets/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      
    </>
  )
}

export default App
