import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa";

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Pacifico', cursive",
            backgroundColor: "#faf3e0",
            minHeight: "100vh",
            color: "#333",
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "#7b4397",
            textShadow: "2px 2px 5px #333",
            gap: "12px",
            marginBottom: "25px",
            transition: "0.3s",
            cursor: "pointer",
        },
        headingHover: {
            transform: "scale(1.1)",
            color: "#dc2430",
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "35px",
            flexWrap: "wrap",
        },
        input: {
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #7b4397",
            minWidth: "220px",
            backgroundColor: "#fff",
            color: "#333",
            transition: "0.3s",
        },
        inputHover: {
            borderColor: "#dc2430",
            boxShadow: "0 0 8px #dc2430",
        },
        select: {
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #7b4397",
            minWidth: "180px",
            backgroundColor: "#fff",
            color: "#333",
            transition: "0.3s",
        },
        selectHover: {
            borderColor: "#dc2430",
            boxShadow: "0 0 8px #dc2430",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
        },
    };

    return (
        <div style={styles.container}>
            <h1
                style={styles.heading}
                onMouseEnter={(e) => (e.target.style.transform = styles.headingHover.transform)}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
                <FaStoreAlt size={35} color="#dc2430" />
                Explore Our Products
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                    onMouseEnter={(e) => Object.assign(e.target.style, styles.inputHover)}
                    onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                    onMouseEnter={(e) => Object.assign(e.target.style, styles.selectHover)}
                    onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
        </div>
    );
}
