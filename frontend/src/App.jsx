import './App.css'
import Homepage from './pages/Homepage'
import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Collections from "./pages/Collections";
import BookCategory from "./pages/BookCategory";
import ScrollToTopOnPageChange from './components/ScrollToTopOnPageChange';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <CssBaseline>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/collections" >
            <Route path="/collections/" element={<Collections />} />
            <Route path=":category_name" element={<BookCategory />} />
          </Route>
        </Route>
      </Routes>
    </CssBaseline>
  )
}

export default App
