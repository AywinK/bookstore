import { Outlet } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import { useLocation } from "react-router-dom";

const CheckoutLayout = () => {
  const { pathname } = useLocation();
  const pageHeading =
    pathname.startsWith("/checkout/") ? pathname.split("/checkout/")[1] : "checkout";

  return (
    <>
      <CheckoutHeader pageHeading={pageHeading} />
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
