import { Route, Routes } from "react-router-dom"
import Navbar1 from "./components/Navbar1"
import Navbar2 from "./components/Navbar2"
import Navbar3 from "./components/Navbar3"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar1/>}/>
      <Route path="/home" element={<Navbar2/>}/>
      <Route path="/about-us" element={<Navbar3/>}/>
      
    </Routes>
    </>
  )
}

export default App