import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#6a0dad", // violet base
        color: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        fontFamily: "Arial, sans-serif"
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "#ff4500", // orange-red contrast
        fontWeight: "bold",
        letterSpacing: "1.5px"
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#ff4500", // orange-red
        padding: "8px 12px",
        borderRadius: "8px",
        fontWeight: "bold",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.2)"
    };

    const cartCountStyle = {
        backgroundColor: "#ffcccb", // light red-pink tone
        color: "#6a0dad", // violet for contrast
        borderRadius: "12px",
        padding: "3px 8px",
        marginLeft: "6px",
        fontSize: "14px",
        fontWeight: "bold"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>MyShop</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
