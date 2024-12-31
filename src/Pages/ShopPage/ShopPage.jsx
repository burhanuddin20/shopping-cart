import NavBar from "../../Components/NavBar/NavBar";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { useState, useEffect } from "react";

function ShopPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFakeItems()
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="app-wrapper">
                <NavBar />
                <div className="content-container">
                    <div className="shop-container">
                        <h2>Loading products...</h2>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app-wrapper">
                <NavBar />
                <div className="content-container">
                    <div className="shop-container">
                        <h2>Error: {error}</h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="app-wrapper">
            <NavBar />
            <div className="content-container">
                <div className="shop-container">
                    <h1 className="shop-title">Spend your money here!</h1>
                    <div className="shop-grid">
                        {items.map(item => (
                            <ItemCard 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

async function getFakeItems() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
}

export default ShopPage;