import "./styles/styles.scss"
import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/core-sections/Header"
import Footer from "./components/core-sections/Footer"
import Home from"./components/pages/home/Home"
const WhoWeAre = lazy(() => import("./components/pages/who-we-are/WhoWeAre"))
const Projects = lazy(() => import("./components/pages/projects/Projects"))
const Contact = lazy(() => import("./components/pages/contact/Contact"))
const Page404 = lazy(() => import("./components/core-sections/Page404"))

const App = () => (
  <BrowserRouter basename="/HOMEPAGE">
    <Header/>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<WhoWeAre/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Suspense>
    <Footer/>
  </BrowserRouter>
)

export default App