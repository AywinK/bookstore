import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div
      style={{
        paddingTop: "72px"
      }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
