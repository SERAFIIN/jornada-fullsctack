import { Route, Routes } from "react-router-dom"

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import './App.css'
import ReadAll from "./components/ReadAll/ReadAll"
import Create from "./components/Create/Create"

function App() {
  
  return (
    <div className="App">
      <Header/>

      <div className="content">
        <Routes>
          <Route path="/" element={<ReadAll/>} />
          
          <Route path="/adicionar" element={<Create />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App