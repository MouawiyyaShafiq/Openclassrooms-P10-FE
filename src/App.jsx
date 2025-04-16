import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
