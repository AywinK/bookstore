import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {

    return (
        <main
        style={{
            marginTop: "80px",
        }}
        >
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout;