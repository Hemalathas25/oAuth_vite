import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Login } from './screens/Login'
import { Home } from './screens/Home'


function App() {
  
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
