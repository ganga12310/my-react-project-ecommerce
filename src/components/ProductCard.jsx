import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#fff",
        color: "#4B0082", // Violet brand color
        borderRadius: "8px",
        boxShadow: "0 2px 15px rgba(75, 0, 130, 0.4)", // Neon effect
        overflow: "hidden",
        margin: "25px", // Increased gap between products
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
        transition: "transform 0.3s ease"
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#4B0082" // Violet brand color
    };

    const priceStyle = {
        color: "#9400D3", // Darker violet
        fontSize: "18px",
        marginBottom: "8px",
    };

    const detailsText = {
        color: "#888",
        fontSize: "14px",
        marginTop: "8px",
        fontWeight: "normal"
    };

    const buttonStyle = {
        backgroundColor: "#4B0082", // Brand violet
        color: "#fff",
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#9400D3" : "#4B0082"; // Dark violet for hover
        e.target.style.boxShadow = hover ? "0 0 10px rgba(148, 0, 211, 0.8)" : "none"; // Neon glow effect
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
