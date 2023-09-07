import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Who from "./Components/Who"
import Want from "./Components/Want"
import Work from "./Components/Work"
import Contact from "./Components/Contact"
import CustomCursor from "./Components/CustomCursor"
import Typography from "antd/es/typography/Typography"

function App() {

  return (
    <>
      <BrowserRouter>
      <CustomCursor />
      <Typography className="text-white fixed top-7 left-16">Logo</Typography>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/who" element={<Who />} />
          <Route path="/want" element={<Want />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
