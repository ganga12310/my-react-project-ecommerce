import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#1a1a2e", // Dark background for neon contrast
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "2.5rem",
            color: "#9400D3", // Neon violet
            textShadow: "0px 0px 10px #9400D3",
            marginBottom: "20px"
        },
        message: {
            fontSize: "1.2rem",
            color: "#00FFFF", // Cyan for contrast
            textShadow: "0px 0px 8px #00FFFF",
            marginBottom: "30px"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#9400D3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none",
            textShadow: "0px 0px 6px #FFFFFF",
            boxShadow: "0px 0px 15px #9400D3",
        },
        buttonHover: {
            backgroundColor: "#6A0DAD", // Slightly darker neon violet on hover
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a 
                href="/" 
                style={styles.button} 
                onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
                Go to Home
            </a>
        </div>
    );
}
