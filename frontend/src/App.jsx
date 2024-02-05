import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <div
      style={{
        paddingTop: "72px"
      }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
