import NavBar from "../../Components/NavBar/NavBar";
import ItemCard from "../../Components/ItemCard/ItemCard";

function ShopPage() {
    const items = [
        {
            id: 1,
            title: "Cool Product",
            price: 29.99,
            image: "https://via.placeholder.com/300"
        },
        {
            id: 2,
            title: "Awesome Item",
            price: 39.99,
            image: "https://via.placeholder.com/300"
        },
    ];

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

export default ShopPage;