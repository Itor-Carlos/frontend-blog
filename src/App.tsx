import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./app/pages/Home/Home"
import { LoginPage } from "./app/pages/Login"
import { Header } from "./app/components/Header"

function App() {
  return (
     <Router>
        <Header title="Study Blog"/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
     </Router>
  )
}

export default App
