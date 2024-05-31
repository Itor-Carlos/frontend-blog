import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./app/pages/Home/Home"
import { LoginPage } from "./app/pages/Login"
import { Header } from "./app/components/Header"
import { CadastroUser } from "./app/pages/CadastroUser"

function App() {
  return (
     <Router>
        <Header title="Study Blog"/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/cadastrar-usuario" element={<CadastroUser/>}/>
        </Routes>
     </Router>
  )
}

export default App
