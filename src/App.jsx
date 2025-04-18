import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
