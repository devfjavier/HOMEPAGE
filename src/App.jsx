import "./styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/core-sections/Header"
import Footer from "./components/core-sections/Footer"
import Page404 from "./components/core-sections/Page404"
import Home from "./components/pages/home/Home"
import WhoWeAre from "./components/pages/who-we-are/WhoWeAre"
import Projects from "./components/pages/projects/Projects"
import Contact from "./components/pages/contact/Contact"

const App = () => (
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<WhoWeAre/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>

    <Footer/>
  </BrowserRouter>
)

export default App