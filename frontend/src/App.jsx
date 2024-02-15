import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Collections from "./pages/Collections";
import BookCategory from "./pages/BookCategory";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import CssBaseline from "@mui/material/CssBaseline";
import BookPage from "./pages/BookPage";
import Basket from "./pages/Basket";
import CheckoutLayout from "./layouts/CheckoutLayout";

function App() {
  return (
    <CssBaseline>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />

          <Route path="/books">
            {/* <Route path="/books" element={?????}/> */}
            <Route path=":book_id" element={<BookPage />} />
          </Route>

          <Route path="/collections">
            <Route path="/collections/" element={<Collections />} />
            <Route path=":category_name" element={<BookCategory />} />
          </Route>

          <Route path="/basket" element={<Basket />} />
        </Route>

        <Route path="/checkout" element={<CheckoutLayout />}>
          <Route path="delivery" />
          <Route path="payment" element={<Collections />} />
        </Route>
      </Routes>
    </CssBaseline>
  );
}

export default App;
