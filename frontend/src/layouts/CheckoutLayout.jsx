import { Outlet } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";

const CheckoutLayout = () => {
  return (
    <>
      <CheckoutHeader />
      <main
        style={{
          marginTop: "80px",
        }}
      >
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default CheckoutLayout;
