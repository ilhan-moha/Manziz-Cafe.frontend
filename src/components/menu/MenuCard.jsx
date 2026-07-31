import "../../styles/MenuCard.css";
import { useCart } from "../../context/CartContext";

function MenuCard({ id, image, name, description, price }) {

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            image,
            name,
            description,
            price,
        });

        alert(`${name} added to cart!`);
    };

    console.log(image);

    return (
        <div className="menu-card">
            <img src={image} alt={name} className="menu-image" />

            <div className="menu-content">
                <h3>{name}</h3>
                <p>{description}</p>

                <div className="menu-footer">
                    <span className="price">Ksh {price}</span>

                    <button
                        className="cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;