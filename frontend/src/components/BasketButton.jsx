import { IconButton, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useBasket } from "../customHooks/useBasket";

const BasketButton = () => {
  const { basket } = useBasket();

  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to="/basket">
      <IconButton size="large" color="inherit">
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "0.8rem",
            },
          }}
          badgeContent={basket.reduce((acc, { quantity }) => acc + quantity, 0)}
          color="error"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default BasketButton;
