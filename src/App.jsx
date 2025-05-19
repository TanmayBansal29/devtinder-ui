import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>Base Page</div>}/>
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <h1 className="text-3xl font-bold underline">Hello World</h1> */}
    </>
  )
}

export default App
